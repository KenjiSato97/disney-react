import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/home/home.tsx'
import Header from './pages/components/Header.tsx'
import Footer from './pages/components/footer.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Home />
    <Footer/>
  </StrictMode>,
)
