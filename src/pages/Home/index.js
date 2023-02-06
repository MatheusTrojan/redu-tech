import Header from "components/Header"
import styles from "./Home.module.scss"
import logosCursos from "assets/inicial.jpg"

import frontThumb from "assets/categorias/thumbnail/front-end.png"
import devOpsThumb from "assets/categorias/thumbnail/devops.png"
import UxThumb from "assets/categorias/thumbnail/ux-design.png"
import dataScienceThumb from "assets/categorias/thumbnail/data-science.png"
import mobileThumb from "assets/categorias/thumbnail/mobile.png"

import { useNavigate } from "react-router-dom";

const categorias =  [{
  nome: 'Front-end',
  thumbnail: frontThumb,
  header: "eletronicosHeader",
  id: 'eletronicos',
  descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {
  nome: 'DevOps',
  thumbnail: devOpsThumb,
  header: "automotivoHeader",
  id: 'automotivos',
  descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
}, {
  nome: 'UX & Design',
  thumbnail: UxThumb,
  header: "jogosHeader",
  id: 'jogos',
  descricao: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
  nome: 'Data Science',
  thumbnail: dataScienceThumb,
  header: "escritorioHeader",
  id: 'escritorio',
  descricao: 'Tudo para o que escritório ficar incrível!'
}, {
  nome: 'Mobile',
  thumbnail: mobileThumb,
  header: "somHeader",
  id: 'som',
  descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}];

export default function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <Header 
        titulo="Classificados Tech"
        descricao="Adquira os melhores cursos de programação disponíveis no mercado!"
        className={styles.header}
        imagem={logosCursos}
      />
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>
            Categorias
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
