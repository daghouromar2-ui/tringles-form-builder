import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { google } from "googleapis";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

await auth.authorize();

const sheets = google.sheets({ version: "v4", auth });

app.post("/booking", async (req, res) => {
  try {
    const submittedAt = new Date().toLocaleString("fr-FR", {
      timeZone: "Africa/Algiers",
    });
    const {
      fullName,
      phone,
      wilaya,
      windowCount,
      installationTime,
      address,
    } = req.body;

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          fullName,
          phone,
          wilaya,
          windowCount,
          installationTime,
          address,
          submittedAt
        ]],
      },
    });

    console.log("✅ Booking saved");

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

app.listen(4000, () => {
  console.log("🚀 Backend running on http://localhost:4000");
});
