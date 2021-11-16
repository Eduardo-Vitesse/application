import Head from 'next/head'
import Menu from '../components/Menu'
import SectionHero from '../components/SectionHero'
import Footer from '../components/Footer'
import Accordions from '../components/Accordions'
import api from '../services/api'

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
  const res = await api.get('/lista_duvidas')

  return {
    props: {
      data: res.data,
    },
    revalidate: 5
  }
}
