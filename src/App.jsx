import { NavLink, Route, Routes } from 'react-router-dom'
import cn from 'classnames';

import css from './App.module.css'
import HomePage from './pages/HomePage/HomePage'
import TweetsPage from './pages/TweetsPage/TweetsPage'


function App() {

  return (
    <div>
      <nav className={css.navMenu}>
        <NavLink to="/" className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>Home</NavLink >
        <NavLink to="/tweets" className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>Tweets</NavLink >
      </nav>

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
