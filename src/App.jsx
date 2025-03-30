import { Navbar, Hero,  Projects, Skills, About, Path, ContactMe} from './components'

function App() {

  return (
    <div className='bg-black min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      {/* <About /> */}
      <Path />
      <ContactMe />
    </div>
  )
}

export default App
