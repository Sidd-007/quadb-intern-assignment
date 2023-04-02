const base_url = "https://api.tvmaze.com/"

const search_all = `search/shows?q=all`

const show = `shows/`


export const searchAllGet = () => `${base_url}${search_all}`;
export const movieDetailsGet = movie_id => `${base_url}${show}${movie_id}`;