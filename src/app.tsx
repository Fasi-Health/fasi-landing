import ContactPage from '@/routes/contact'
import HomePage from '@/routes/home'
import CareerPage from '@/routes/career'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ScrollToTop } from './components/scroll-to-top'

export default function App() {
  /**
   * Vite exposes env variables on the special import.meta.env object.
   * Basename needs to be set for GitHub Pages to function properly.
   *
   * @link https://vitejs.dev/guide/env-and-mode.html
   */
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="career" element={<CareerPage />} />

          {/* <Route path="about" element={<AboutPage />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="support" element={<SupportPage />} /> */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
