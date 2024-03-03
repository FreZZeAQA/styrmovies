import React from "react";
import css from './MovieDetailsPage.module.css'

import { useNavigate } from "react-router-dom";
import { MovieDetails } from "../components/MoviesContainer/MovieDetails";

const MovieDetailsPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className={css.container}>
            <MovieDetails />
            <button className={css.backButton} onClick={goBack}>
                Go Back
            </button>
        </div>
    );
};

export { MovieDetailsPage };
