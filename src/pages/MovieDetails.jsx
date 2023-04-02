import { useContext, useState } from "react";
import parse from "html-react-parser";
import { MovieDetailsContext } from "../context/MovieDetailsContext"
import noImage from './image.jpg'


const MovieDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const { movieDetails } = useContext(MovieDetailsContext)
    const [yourName, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [numberOfTickets, setNumberOfTickets] = useState('')

    const movieName = `${movieDetails?.name}`
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { yourName, phone, email, numberOfTickets, movieName }
        const existingData = localStorage.getItem('user');

        let userDataArray = existingData ? JSON.parse(existingData) : [];

        userDataArray.push(data);
        let Users = JSON.stringify(userDataArray)

        localStorage.setItem('user', Users);

        setName('')
        setEmail('')
        setPhone('')
        setNumberOfTickets('')
        setShowModal(false)
        alert('SuccessFull booked Tickets')
    }

    return (
        <div className="font-poppins  ">
            <div className="max-w-full   2xl:mx-32 2xl:mt-24 mt-6 px-4 2xl:px-6">
                <div className="flex justify-center items-center flex-col 2xl:flex-row ">
                    <img src={movieDetails?.image?.medium || noImage} alt='' className={noImage ? "2xl:w-[800px] md:w-[200px] w-50px" : 'shadow-2xl border-b-4 border-[#FF6077] rounded-xl'} />
                    <div className="2xl:mx-24 mx-0">
                        <div className="flex flex-col 2xl:justify-start 2xl:items-start justify-center items-center">
                            <div className="mt-4">
                                <span className="text-3xl font-bold  2xl:text-5xl">{movieDetails?.name}</span>
                            </div>
                            <div className="mt-3">
                                <span className=" text-lg">Language: <span className="font-medium">
                                    {movieDetails?.language}
                                </span>
                                </span>
                            </div>
                            <div className="flex mt-4 2xl:mt-0">
                                <div className="mt-3">
                                    <span className="2xl:text-lg">Type: <span className="font-medium">
                                        {movieDetails?.type}
                                    </span>
                                    </span>
                                </div>
                                <div className="mt-3 ml-6">
                                    <span className="2xl:text-lg">Runtime: <span className="font-medium">
                                        {movieDetails?.runtime || '0'} min
                                    </span>
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 2xl:mt-3">
                                <span className="2xl:text-lg">Premiered on:
                                    <span className="font-medium ml-1">
                                        {movieDetails?.premiered || 'Not Premiered yet'}
                                    </span>
                                </span>
                            </div>
                            <div className="flex 2xl:mt-0 mt-4">

                                <div className="mt-4 ">
                                    <span className="2xl:text-lg">Status: <span className="font-medium text-gray-100 rounded-xl px-4 bg-[#FF6077] p-2">
                                        {movieDetails?.status}
                                    </span>
                                    </span>
                                </div>
                                <div className="mt-3 ml-4">
                                    <span className="2xl:text-lg">Rating: <span className="font-medium">
                                        {movieDetails?.rating.average || 'none'}
                                    </span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex 2xl:mt-5 mt-8">
                                <span>Description:</span>
                                <span className="ml-2">{parse(movieDetails?.summary || 'No Description')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:mt-6 2xl:ml-16 mt-8 2xl:mb-0 mb-8 md:ml-[330px] ml-20">
                    <button onClick={() => setShowModal(true)} class="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span class="relative">Book Tickets</span>
                    </button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative 2xl:mt-0 mt-36 2xl:mb-0 md:mt-36 mb-8 mx-auto 2xl:w-[600px] md:w-[600px] w-[300px]">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <h3 className="md:text-lg text-lg 2xl:text-3xl font-semibold">
                                                Booking Form
                                            </h3>

                                        </div>
                                        <div className="relative p-10  flex items-center justify-center flex-col">
                                            <div className="mt-2">
                                                <span>Movie:</span>
                                                <input type="text" className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center" name="movie" disabled
                                                    value={movieDetails?.name} />
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div>
                                                    <span>Name:</span>
                                                    <input type="text" name="name" className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center" placeholder="Name"
                                                        value={yourName}
                                                        onChange={(e) => setName(e.target.value)} required />
                                                </div>
                                                <div className="mt-2">
                                                    <span>Email:</span>
                                                    <input type="email" className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center" name="email" placeholder="Email Address"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)} required />
                                                </div>
                                                <div className="mt-2">
                                                    <span>Phone:</span>
                                                    <input type="text" className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center" name="phone" placeholder="Phone Number"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)} required />
                                                </div>

                                                <div className="mt-2">
                                                    <span>Number Of Tickets:</span>
                                                    <input type="number" name="Ticket" className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center" value={numberOfTickets} min="1" max="5" onChange={(e) => setNumberOfTickets(e.target.value)} />
                                                </div>
                                                <div className="flex items-center justify-start mt-8">
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit"
                                                    >
                                                        Book
                                                    </button>
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div>
        </div >
    )
}
export default MovieDetails