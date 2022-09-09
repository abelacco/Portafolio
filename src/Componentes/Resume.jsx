import React from 'react'
import style from "../styles/Resume.module.css"
import js from "../Icons/js.png"
import node from "../Icons/nodejs.png"
import mongo from "../Icons/mongodb_plain_wordmark_logo_icon_146423.png"
import express from "../Icons/express.png"
import react from "../Icons/react.png"

export default function EducationSkills() {
  return (
    <div className={style.Skills}>
      <h1>Skills</h1>
      <div className={style.allSkills}>
        <div className={style.Tech}>
          <h3>Technical Skills</h3>
          <div className={style.imagenes}>
            <img src={mongo} alt="cargando"/>
            <img src={express} alt="cargando"/>
            <img src={react} alt="cargando"/>
            <img src={node} alt="cargando"/>
            <img src={js} alt="cargando"/>
            
           
          </div>
       
        </div>
        
      </div>
    </div>
  )
}
