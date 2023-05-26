import { Route, Routes } from 'react-router-dom';

import { MovieRoutes } from '../movies';




export const AppRouter = () => {
  return (
    <>
        <Routes>                                    
            <Route path="/*" element={ <MovieRoutes />} />                        
        </Routes>
    
    </>
  )
}
