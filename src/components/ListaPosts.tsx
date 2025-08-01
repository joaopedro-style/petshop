// src/components/ListaPosts.tsx
import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";

/* Configurando um tipo para este componente e, neste tipo, definimod a prop posts relacionando ela ao tipo Post criado anteriormente. */
type ListaPostsProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostsProps) {
  return (
    <div className={estilos.posts}>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.titulo}</h3>
          <p>{post.subtitulo}</p>
        </article>
      ))}
    </div>
  );
}
