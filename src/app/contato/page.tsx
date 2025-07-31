// src/app/contato.tsx
import type { Metadata } from "next";
import estilos from "./contato.module.css";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "entre em contato conosco",
};

export default function Contato() {
  return (
    <section className={estilos.conteudo}>
      <h2>Contato</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </section>
  );
}
