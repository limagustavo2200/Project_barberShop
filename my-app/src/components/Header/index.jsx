import styles from './header.module.css'
import Logo from '/public/barbearia.png'
import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function Header(props) {
    return(
        <header className={ props.modoDark ? styles.container_headerDark : styles.container_header }>
            <div className={ props.modoDark ? styles.container_logoDark : styles.container_logo }> 
                <Image className={styles.logo} src={Logo}></Image>
            </div>

            <div className={ styles.container_botao }>
                <button className={ props.modoDark ? styles.botaoDark : styles.botao } onClick={ props.alterarModo }>{ props.modoDark ? <MdLightMode /> : <MdOutlineDarkMode /> }</button>
            </div>
        </header>
    )
}