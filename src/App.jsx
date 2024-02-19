import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProductsPage from "./Pages/Products/ProductsPage"
import AboutUsPage from './Pages/About/AboutUsPage'
import ContactPage from './Pages/Contact/ContactPage'
function App() {
  return (
    <>

     <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/products' element={<ProductsPage />} ></Route>
      <Route path='/about' element={<AboutUsPage />} ></Route>
      <Route path='/contact' element={<ContactPage />} ></Route>
     </Routes>
    </>
  )
}

export default App
