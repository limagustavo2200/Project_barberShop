'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Logo from '/public/barbearia.png'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState } from 'react';


export default function Home() {

  const [modoDark, setModoDark] = useState(false)
  function alterarModo() {
      setModoDark(!modoDark)
  }

  return (
      <main className={ modoDark ? styles.mainDark : null}>
        <div className={ modoDark ? styles.container_headerDark : styles.container_header}>
          <div className={ modoDark ? styles.container_logoDark : styles.container_logo}>
            <Image className={styles.logo} src={Logo}></Image>
          </div>
          <div className={styles.container_botao}>
            <button className={ modoDark ? styles.botaoDark : styles.botao} onClick={alterarModo}>{modoDark ? <MdLightMode /> : <MdOutlineDarkMode />}</button>
          </div>
        </div>
        <section className={styles.banner}></section>
        <section className={styles.section}>
          <div className={styles.container_conteudo}>
            <h1 className={styles.titulo}>Bem-vido a Barber Shop</h1>
            <h2 className={styles.subtitulo}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</h2>
            <p className={styles.paragrafo}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
            </p>
            <p className={styles.assin}>S. Kelly</p>
          </div>
        </section>
      </main>
    );
}
