import React, { useState } from 'react'
import style from "../styles/Home.module.css"


export default function Home() {

  return (
    <div className={style.Home}>
     <h1>Hello, I am
     <span className={style.Name}> Abel Acuna</span>
     <br/>
     <span className={style.Title}>Full Stack Developer</span>
     </h1>
    
     <p>I build scalable end-to-end web solutions. I am passionate about learning new technologies and solving problems to help teams.</p>
    </div>
    
  )
}
