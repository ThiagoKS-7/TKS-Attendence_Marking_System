import styles from '@/styles/Home.module.css'
import $ from 'jquery'

const AttendenceCard = ({clock, date}) => {
    const registerAttendence = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const settings = {
                "url": "http://127.0.0.1:8000/v1/attend",
                "method": "POST",
                "timeout": 0,
                "headers": {
                  "Content-Type": "application/json"
                },
                "data": JSON.stringify({
                    "user_id": user.id,
                    "func_id": user.emp_id,
                    "adm_id": user.adm_id
                  }),
                error: function (xhr, ajaxOptions, thrownError) {
                  console.log(xhr.status, thrownError);
                  alert("Erro! Usuário e/ou senha inválidos!");
                }
            };
            await $.ajax(settings) 
            // await $.ajax(settings).done(async function (response) {
            //     getRecents()
                
            // });
          } catch(e) {
            console.error(e);
          }
    }
    return (
        <>
            <main className="flex flex-col items-center row-span-2  col-span-2 ... self-center mt-[2.5em]">
                <div className="t-[2vw] w-[50%] flex flex-col transition-all duration-1000 ease-in-out  pt-9 pb-9 justify-center items-center bg-gray-100  dark:bg-sky-900 rounded">
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>MARCAÇÃO DE PONTO</h2>
                </div>
                <hr size="10" width="95%"></hr>
                <h3 className={styles.info}>Registre seu ponto!</h3>
                <h2 className={styles.clock}>
                    {clock}
                </h2>
                <h2 className={styles.day}>
                    {date}
                </h2>
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className={styles.button}
                    onClick={registerAttendence}>
                    Registrar
                </button>
                <h5 className={styles.last_entries}>Últimas entradas:</h5>
                </div>
            </main>
        </>
    )
}

export default AttendenceCard