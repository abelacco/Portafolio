import React from 'react'
import style from "../styles/Resume.module.css"
import js from "../Icons/js.png"
import node from "../Icons/nodejs.png"
import mongo from "../Icons/mongodb_plain_wordmark_logo_icon_146423.png"
import express from "../Icons/express.png"
import react from "../Icons/react.png"
import css from "../Icons/css-3.png"
import html from "../Icons/html-5.png"
import postgress from "../Icons/postgresql.png"
import postman from "../Icons/postman.png"
import redux from "../Icons/redux.png"
import bootstrap from "../Icons/bootstrap.png"


export default function EducationSkills() {
  return (
    <div className={style.Skills}>
      <div className="Technical">
        <div className={style.allSkills}>
          <div className={style.Tech}>
            <h2>Technical Skills</h2>
            <div className={style.imagenes}>
              <img className={style.cir} src={mongo} alt="cargando"/>
              <img className={style.cir} src={express} alt="cargando"/>
              <img className={style.rec} src={react} alt="cargando"/>
              <img className={style.cir}  src={node} alt="cargando"/>
              <img className={style.cir}  src={js} alt="cargando"/>
              <img className={style.cir}  src={css} alt="cargando"/>
              <img className={style.cir}  src={html} alt="cargando"/>
              <img className={style.cir}  src={postgress} alt="cargando"/>
              <img className={style.cir}  src={postman} alt="cargando"/>
              <img className={style.cir}  src={redux} alt="cargando"/>
              <img className={style.cir}  src={bootstrap} alt="cargando"/> 
            </div>       
          </div>
          <div className={style.Tech}>
            <h2>Soft Skills</h2>
            <div className={style.Soft}>
              <button> Communication</button>
              <button> Flexibility</button>
              <button>Professionalism</button>
              <button>Responsibility</button>
              <button>Teamwork </button>
              <button>Work ethic</button>
              <button>Cooperation</button>
              <button>Time management</button>
              <button>Creativity</button>
              <button>Self-learning</button>
              <button>Problem solving</button>
              <button>Open-Mindedness</button>     
            </div>       
          </div>
          <div className={style.Tech}>
            <h2>Tool Skills</h2>
            <div className={style.imagenes}>
              <img className={style.cir} src={mongo} alt="cargando"/>
              <img className={style.cir} src={express} alt="cargando"/>
              <img className={style.rec} src={react} alt="cargando"/>
              <img className={style.cir}  src={node} alt="cargando"/>
              <img className={style.cir}  src={js} alt="cargando"/>
              <img className={style.cir}  src={css} alt="cargando"/>
              <img className={style.cir}  src={html} alt="cargando"/>
              <img className={style.cir}  src={postgress} alt="cargando"/>
              <img className={style.cir}  src={postman} alt="cargando"/>
              <img className={style.cir}  src={redux} alt="cargando"/>
              <img className={style.cir}  src={bootstrap} alt="cargando"/> 
            </div>       
          </div>
        </div>
      </div>
      

    </div>
  )
}
