import { useState } from 'react'
import styles from './Menu.module.css'
import Image from 'next/image'

export default function Menu() {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        if(showMenu === true) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    } 

    return (
        <header className={styles.header}>
            <div className={styles.detail}></div>
            <div className="container">
                <nav>
                    <Image onClick={handleShowMenu} className={styles.menu} src="/icones/menu.png" alt="Ícone de menu" width={50} height={28}/>
                    <div className={styles.navigation}>
                        <button data-aos="fade-right" className={styles.franqueado}>
                            <Image src="/icones/editar.png" alt="Ícone de planilha" width={28} height={28}/>
                            SEJA UM FRANQUEADO
                        </button>
                        <button data-aos="fade-left" className={styles.consultor}>
                            <Image src="/icones/seja_consultor.png" alt="Ícone de planilha" width={28} height={28}/>
                            SEJA UM CONSULTOR(A)
                        </button>
                        <button data-aos="fade-up" className={styles.comprar}>
                            QUERO COMPRAR
                        </button>
                    </div>
                    {showMenu && (  
                    <div className={styles.navResponsive}>
                        <button className={styles.franqueadoMobile}>
                            <Image src="/icones/editar.png" alt="Ícone de planilha" width={28} height={28}/>
                            SEJA UM FRANQUEADO
                        </button>
                        <button className={styles.consultorMobile}>
                            <Image src="/icones/seja_consultor.png" alt="Ícone de planilha" width={28} height={28}/>
                            SEJA UM CONSULTOR(A)
                        </button>
                        <button className={styles.comprarMobile}>
                            QUERO COMPRAR
                        </button>
                    </div>
                    )}
                    <button data-aos="fade-down" className={styles.restrito}>
                        <Image src="/icones/area_restrita.png" alt="Ícone de planilha" width={28} height={28}/>
                        ÁREA RESTRITA
                    </button>
                </nav>
            </div>
        </header>
    )
}
