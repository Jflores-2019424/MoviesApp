import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const MovieItem = () => {
    const [movie, setMovie] = useState([])

    console.log(movie)

    const listMovieApi = 'https://www.omdbapi.com/?i=tt3896198&apikey=35a34c41'

    useEffect(() =>{
        const fetchAllMovies = async() => {
        const res = await axios.get(listMovieApi)
        setMovie(res.data.results);
    };
        fetchAllMovies
    }, [])

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                    <div className="col-4"> 
                        <img  />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title"></h5>
                            <p className="card-text"></p>

                            
                            

                            <p className="card-text">
                                <small className="text-muted"></small>
                            </p>

                            <Link to={`/search/`}>
                                Más..
                            </Link>

                            
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
