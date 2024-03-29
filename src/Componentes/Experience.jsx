import React from 'react'
import style from "../styles/Experience.module.css"
import Menu from "./Menu"

function Experience() {
  return (
  <div>
    <Menu/>
    <div className={style.Principal}>

        <div className={style.Container}>
            <h6>Full Stack Developer</h6>
            <span>Sep22 - Today</span>
            <div className={style.Line}></div>
            <span className={style.Company}>Restaurant.pe</span>
            <p>Retaurant Software 360° solution for managing your restaurant</p>
            <p>Projects:</p>
            <li>Develop an ecommerce platform for the restaurants that use the company's system. The web solution will allow
            restaurant customers to place delivery and pickup orders. This will enable restaurant customers to place their orders
            easily and directly, allowing restaurants to optimize their logistical processes when it comes to order-taking.
            </li>
            <li>Develop an Angular library that functions as a chat system connecting to our support area. This library can be
            used across various products that we offer</li>
            <li>Develop an Angular library that functions as a chat system connecting to our support area. This library can be
            used across various products that we offer</li>
        </div>
        
        <div className={style.Container}>
            <h6>Full Stack Developer</h6>
            <span>Aug22 - Sep22</span>
            <div className={style.Line}></div>
            <span className={style.Company}>Nomade</span>
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
            <p>Bootcamp Assistant (Teaching Assistant) for Full-Stack Development Students.</p>
            
            <p>Main tasks:</p>
            <li>Coordinate a group of students to achieve integration to the study group.</li>
            <li>Guide students in the first steps of the course.</li>
            <li>Assist to solve exercises and promote group collaboration (Pair Programming).</li>
            <li>Propose ideas to improve the Bootcamp processes.</li>
        </div>
        <div className={style.Container}>
            <h6>Full Stack Developer</h6>
            <span>Jun22 - Jul22</span>
            <div className={style.Line}></div>
            <span className={style.CompanyD}>Dogs</span>
            <p>Dogs is SPA lets user find o create breed of dogs,created with PERN stack</p>
            <p>Main tasks:</p>
            <li>Create DB and backend routes with express</li>
            <li>Create client interface with react-redux</li>
            <li>Rest API</li>
            <li>Create form new Breeds , filters and search bar</li>
        </div>
    </div>
  </div>

  )
}

export default Experience