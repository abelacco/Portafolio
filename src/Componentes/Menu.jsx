import React from 'react'
import style from "../styles/Menu.module.css"
import { Link } from 'react-router-dom'



export default function Menu() {
  return (
    <div className={style.Principal}>
        <div className={style.Menu}>
          <img  className={style.pic} src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662558752/samples/Abel%20PIC/2019_08_23_HubUDEP_-_3ra_Generaci%C3%B3n_095_eapg21.jpg" alt="cargando"/>
          <ol className={style.option}>
              <Link className={style.Link} to="/"><h3>Home</h3></Link>
              <Link className={style.Link} to="/AboutMe"><h3>About Me</h3></Link>
              <Link className={style.Link} to="/Skills"><h3>Skills</h3></Link>
              <Link className={style.Link} to="/Education"><h3>Education</h3></Link>
              <Link className={style.Link} to="/Experience"><h3>IT Experience</h3></Link>
              <Link className={style.Link} to="/Projects"><h3>Projects</h3></Link>
              <Link className={style.Link} to="/ContactMe"><h3>Contact</h3></Link>
          </ol>
          <span>Created by abelacco</span>
        </div>
    </div>
  )
}
