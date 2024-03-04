import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilm, faUserCircle, faAdjust} from '@fortawesome/free-solid-svg-icons';
import css from './Header.module.css';
import { useTheme } from "../../hoc/ThemeContext";
import { SearchForm } from "../searchFrom/SearchForm";

const Header: FC = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className={css.Header}>
            <div className={css.TitleContainer}>
                <NavLink to="" className={css.NavLink}>
                    <h1 className={css.Title}>
                        STMovie
                        <FontAwesomeIcon icon={faFilm} className={css.FilmIcon} />
                    </h1>
                    <div className={css.Highlight}></div>
                </NavLink>
            </div>
            <div className={css.ActionsContainer}>
                <SearchForm />
                <div className={css.ThemeSwitcher} onClick={toggleTheme}>
                    <FontAwesomeIcon icon={faAdjust} className={css.ThemeIcon} />
                </div>
                <div className={css.UserContainer}>
                    <span className={css.UserName}>FreZZe</span>
                    <FontAwesomeIcon icon={faUserCircle} className={css.UserIcon} />
                </div>
            </div>
        </div>
    );
};

export { Header };
