import {
  Montserrat,
  Merriweather_Sans,
  Open_Sans,
  Playfair_Display,
  Forum,
} from "next/font/google";

// Configure Montserrat for Headings
export const montserrat = Montserrat({
  weight: ["700"], // Use bold (700) for headings
  subsets: ["latin"], // You can specify other subsets if needed
});

// Configure Merriweather for Subheadings
export const merriweather = Merriweather_Sans({
  weight: ["600"], // Semi-bold (600) for subheadings
  subsets: ["latin"],
});

// Configure Open Sans for Paragraph Text
export const openSans = Open_Sans({
  weight: ["400"], // Regular (400) for body text
  subsets: ["latin"],
});

// Configure Playfair Display for Elegant Headings or Quotes
export const playfairDisplay = Playfair_Display({
  weight: ["400", "700"], // Regular (400) and Bold (700) for flexibility
  subsets: ["latin"],
});

// Configure Forum for Informal or Friendly Text
export const forum = Forum({
  weight: ["400"], // Regular (400) for body text or informal elements
  style: ["normal"],
  subsets: ["latin"],
});
