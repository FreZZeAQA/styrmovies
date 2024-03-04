// Movies.tsx
import React, { useEffect, useState } from "react";
import {IGenre, IMovie, IMovieResponse} from "../../interfaces";
import {genreService, movieService} from "../../services";
import css from './Movies.module.css';
import { Movie } from "./Movie";
import { useSearchParams } from "react-router-dom";
import { Genre } from "../GenreContainer/Genre";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [prevNext, setPrevNext] = useState<IMovieResponse>({ page: 1, total_pages: 1, total_results: 0, results: [] });

    const renderPageButtons = () => {
        const buttons = [];
        for (let i = prevNext.page; i < prevNext.page + 4 && i <= prevNext.total_pages; i++) {
            buttons.push(
                <button key={i} onClick={() => goToPage(i)} disabled={i === prevNext.page}>
                    {i}
                </button>
            );
        }
        return buttons;
    };

    const goToPage = (page: number) => {
        const query = searchParams.get('query') || '';
        setSearchParams({ page: page.toString(), query });
    };

    const handleChangeGenre = (id: number) => {
        setSelectedGenreId(id);
        const params = new URLSearchParams();
        params.set('page', '1');
        params.set('query', '');
        params.set('genre', id.toString());
        setSearchParams(params.toString());
    };

    useEffect(() => {
        genreService.getAll().then((response) => {
            setGenres(response.data.genres);
        });
    }, []);

    useEffect(() => {
        const query = searchParams.get('query');
        const page = searchParams.get('page');
        const genreId = searchParams.get('genre');

        if (genreId) {
            setSelectedGenreId(parseInt(genreId));
        }

        if (selectedGenreId !== null) {
            movieService.getByGenreIds([selectedGenreId], page).then((response) => {
                setMovies(response.data.results);
                setPrevNext({
                    page: response.data.page, total_pages: response.data.total_pages,
                    total_results: response.data.total_results, results: response.data.results
                });
            });
        } else if (query) {
            movieService.searchByWord(query, page).then((response) => {
                setMovies(response.data.results);
                setPrevNext({
                    page: response.data.page, total_pages: response.data.total_pages,
                    total_results: response.data.total_results, results: response.data.results
                });
            });
        } else {
            movieService.getAll(page).then((response) => {
                setMovies(response.data.results);
                setPrevNext({
                    page: response.data.page, total_pages: response.data.total_pages,
                    total_results: response.data.total_results, results: response.data.results
                });
            });
        }
    }, [searchParams]);

    return (
        <div>
            <div className={css.GenresContainer}>
                {genres.map((genre: IGenre) => (
                    <Genre key={genre.id} genre={genre} onChangeGenre={handleChangeGenre} />
                ))}
            </div>
            <div className={css.MoviesContainer}>
                {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
            <div className={css.Pagination}>
                {prevNext.page > 1 && <button onClick={() => goToPage(prevNext.page - 1)}>Previous</button>}
                {renderPageButtons()}
                {prevNext.page < prevNext.total_pages &&
                    <button onClick={() => goToPage(prevNext.page + 1)}>Next</button>}
            </div>
        </div>
    );
};

export { Movies };
