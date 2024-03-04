import React, {FC} from 'react';

import css from './Genre.module.css';
import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre;
    onChangeGenre: (id: number) => void;
}

const Genre: FC<IProps> = ({genre, onChangeGenre}) => {
    const {id, name} = genre;

    const handleClick = () => {
        onChangeGenre(id);
    };

    return (
        <div className={css.Genre} onClick={handleClick}>
            <span>{name}</span>
        </div>
    );
};

export {Genre};
