import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

import MovieDetailsContextProvider from './context/MovieDetailsContext';
import MoviesContextProvider from './context/MoviesContext';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

const App = () => {
    return (
        <div>
            <Router>
                <Header />

                <div>
                    <Routes>
                        <Route
                            exact path='/'
                            element={
                                <MoviesContextProvider>
                                    <Home />
                                </MoviesContextProvider>
                            }
                        />
                        <Route
                            path='/movie/details/:id'
                            element={
                                <MovieDetailsContextProvider>
                                    <MovieDetails />
                                </MovieDetailsContextProvider>
                            } 
                        />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}
export default App