import { Route } from 'react-router-dom'
import styles from './App.module.css'


import Header from './components/header/Header'
import Home from './pages/landing_page/Home'
import Gallery from './pages/gallery/Gallery'
import Paginator from './components/pagination/Paginator'
import Portfolio from './pages/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import MasterSpace from './pages/master_space/MasterSpace'
import Test from './components/test_component/Test'
import PortfolioUploader from './components/portfolio_squares/PortfolioUploader'

function App() {
  return (
    <div className={styles['app-wrapper']}>
      <Header />
      {/* <Home /> */}

      {/* <Gallery /> */}
      {/* <Paginator /> */}

      <Portfolio />

      {/* <Register /> */}

      {/* <Login /> */}





      {/* <MasterSpace /> */}
      {/* <Test /> */}




      <Footer />
    </div>

  )
}

export default App
