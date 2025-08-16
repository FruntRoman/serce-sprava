import Link from "next/link";
import { FaSpotify, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Мій Гурт</h1>
      <nav className="flex gap-6 items-center">
        <Link href="#about">Про нас</Link>
        <Link href="#music">Музика</Link>
        <Link href="#shows">Концерти</Link>
        <Link href="#contact">Контакти</Link>
        <div className="flex gap-4 text-xl">
          <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">
            <FaSpotify />
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
}
