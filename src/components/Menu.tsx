// src/components/Menu.tsx
import Link from "next/link";
import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.menu}>
      <Link href="/">Blog</Link>
      <Link href="/produtos">Produtos</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/contato">Contato</Link>
    </nav>
  );
}
