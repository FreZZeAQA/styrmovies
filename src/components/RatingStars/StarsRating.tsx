import React, {FC, PropsWithChildren} from "react";
import RatingStars from "react-rating-stars-component";
import styles from "../MoviesContainer/MovieDetails.module.css";
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const StarsRating: FC<IProps> = ({movie}) => {
    return (
        <div>
            <RatingStars
                count={10}
                value={movie.vote_average}
                edit={false}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                className={styles.rating}
            />
        </div>
    );
};

export {StarsRating};