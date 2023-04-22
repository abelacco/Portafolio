import React, { useEffect } from 'react'
import style from "../styles/Home.module.css"
import linkedin from "../Icons/linkedin.png"
import gitHub from "../Icons/gitHub.png"
import Menu from "../Componentes/Menu"


export default function Home() {
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://integraciones.restaurant.pe/datos/listaInfoLocal');
        const data = await response.json();
        console.log('Data:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Menu/>
      <div className={style.Home}>
        <h1>Hello, I am
        <span className={style.Name}> Abel Acuna</span>
        <br/>
        </h1> 
        <img  className={style.pic} src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662558752/samples/Abel%20PIC/2019_08_23_HubUDEP_-_3ra_Generaci%C3%B3n_095_eapg21.jpg" alt="cargando"/>
        <span className={style.Title}>Full Stack Developer</span>
        <p className={style.text}>I build scalable end-to-end web solutions. I am passionate about learning new technologies and solving problems to help teams.</p>
        <div className={style.divImg}>
        <a className={style.A} href="https://www.linkedin.com/in/abelacunacoronado/" target="__blank"><img className={style.img} src={linkedin} alt="linkedind"/></a>
        <a className={style.A} href="https://github.com/abelacco" target="__blank"><img className={style.img} src={gitHub} alt="linkedind"/></a>
        </div>
      </div>
    </div>
    
  )
}
