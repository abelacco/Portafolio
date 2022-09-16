import React from 'react'
import style from "../styles/ContacMe.module.css"
import gmail from "../Icons/gmail.png"
import whatsapp from "../Icons/whatsapp.png"
import telegram from "../Icons/telegrama.png"
import peru from "../Icons/peru.png"
import Menu from "./Menu"

export default function ContactMe() {
  return (
    <div className={style.main}>
       <Menu/>
   
    <div className={style.Principal}>
     
      <div className={style.contact}>
          <h1>Get In Touch</h1>
          <form  className={style.Form} target="_blank" action="https://formsubmit.co/f5f9e3462abb7925c00169f06e003a24 " method="POST">
            <div className={style.Input}>
                  <input className={style.DivInput2}   type="text" name="name"  placeholder="Full Name" required/>
                  <input className={style.DivInput2} type="email" name="email"  placeholder="Email Address" required/>
              <textarea className={style.DivInput2} placeholder="Your Message"  name="message" rows="10" required></textarea>
            </div>
            <button type="submit" >Send Email</button>
          </form>
      </div>
      <div className={style.info}>
        <div className={style.Detail}>
            <div className={style.Cel}>
              <img className={style.icon} src={whatsapp} alt="cargando"/>
              <img className={style.country} src={peru} alt="cargando"/>
              <a className={style.A} href="https://cutt.ly/bCHnBQf" target="__blank"><span>+51 947308823</span></a>
            </div>
            <div className={style.Cel}>
            <img className={style.icon} src={telegram} alt="cargando"/>
              <img className={style.country} src={peru} alt="cargando"/>
              <span>+51 947308823</span>
            </div>
            <div className={style.Cel}>
            <img className={style.icon} src={gmail} alt="cargando"/>
              <span>abel3121@gmail.com</span>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
