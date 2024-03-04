import {IMovie, IMovieResponse} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";


const movieService = {
    getAll: (page: string = '1'): Promise<IRes<IMovieResponse>> => {
        return apiService.get(urls.movies.base, {params: {page}});
    },
    getById: (id: number): Promise<IRes<IMovie>> => {
        return apiService.get(urls.movies.byId(id));
    },
    searchByWord: (query: string, page: string = '1'): Promise<IRes<IMovieResponse>> => {
        return apiService.get(urls.movies.bySearch, {params: {query, page}});
    },
    getByGenreIds: (ids: number[], page = "1"): Promise<IRes<IMovieResponse>> => {
        return apiService.get(urls.movies.byGenres(ids), {params: {page}})
    }
};

export {movieService};

