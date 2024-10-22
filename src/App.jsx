import Contact from "./Components/Contact/Contact"
import Experince from "./Components/Experience/Experince"
import Heading from "./Components/Heading"
import Hero from "./Components/Hero"
import Projects from "./Components/Project/Projects"
import Technologies from "./Components/Technologies"
import CustomerReviews from "./Components/Temp"

function App() {

  return (
    <>
      <div id="Home">
        <Hero />
        <Technologies />
        <Projects />
        <Experince />
        <Contact />
      </div>
    </>
  )
}
export default App
