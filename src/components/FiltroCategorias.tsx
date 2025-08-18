// src/components/Filtrocategorias.tsx
import estilos from "./FiltroCategorias.module.css";

export default function FiltroCategorias() {
  return (
    <div className={estilos.categorias}>
      <button>Categoria A</button>
      <button>Categoria B</button>
      <button className={estilos.limpar}>Limpar</button>
    </div>
  );
}
