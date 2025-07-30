// src/app/produtos.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos | PetShop",
  description: "Produtos disponiveis dos pets",
};

export default function Produtos() {
  return (
    <section>
      <h2>Produtos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>;
    </section>
  );
}
