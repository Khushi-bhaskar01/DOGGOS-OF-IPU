import "./globals.css";

export const metadata = {
  title: "DOOGOS IPU - Dog Adoption & Rescue",
  description: "Rescue, protect, and care for dogs in need. Adopt a dog today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
