import Header from "components/Header"
import styles from "./Home.module.scss"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {

  const navigate = useNavigate();

  const categorias = useSelector(state => state.categorias);

  return (
    <div>
      <Header 
        titulo="Classificados Tech"
        descricao="Adquira os melhores cursos de programação disponíveis no mercado!"
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>
            Confira as categorias:
          </h1>
        </div>

        <div className={styles["categorias-container"]}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => navigate(`/categorias/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h2>{categoria.nome}</h2>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
