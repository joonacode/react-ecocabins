import { useState } from 'react'
import {
  About,
  Features,
  Footer,
  Hero,
  Intro,
  Navbar,
  Sidebar,
} from './components'

function App() {
  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className='App '>
      <Navbar toggleSidebar={toggleSidebar} sidebar={sidebar} />
      <Sidebar toggleSidebar={toggleSidebar} sidebar={sidebar} />
      <Hero />
      <Intro />
      <About />
      <Features />
      <Footer />
    </div>
  )
}

export default App
