import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import {  Movie, MoviePage, SearchForm } from '../pages';

export const MovieRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="movie" element={<MoviePage />} />
                
                <Route path="search" element={<SearchForm />} />
                <Route path="movie/:id" element={<Movie />} />
                                

                <Route path="/" element={<Navigate to="/search" />} />

            </Routes>
        </div>


    </>
  )
}
