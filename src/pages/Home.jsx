import { useContext } from "react";
import Movie from "../Components/Movie";
import { MoviesContext } from "../context/MoviesContext";


const Home = () => {
    const {
        popularMovies,
    } = useContext(MoviesContext);
    return (
        <div className="w-full mb-24">
            <div className="2xl:max-w-[1350px] lg:max-w-6xl sm:maxw-xl mx-auto ">
                <div class=" min-h-screen mt-14 flex items-center justify-center p-4 mr-2 md:mr-0 xl:mr-0 2xl:mr-0 lg:mr-0 2xl:px-16 md:p-6 ">
                    <Movie movies={popularMovies} />
                </div>
            </div>
        </div>
    )
}
export default Home