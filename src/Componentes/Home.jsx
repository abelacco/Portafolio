import React, { useState } from 'react'
import style from "../styles/Home.module.css"
import linkedin from "../Icons/linkedin.png"
import gitHub from "../Icons/gitHub.png"


export default function Home() {

  return (
    <div className={style.Home}>
     <h1>Hello, I am
     <span className={style.Name}> Abel Acuna</span>
     <br/>
     <span className={style.Title}>Full Stack Developer</span>
     </h1> 
     <p>I build scalable end-to-end web solutions. I am passionate about learning new technologies and solving problems to help teams.</p>
     <div className={style.divImg}>
     <a className={style.A} href="https://www.linkedin.com/in/abelacunacoronado/" target="__blank"><img className={style.img} src={linkedin} alt="linkedind"/></a>
     <a className={style.A} href="https://github.com/abelacco" target="__blank"><img className={style.img} src={gitHub} alt="linkedind"/></a>
     </div>
    </div>
    
  )
}
