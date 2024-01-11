import { Route } from 'react-router-dom'


import styles from './App.module.css'
import Header from './components/header/Header'
import Home from './pages/landing_page/Home'
import Gallery from './pages/gallery/Gallery'
import Footer from './components/footer/Footer'
import Paginator from './components/pagination/Paginator'

function App() {
  return (
    <div className={styles['app-wrapper']}>
      <Header />
      {/* <Home /> */}

      <Gallery />
      <Paginator />

      <Footer />
    </div>

  )
}

export default App
