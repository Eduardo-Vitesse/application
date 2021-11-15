import { useState } from 'react'
import styles from './Accordions.module.css'
import Image from 'next/image'

export default function Accordions({ title, description, aos}) {
    const [show, setShow] = useState(false)

    const handleShowDescrption = () => {
        if(show === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    return (
        <div onClick={handleShowDescrption} className={styles.accordions} data-aos={aos}>
            <div className={styles.accTop}>
                <p>{title}</p>
                <Image className={show ? styles.arrowUp : styles.arrowDown} src="/icones/seta.png" alt="Ícone de seta" width={25} height={15}/>
            </div>
            {show && (
                <p className={styles.text}>{description}</p>
            )}
        </div>
    )
}
