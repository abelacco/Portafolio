import React from 'react'
import style from "../styles/Menu.module.css"
import { Link } from 'react-router-dom'



export default function Menu() {
  return (
    <div className={style.Principal}>
        <div className={style.Menu}>
        <Link  to="/"> <div className={style.button}>
                <div className={style.box}>A</div>
                <div className={style.box}>B</div>
                <div className={style.box}>E</div>
                <div className={style.box}>L</div>
              </div></Link>
          <ol className={style.option}>
              <Link className={style.Link} to="/AboutMe"><h3>About Me</h3></Link>
              <Link className={style.Link} to="/Skills"><h3>Skills & Education</h3></Link>
              <Link className={style.Link} to="/Experience"><h3>IT Experience</h3></Link>
              <Link className={style.Link} to="/Projects"><h3>Projects</h3></Link>
              <Link className={style.Link} to="/ContactMe"><h3>Contact</h3></Link>
          </ol>
        </div>
    </div>
  )
}
