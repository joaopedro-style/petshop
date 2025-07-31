// src/app/sobre.tsx
import type { Metadata } from "next";
import estilos from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Sobre nós",
};

export default function Sobre() {
  return (
    <section className={estilos.conteudo}>
      <h2>Sobre</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
        laudantium odio! Quia sequi corporis iste repellat, recusandae explicabo
        numquam.
      </p>
    </section>
  );
}
