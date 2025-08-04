// src/app/posts/[id]/page.tsx
import estilos from "./detalhe-post.module.css";
import Container from "@/components/Container";
import { Post } from "@/types/Post";

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;

  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar o post: " + resposta.statusText);
  }

  const post: Post = await resposta.json();
  const { titulo, categoria, descricao } = post;

  return (
    <article className={estilos.conteudo}>
      <h2>{titulo}</h2>
      <Container>
        <h3>{categoria}</h3>
        <p>{descricao}</p>
      </Container>
    </article>
  );
}
