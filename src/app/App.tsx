import {Routes, Route, Link} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {Suspense} from "react";
import './styles/style.scss';
import {AppRouter} from "app/providers/AppRounter";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";
import {useTranslation} from "react-i18next";

const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <NavBar/>
                <div className="content-page">
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
