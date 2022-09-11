import React from 'react'
import style from "../styles/Experience.module.css"

function Experience() {
  return (
    <div className={style.Principal}>
        <div className={style.Container}>
            <h6>Full Stack Developer</h6>
            <span>Aug22 - Sep22</span>
            <div className={style.Line}></div>
            <span className={style.Company}>Henry Bootcamp</span>
            <p>Nomade is SPA about hotel booking, created with MERN stack</p>
            <p>Main tasks:</p>
            <li>Photo upload implementation with Cloudinary.</li>
            <li>Login with JWT and google Onetap.</li>
            <li>Mailing with nodemailer.</li>
            <li>Support my team solving bugs.</li>
        </div>
        <div className={style.Container}>
            <h6>Full-Stack Teaching Assistant</h6>
            <span>Jul22 - Sep22</span>
            <div className={style.Line}></div>
            <span className={style.Company}>SoyHenry</span>
            <p>Bootcamp Assistant (TA) for Full-Stack Development Students.</p>
            <p>Main tasks:</p>
            <li>Coordinate a group of students to achieve integration to the study group.</li>
            <li>Guide students in the first steps of the course.</li>
            <li>Assist to solve exercises and promote group collaboration (Pair Programming).</li>
            <li>Propose ideas to improve the Bootcamp processes.</li>
        </div>
        <div className={style.Container}>
            <h6>Project Developer</h6>
            <span>Ene19 - Sep22</span>
            <div className={style.Line}></div>
            <span className={style.Company}>SoyHenry</span>
            <p>Bootcamp Assistant (TA) for Full-Stack Development Students.</p>
            <p>Main tasks:</p>
            <li>Coordinate a group of students to achieve integration to the study group.</li>
            <li>Guide students in the first steps of the course.</li>
            <li>Assist to solve exercises and promote group collaboration (Pair Programming).</li>
            <li>Propose ideas to improve the Bootcamp processes.</li>
        </div>
    </div>
  )
}

export default Experience