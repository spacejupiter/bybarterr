import './assets/style.css'
import Home from './windows/home'
import Waitlist from './windows/waitlist/waitlist'
import Footer from './windows/footer/footer'
import Header from './windows/header/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Support from './windows/support/support'
import Faq from './windows/faq/faq'
import Error from './windows/common/error'
import Product from './windows/product/product'

function App() {
  return (
    <Router>
      <div className="App  h-auto w-full fontavalo  ">
        <Header />
        <div className="body w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/support" element={<Support />} />

            <Route path="*" element={<Error />} />
            <Route path="/product" element={<Product />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
