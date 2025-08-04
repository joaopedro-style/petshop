// src/app/posts/[id]/page.tsx
import estilos from "./detalhe-post.module.css";
import Container from "@/components/Container";

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

export default function DetalhePost({ params }: DetalhePostProps) {
  return (
    <article className={estilos.conteudo}>
      <h2>Título...</h2>
      <Container>
        <h3>Categoria...</h3>
        <p>Descrição...</p>
      </Container>
    </article>
  );
}
