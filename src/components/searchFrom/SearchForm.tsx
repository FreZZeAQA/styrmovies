import React, {FC} from "react";
import css from "../Header/Header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";


const SearchForm = () => {
    const {reset, register, handleSubmit} = useForm();
    const [searchParams, setSearchParams] = useSearchParams();

    const onSubmit = (data: any) => {
        setSearchParams({query: data.search, page: '1'});
        reset();
        window.location.href = `/movies?query=${data.search}&page=1`;
    };

    return (
        <form className={css.SearchForm} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" className={css.SearchInput} placeholder="Search movies..." {...register("search")} />
            <button type="submit" className={css.SearchButton}>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </form>
    );
};

export {SearchForm};
