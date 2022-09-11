import React from 'react'
import style from "../styles/Skills.module.css"
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
import slack from "../Icons/slack.png"
import trello from "../Icons/trello.png"
import visual from "../Icons/visual.png"
import drive from "../Icons/drive.png"
import git from "../Icons/git.png"
import gitHub from "../Icons/gitHub.png"




export default function EducationSkills() {
  return (
    <div className={style.Skills}>
        <div className={style.allSkills}>
          <div className={style.Tech}>
            <h2 className={style.titleT}>Technical Skills</h2>
            <div className={style.imagenes}>
              <img className={style.cir} src={mongo} alt="cargando"/>
              <img className={style.cir} src={express} alt="cargando"/>
              <img className={style.cir} src={react} alt="cargando"/>
              <img className={style.cir}  src={node} alt="cargando"/>
              <img className={style.cir}  src={js} alt="cargando"/>
              <img className={style.cir}  src={css} alt="cargando"/>
              <img className={style.cir}  src={html} alt="cargando"/>
              <img className={style.cir}  src={postgress} alt="cargando"/>
              <img className={style.cir}  src={redux} alt="cargando"/>
              <img className={style.cir}  src={git} alt="cargando"/> 
              
            </div>       
          </div>
          <div className={style.Tech}>
            <h2  className={style.titleS}>Soft Skills</h2>
            <div className={style.imagenes}>
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
            <h2  className={style.titleTo}>Tool Skills</h2>
            <div className={style.imagenesTool}>
              <img className={style.cir} src={slack} alt="cargando"/>
              <img className={style.cir} src={trello} alt="cargando"/>
              <img className={style.cir}  src={gitHub} alt="cargando"/>
              <img className={style.cir}  src={drive} alt="cargando"/>
              <img className={style.cir} src={visual} alt="cargando"/>
              <img className={style.cir} src={postman} alt="cargando"/>
            </div>       
          </div>
        </div>
    </div>
  )
}
