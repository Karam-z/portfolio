import "./globals.css";

export const metadata = {
  title: "Karam Zuheir | Portfolio",
  description: "Mechatronics Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
