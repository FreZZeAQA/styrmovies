import React from 'react';
import css from "../components/MoviesContainer/Movie.module.css";

const StartSvg = () => {
    return (
        <svg
            className={css.PlayIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="80px"
            height="80px"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 5v14l11-7z" />
        </svg>
    );
};

export  {StartSvg};