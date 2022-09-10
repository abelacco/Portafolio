// import React from 'react'
// import Card from 'react-bootstrap/Button';

// export default function Proyects() {
//   return (
//     <div>
//       <div className={Card} style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         </div>
//       </div>
//     </div>
//   )
// }


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import style from "../styles/Projects.module.css"

function Proyects() {
  return (
    <div className={style.Container}>
  
      <div className={style.Card}>
        <img src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662810162/portadaNomade_pjd8h0.png" alt="cargando"/>
        <h6>Nomade</h6>
        <span>
        Nomade is a service that lets property owners rent out their spaces to travelers looking for a place to stay.
        </span>
      </div>
      <div className={style.Card}>
        <img src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662812388/dogsWeb_t98cio.png" alt="cargando"/>
        <h6>Dogs</h6>
        <span>
        Dogs is a SPA where you can find and create Breed's Dog
        </span>
      </div>
      <div className={style.Card}>
        <img src="https://res.cloudinary.com/dbq85fwfz/image/upload/v1662812630/portafolioWeb_iqgwsn.png" alt="cargando"/>
        <h6>Portafolio</h6>
        <span>
        Portafolio is a react-web where you cand find  my profesional information
        </span>
      </div>
    
    </div>
  );

}

export default Proyects;