// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import estilos from "./page.module.css";
import arrayPosts from "@/data/array-posts";
export default function Home() {
  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>Aqui você encontra as últimas notícias sobre Pets.</p>
      <ListaPosts posts={arrayPosts} />
    </section>
  );
}
