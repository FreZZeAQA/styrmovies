import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faUserCircle, faAdjust, faBars } from '@fortawesome/free-solid-svg-icons';
import css from './Header.module.css';
import { useTheme } from "../../hoc/ThemeContext";
import { SearchForm } from "../searchFrom/SearchForm";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

const Header: FC = () => {
    const { toggleTheme } = useTheme();
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const handleBurgerMenuClick = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    };

    const closeBurgerMenu = () => {
        setIsBurgerMenuOpen(false);
    };

    return (
        <div className={css.Header}>
            <div className={css.TitleContainer}>
                <NavLink to="/movies" className={css.NavLink}>
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
                <div className={css.BurgerMenu} onClick={handleBurgerMenuClick}>
                    <FontAwesomeIcon icon={faBars} className={css.BurgerIcon} />
                </div>
                <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closeBurgerMenu} />
            </div>
        </div>
    );
};

export { Header };