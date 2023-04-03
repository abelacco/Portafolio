import React from 'react'
import style from "../styles/AboutMe.module.css"
import cv from "../AbelAcunaCV.pdf"
import Menu from "./Menu"



export default function AboutMe() {
  return (
    <div>
    <Menu/>
    <div className={style.AboutMe}>
       
        <img src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662937391/samples/Abel%20PIC/2019_08_23_HubUDEP_-_3ra_Generaci%C3%B3n_095_dnzk25.jpg" alt="loading"/>
        <div className={style.Text}>
          <h1>I am
          <span className={style.Name}> Abel Acuna</span>
          <br/>
          <span className={style.Title}>Full Stack Developer</span>
          </h1>
          <div className={style.description}>
            <ol className={style.option}>
                  <p>Fullname    : Abel Acuna Coronado</p>
                  <p>Age         : 32 years</p>
                  <p>Nationality : Peruvian</p>
                  <p>Languages   : Spanish,English</p>
                  <p>Email       : abel3121@gmail.com</p>
                  <p>Location    : Piura,Peru</p>
                  <p>Available   : Available Worldwide(Remotely)</p>
              </ol>
          </div>
          <a className={style.Download} href={cv}
            download="AbelAcunaCV">
            Download CV
          </a>
 
        </div>
    </div>
    </div>
  )
}
