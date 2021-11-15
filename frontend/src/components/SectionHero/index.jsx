import styles from './SectionHero.module.css'
import Link from 'next/link'

export default function SectionHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.efect}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1>Dúvidas</h1>
                        <p>
                            <strong>Listamos aqui algumas dúvidas frequentes </strong>
                            caso sua dúvida não esteja aqui, você pode
                            entrar em contato conosco <Link href="https://google.com"><a>clicando aqui</a></Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
