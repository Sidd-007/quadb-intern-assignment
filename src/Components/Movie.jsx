import { Link } from "react-router-dom";
import noImage  from './image.jpg'

const Movie = ({ movies }) => {

    return (
        <div class="">
            <div className="grid grid-cols-2 gap-40 xl:grid-cols-5 md:grid-cols-4  2xl:gap-16 xl:gap-10 lg:gap-10 md:gap-10 2xl:pr-0 xl:pr-0 lg:pr-0 md:pr-0 pr-28">
                {movies.map((movie, index) => {
                    const { show } = movie
                    const { image } = show;
                    return (
                        <div
                            key={index}
                            class="bg-[#ffffff] rounded-lg shadow-xl border-b-4 w-[130px] lg:w-1/2 xl:w-1/2 md:w-full  2xl:w-full border-[#FF6077]"
                        >
                            <Link to={`/movie/details/${show.id}`}>
                                <div class="2xl:aspect-w-16 2xl:aspect-h-9 ">
                                    <img
                                        class="object-cover shadow-md rounded-lg"
                                        src={image?.original || noImage}
                                        alt=""
                                    />
                                </div>
                                <div class="2xl:px-4 p-4 2xl:py-2">
                                    <span class="font-semibold text-gray-800 2xl:text-xl text-sm">
                                        {show.name}
                                    </span>
                                    <div className="flex flex-1  justify-between">
                                        <span class="2xl:text-sm text-[10px] text-gray-700 mt-5">
                                            {show.premiered || 'Not Premiered Yet'}
                                        </span>
                                    </div>
                                </div>

                            </Link>
                        </div>

                    );
                })}

            </div>
        </div>
    )
}
export default Movie