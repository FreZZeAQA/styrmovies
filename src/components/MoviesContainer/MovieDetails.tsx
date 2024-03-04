import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { IMovie } from "../../interfaces";
import { movieService } from "../../services";
import { urls } from "../../constants";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import {Loader} from "../loader";
import {StarsRating} from "../RatingStars";


interface IProps extends PropsWithChildren {}

const MovieDetails: FC<IProps> = () => {
    const [movie, setMovie] = useState<IMovie>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        movieService.getById(+id).then(response => {
            setMovie(response.data);
        });
    }, [id]);

    if (!movie) {
        return <Loader />;
    }

    const backgroundStyle = {
        backgroundImage: `url(${urls.img.base}${movie.poster_path})`,
    };

    return (
        <div className={styles.container} style={backgroundStyle}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <img className={styles.poster} src={`${urls.img.base}${movie.poster_path}`} alt={movie.original_title}/>
                <div className={styles.details}>
                    <h2 className={styles.title}>{movie.original_title}</h2>
                    <div className={styles.ratingContainer}>
                        <StarsRating movie={movie}/>
                        <span className={styles.ratingValue}>{movie.vote_average}</span>
                    </div>
                    <p className={styles.overview}>{movie.overview}</p>
                    <h3 className={styles.releaseDate}>Release Date: {movie.release_date}</h3>
                </div>
            </div>
        </div>
    );
};

export { MovieDetails };
