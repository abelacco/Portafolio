import React from 'react'
import style from "../styles/Education.module.css"

export default function Education() {
  return (
    <div className={style.main}>
      <h2>Education</h2>
      <div className={style.Principal}>
      <div className={style.Container}>
            <h6>Computer Science</h6>
            <span>Apr23 - Today</span>
            <div className={style.Line}></div>
            <span className={style.CompanyU}>University of the People</span>
            <p> Bachelor of Science in Computer Science </p>
        </div>
        
        <div className={style.Container}>
            <h6>Full Stack Developer</h6>
            <span>Abr22 - Sep22</span>
            <div className={style.Line}></div>
            <span className={style.CompanyU}>SoyHenry</span>
            <p>An intensive online program that simulates a real work environment and prepares you for a successful career as a full stack developer</p>
        </div>

        <div className={style.Container}>
            <h6>Business management</h6>
            <span>Mar10 - Dic15</span>
            <div className={style.Line}></div>
            <span className={style.CompanyU}>University of Piura</span>
            <p>Professional program in business management.</p>
        </div>
      </div>
</div>
  )
}
