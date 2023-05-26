import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { MovieItem } from '../components';

export const SearchForm = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && movies.length === 0;


  const { searchText, onInputChange } = useForm({
    searchText: q
  });



  const onSearchSubmit = (event) =>{
    event.preventDefault();

    navigate(`?q=${ searchText }`);
  }


  return (
    <>
      <h1>Buscar</h1> 
      <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Busca una pelicula"
                className="form-control float-end"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />      
            </form>
      <div className="col-3">
          </div>
      

      <div className="row">

          <div className="">
            <h4>Resultados</h4>
            <hr />

            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Busca una pelicula
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No se encontro la pelicula <b>{ q }</b>
            </div>


            {
              <MovieItem/>
            }

          </div>
      </div>
      

    </>
  )
}
