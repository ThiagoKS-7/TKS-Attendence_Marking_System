import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React, { useState,useCallback,useEffect } from 'react'

export default function Home() {
  const [clock, setClock] = useState();
  const [day, setDay] = useState();
  const currentTime = useCallback(() =>{
    let date = new Date(Date.now());
    let hours = (
      date.getHours() <= 9 ? 
      '0' + date.getHours() : 
      date.getHours()
    );
    let minutes = (
      date.getMinutes() <= 9 ? 
      '0' + date.getMinutes() : 
      date.getMinutes()
    );
    return `${hours}:${minutes}`;
  }, []);

  const currentDate = useCallback(() =>{
    const meses = {
      1: "Janeiro",
      2: "Fevereiro",
      3: "Março",
      4: "Abril",
      5: "Maio",
      6: "Junho",
      7: "Julho",
      8: "Agosto",
      9: "Setembro",
      10: "Outubro",
      11: "Novembro",
      12: "Dezembro"
    }
    let date = new Date(Date.now());
    let day = (
      date.getDate() <= 9 ? 
      '0' + date.getDate() : 
      date.getMinutes()
    );
    return `${day} de ${meses[date.getMonth() +1]} de ${date.getFullYear()}`;
  }, []);

  setInterval(() => {
    setClock(currentTime);
  },1000)
  useEffect(() => {
    setDay(currentDate);
  }, [currentDate]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="min-h-[24vw] mt-[2vw] w-[95%] flex flex-col  pt-9 pb-9 justify-center items-center bg-gray-100  dark:bg-sky-900 rounded">
          <div className={styles.title_wrapper}>
            <h1 className={styles.title}>MARCAÇÃO DE PONTO</h1>
          </div>
          <hr size="10" width="95%"></hr>
          <h3 className={styles.info}>Registre seu ponto!</h3>
          <h1 className={styles.clock}>
            {clock}
          </h1>
          <h1 className={styles.day}>
            {day}
          </h1>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className={styles.button}>
            Registrar
          </button>
          <h5 className={styles.last_entries}>Últimas entradas:</h5>
        </div>
      </main>
    </>
  )
}
