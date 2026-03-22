import "./globals.css";

export const metadata = {
  title: "Junie's Nails",
  description: "Random Nail Design Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
