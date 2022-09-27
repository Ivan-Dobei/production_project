import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import './styles/style.scss';

const App = () => {

   const {theme, toggleTheme} = useTheme();

   return (
      <div className={classNames('app', {}, [theme])}>
         <Link to='/'>MainPage</Link>
         <Link to='/about'>AboutPage</Link>

         <button onClick={toggleTheme}>Toggle</button>

         <Suspense fallback = {<div> Loading...</div>}>
            <Routes>
               <Route path='/' element={<MainPage />} />
               <Route path='/about' element={<AboutPage />} />
            </Routes>
         </Suspense>
      </div>
   )
}

export default App