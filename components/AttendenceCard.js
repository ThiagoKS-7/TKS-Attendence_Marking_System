import styles from '@/styles/Home.module.css'

const AttendenceCard = ({clock, date}) => {
    return (
        <>
            <main className="flex flex-col items-center row-span-2  col-span-2 ... self-center mt-[2.5em]">
                <div className="t-[2vw] w-[50%] flex flex-col transition-all duration-1000 ease-in-out  pt-9 pb-9 justify-center items-center bg-gray-100  dark:bg-sky-900 rounded">
                <div className={styles.title_wrapper}>
                    <h1 className={styles.title}>MARCAÇÃO DE PONTO</h1>
                </div>
                <hr size="10" width="95%"></hr>
                <h3 className={styles.info}>Registre seu ponto!</h3>
                <h1 className={styles.clock}>
                    {clock}
                </h1>
                <h1 className={styles.day}>
                    {date}
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

export default AttendenceCard