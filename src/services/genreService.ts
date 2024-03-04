import {IGenreResponse} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";

const genreService = {
    getAll: (): Promise<IRes<IGenreResponse>> => {
        return apiService.get(urls.genres.base)
    }
}


export {genreService}