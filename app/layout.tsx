// RootLayout.tsx
import Navbar from "./components/Navbar";
import { SurvivorProvider } from "./context/survivorContext";
import "./globals.css"; // Global CSS

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <SurvivorProvider> {/* Wrap the entire layout with SurvivorProvider */}
          <Navbar /> {/* Navbar at the top */}
          <main className="container mx-auto p-4">{children}</main>
        </SurvivorProvider>
      </body>
    </html>
  );
}
