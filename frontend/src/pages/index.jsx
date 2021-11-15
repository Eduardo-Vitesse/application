import Head from 'next/head'
import Menu from '../components/Menu'
import SectionHero from '../components/SectionHero'
import Footer from '../components/Footer'
import Accordions from '../components/Accordions'

export default function Home({data}) {

  return (
    <>
      <Head><title>FAQ</title></Head>
      <Menu/>
      <SectionHero/>
      <section className="container">
        {data.map(item => (
          <Accordions 
          key={item.id} 
          title={item.titulo} 
          description={item.descricao}
          aos={(Number(item.id) % 2 !== 0) ? 'fade-right' : 'fade-left'}
          />
        ))}
      </section>
      <Footer/>
    </>
  )
}

export async function getStaticProps(ctx) {
  const res = await fetch(`http://localhost:5000/lista_duvidas`)
  const data = await res.json()

  return {
    props: {data},
  }
}
