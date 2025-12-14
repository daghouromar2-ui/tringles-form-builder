-- Create table for booking form submissions
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  wilaya TEXT NOT NULL,
  window_count INTEGER NOT NULL,
  installation_time TEXT NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert bookings (public form)
CREATE POLICY "Anyone can submit a booking"
ON public.bookings
FOR INSERT
WITH CHECK (true);

-- Only allow reading via backend/admin (no public read access)
CREATE POLICY "No public read access"
ON public.bookings
FOR SELECT
USING (false);