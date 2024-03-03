import { IMovie } from "./movieInterface";
import {IGenre} from "./genreInterface";

export interface IMovieResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IGenreResponse {
    genres: IGenre[];
}

