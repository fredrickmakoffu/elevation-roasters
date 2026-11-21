import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContactForm } from './components/ContactForm'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative overflow-x-hidden bg-surface text-on-surface antialiased">
        <SiteHeader />
        <main className="w-full bg-surface pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
          <ContactForm />
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}
