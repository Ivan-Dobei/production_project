import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { classNames } from './helpers/classNames/classNames';
import { AboutPageAsync } from './pages/aboutPage/AboutPage.async';
import { MainPageAsync } from './pages/mainPage/MainPage.async';
import './styles/style.scss';
import { useTheme } from './theme/useTheme';

const App = () => {

   const {theme, toggleTheme} = useTheme();

   return (
      <div className={classNames('app', {}, [theme])}>
         <Link to='/'>MainPage</Link>
         <Link to='/about'>AboutPage</Link>

         <button onClick={toggleTheme}>Toggle</button>

         <Suspense fallback = {<div> Loading...</div>}>
            <Routes>
               <Route path='/' element={<MainPageAsync />} />
               <Route path='/about' element={<AboutPageAsync />} />
            </Routes>
         </Suspense>
      </div>
   )
}

export default App