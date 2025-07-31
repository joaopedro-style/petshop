// src/components/Cabecalho.tsx
import Link from "next/link";
import Menu from "./Menu";
import estilos from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={estilos.topo}>
      <div className="limitador">
        <h1>
          <Link href="/">PetShop</Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
}
