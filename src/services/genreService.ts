import {IRes} from "../types/resType";
import {IGenreResponse} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll: (): Promise<IRes<IGenreResponse>> => {
        return apiService.get(urls.genres.base)
    }
}


export {genreService}