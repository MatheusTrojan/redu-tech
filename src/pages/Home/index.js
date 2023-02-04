import Header from "components/Header"
import styles from "./Home.module.scss"
import logosCursos from "assets/inicial.png"

export default function Home() {
  return (
    <div>
      <Header 
        titulo="Classificados Tech"
        descricao="Adquira os melhores cursos de programação disponíveis no mercado!"
        className={styles.header}
        imagem={logosCursos}
      />
    </div>
  )
}
