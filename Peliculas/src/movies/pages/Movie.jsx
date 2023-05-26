
import { Navigate, useNavigate, useParams } from 'react-router-dom';



export const Movie = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const onNavigateBack = () => {
    navigate(-1);
  }


  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ k } 
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>h3</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>info</b> </li>
          <li className="list-group-item"> <b>info</b>  </li>
          <li className="list-group-item"> <b>info</b>  </li>
        </ul>

        <h5 className="mt-3"> h5 </h5>
        <p></p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
