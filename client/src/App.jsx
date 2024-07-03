import { Routes, Route } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

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
import ContactWith from './components/modal_cotact_with/ContactWith'


function App() {
  return (
    <div className={styles['app-wrapper']}>
      {/* <AuthContext.Provider> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<><Gallery /><Paginator /></>} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/master_space' element={<MasterSpace />} />
          <Route path='/portfolio/contact_with' element={<ContactWith />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/master_space' element={<MasterSpace />} />     
          {/* <Test /> */}
        </Routes>
        <Footer />
      {/* </AuthContext.Provider> */}
    </div>

  )
}

export default App
