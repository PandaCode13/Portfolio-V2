import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import FormCertif from './components/FormCertif'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <div className="main-conntent">
        <Home />
        <About />
        <Skills />
        <FormCertif />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App;
