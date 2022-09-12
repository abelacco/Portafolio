import style from "../styles/Projects.module.css"

function Proyects() {
  return (
    <div className={style.Container}>
  
      <div className={style.Card}>
        <a href="https://nomade-khaki.vercel.app/" target="_blank"><img src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662810162/portadaNomade_pjd8h0.png" alt="cargando"/></a>
        <h6>Nomade</h6>
        <span>
        Nomade is a service that lets property owners rent out their spaces to travelers looking for a place to stay.
        </span>
      </div>
      <div className={style.Card}>
      <a href="https://pi-dogs-final-nu.vercel.app/" target="_blank"><img src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662812388/dogsWeb_t98cio.png" alt="cargando"/></a>
        <h6>Dogs</h6>
        <span>
        Dogs is a SPA where you can find and create Breed's Dog
        </span>
      </div>
      <div className={style.Card}>
      <a href="https://abelacuna.vercel.app/" target="_blank"><img src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662812630/portafolioWeb_iqgwsn.png" alt="cargando"/></a>
        <h6>Portafolio</h6>
        <span>
        Portafolio is a react-web where you cand find  my profesional information
        </span>
      </div>
    
    </div>
  );

}

export default Proyects;