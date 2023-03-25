import AttendenceCard from '@/components/AttendenceCard';
import Head from 'next/head'
import React, { useState,useCallback,useEffect } from 'react'
import $ from 'jquery'
import { useRouter } from 'next/router'

export default function Attendence() {
  const [clock, setClock] = useState();
  const [user, setUser] = useState("");
  const [day, setDay] = useState();
  const router = useRouter();
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
      date.getDate()
    );
    return `${day} de ${meses[date.getMonth() +1]} de ${date.getFullYear()}`;
  }, []);

  setInterval(() => {
    setClock(currentTime);
  },1000)
  useEffect(() => {
    setDay(currentDate);
  }, [currentDate]);
  useEffect(() => {
    const settings = {
      "url": "http://localhost:3000/api/checkUser",
      "method": "GET",
      "timeout": 0,
      "headers": {
      "Content-Type": "application/json"
      },
      "data": {
        "id": typeof window !== 'undefined' ? user.id : "-",
      },
      complete: function(xhr, textStatus) {
          if(xhr.status == 403) {
              router.push("/forbidden")
          } else {
              setUser(JSON.parse(localStorage.getItem('user')))
              if (user) {
                  setTheme(localStorage.getItem('theme'));
                  setOfficeRole(user?.office ? user.office : user.role);
              }
          }
      } 
    };
    
  
    $.ajax(settings);

  },[])

  return (
    <>
      <Head>
        <title>TKS - Attendence Marking</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AttendenceCard clock={clock} date={day}/>
    </>
  )
}
