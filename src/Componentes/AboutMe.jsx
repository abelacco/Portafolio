import React from 'react'
import style from "../styles/AboutMe.module.css"

export default function AboutMe() {
  return (
    <div className={style.AboutMe}>
        <img src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662685109/samples/Abel%20PIC/WhatsApp_Image_2022-09-07_at_09.16.24_uwuenk.jpg" alt="loading"/>
        <div className={style.Text}>
          <h1>I am
          <span className={style.Name}> Abel Acuna</span>
          <br/>
          <span className={style.Title}>Full Stack Developer</span>
          </h1>
          <div className={style.description}>
            <ol className={style.option}>
                  <p>Fullname    : Abel Acuna Coronado</p>
                  <p>Age         : 31 years</p>
                  <p>Nationality : Peruvian</p>
                  <p>Languages   : Spanish,English</p>
                  <p>Email       : abel3121@gmail.com</p>
                  <p>Location    : Piura,Peru</p>
                  <p>Available   : Available Worldwide(Remotely)</p>
              </ol>
          </div>
        </div>
    </div>
  )
}
