import Header from "components/Header"
import styles from "./Home.module.scss"
import logosCursos from "assets/inicial.png"

const categorias =  [{
  nome: 'Eletrônicos',
  thumbnail: eletronicosThumb,
  header: eletronicosHeader,
  id: 'eletronicos',
  descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {
  nome: 'Automotivo',
  thumbnail: automotivoThumb,
  header: automotivoHeader,
  id: 'automotivos',
  descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
}, {
  nome: 'Jogos',
  thumbnail: jogosThumb,
  header: jogosHeader,
  id: 'jogos',
  descricao: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
  nome: 'Escritório',
  thumbnail: escritorioThumb,
  header: escritorioHeader,
  id: 'escritorio',
  descricao: 'Tudo para o que escritório ficar incrível!'
}, {
  nome: 'Som e imagem',
  thumbnail: somThumb,
  header: somHeader,
  id: 'som',
  descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}];

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
