import React, { FC, PropsWithChildren } from "react";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useTheme } from "../hoc/ThemeContext";
import styles from "./MainLayout.module.css";

const MainLayout: FC<PropsWithChildren<{}>> = () => {
    const { theme } = useTheme();

    return (
        <div className={`${styles['main-layout']} ${styles[theme]}`}>
            <Header />
            <Outlet />
        </div>
    );
};

export { MainLayout };
