// src/components/Filtrocategorias.tsx
import estilos from "./FiltroCategorias.module.css";

type FiltroCategoriasProps = {
  categorias: string[];
  categoriaAtiva: null | string;
  aoSelecionar: (categoria: null | string) => void;
};

export default function FiltroCategorias({
  categorias,
  categoriaAtiva,
  aoSelecionar,
}: FiltroCategoriasProps) {
  return (
    <div className={estilos.categorias}>
      <button>Categoria A</button>
      <button>Categoria B</button>
      <button className={estilos.limpar}>Limpar</button>
    </div>
  );
}
