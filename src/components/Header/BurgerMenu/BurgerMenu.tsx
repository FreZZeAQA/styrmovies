import React, { FC, useEffect, useState } from "react";
import { IGenre } from "../../../interfaces/genreInterface";
import { genreService } from "../../../services/genreService";
import css from './BurgerMenu.module.css'


interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const BurgerMenu: FC<IProps> = ({ isOpen, onClose }) => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genreService.getAll().then(response => {
            setGenres(response.data.genres);
        });
    }, []);

    return (
        <div className={`${css.BurgerMenuList} ${isOpen ? css.active : ''}`}>
            <div className={css.CloseButton} onClick={onClose}>
                &times;
            </div>
            <ul>
                {genres.map(genre => (
                    <li key={genre.id} className={css.BurgerMenuItem}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { BurgerMenu };