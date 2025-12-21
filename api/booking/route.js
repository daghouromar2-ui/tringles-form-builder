import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      fullName,
      phone,
      wilaya,
      windowCount,
      installationTime,
      address,
    } = req.body;

    const submittedAt = new Date().toLocaleString("fr-FR", {
      timeZone: "Africa/Algiers",
    });

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    await auth.authorize();

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          submittedAt,
          fullName,
          phone,
          wilaya,
          windowCount,
          installationTime,
          address,
        ]],
      },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Sheets error:", error);
    return res.status(500).json({ error: "Failed to save booking" });
  }
}
