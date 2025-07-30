import Link from "next/link";
import Menu from "./Menu";
import React from "react";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <Link href="/">PetShop</Link>
      </h1>
      <Menu />
    </header>
  );
}
