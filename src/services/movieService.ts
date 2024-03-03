import {IMovie, IMovieResponse} from "../interfaces";
import { apiService } from "./apiService";
import { urls } from "../constants";
import {IRes} from "../types/resType";


const movieService = {
    getAll: (page: string = '1'): Promise<IRes<IMovieResponse>> => {
        return apiService.get(urls.movies.base, { params: { page } });
    },
    getById: (id: number): Promise<IRes<IMovie>> => {
        return apiService.get(urls.movies.byId(id));
    },
    searchByWord: (query: string, page: string = '1'): Promise<IRes<IMovieResponse>> => {
        return apiService.get(urls.movies.bySearch, { params: { query, page } });
    },
};

export { movieService };

