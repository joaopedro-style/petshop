// src/app/sobre.tsx
import Colaboradores from "@/components/Colaboradores";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Sobre nós",
};

export default function Sobre() {
  return (
    <section>
      <h2>Sobre</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
        laudantium odio! Quia sequi corporis iste repellat, recusandae explicabo
        numquam.
      </p>

      <Colaboradores />
    </section>
  );
}
