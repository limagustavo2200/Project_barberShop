'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';
import Header from "@/components/Header";
import Assinatura from "@/components/Assinatura";



export default function Home() {

  const [modoDark, setModoDark] = useState(false)
  
  function alterarModo() {
      setModoDark(!modoDark)
  }

  return (
      <div>
        <Header modoDark={modoDark} alterarModo={alterarModo} />
        <main className={ modoDark ? styles.mainDark : styles.main }>
          <section className={styles.banner}></section>
          <section className={styles.section}>
            <div className={styles.container_conteudo}>
              <h1 className={styles.titulo}>Bem-vindo a Barber Shop</h1>
              <h2 className={styles.subtitulo}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</h2>
              <p className={styles.paragrafo}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
              </p>
              <Assinatura>
                <p className={styles.assin}>S.Kelly</p>
              </Assinatura>
            </div>
          </section>
        </main>
      </div>
    );
}
