import React, { FC, PropsWithChildren } from "react";
import { IMovie } from "../../interfaces";
import { urls } from "../../constants";
import css from "./Movie.module.css";
import { Link } from "react-router-dom";
import { StarsRating } from "../RatingStars/StarsRating";
import { StartSvg } from "../../Icons/StartSvg";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}

const Movie: FC<IProps> = ({ movie }) => {
    const { original_title, poster_path, id, popularity } = movie;
    const displayTitle = original_title.length > 13 ? original_title.substring(0, 13) + "..." : original_title;

    return (
        <Link to={`/movies/${id}`} className={css.MovieContainer}>
            <img src={`${urls.img.base}${poster_path}`} alt={original_title} />
            <div className={css.Title}>{displayTitle}</div>
            <StartSvg />
            <div className={css.RatingStarsContainer}>
                <StarsRating movie={movie} />
            </div>
            <div className={css.PopularityBadge}>
                <span>{popularity}</span>
            </div>
        </Link>
    );
};

export { Movie };
