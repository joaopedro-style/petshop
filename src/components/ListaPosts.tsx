// src/components/ListaPosts.tsx
import estilos from "./ListaPosts.module.css";

export default function ListaPosts() {
  return (
    <div className={estilos.posts}>
      <article>
        <h3>Titulo do post...</h3>
        <p>Subtítulo do post...</p>
      </article>
    </div>
  );
}
