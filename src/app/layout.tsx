import "../styles/globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Band",
  description: "Офіційний сайт гурту",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="bg-black text-white font-sans">
        <header className="bg-gray-900 border-b border-gray-800 text-white">
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/" className="text-2xl font-bold">
              My Band
            </Link>
            <ul className="flex gap-6">
              <li>
                <Link href="/about">Про нас</Link>
              </li>
              <li>
                <Link href="/music">Музика</Link>
              </li>
              <li>
                <Link href="/tour">Тур</Link>
              </li>
              <li>
                <Link href="/contacts">Контакти</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-10">{children}</main>

        <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-10">
          <div className="container mx-auto text-center text-gray-400">
            © {new Date().getFullYear()} My Band. Всі права захищені.
          </div>
        </footer>
      </body>
    </html>
  );
}
