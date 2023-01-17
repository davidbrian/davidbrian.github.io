import { useRef } from 'react';
import Theme from "./Theme";
import "./App.css";
import { Container, makeStyles } from "@material-ui/core";
import Landing from "./Components/Landing";
import Navbar from "./Components/Layout/Navbar";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { useSpring } from 'react-spring';

//Styling
const useStyles = makeStyles((theme) => ({
  containerStyle: {
    [theme.breakpoints.between('md', 'lg')]: {
      paddingLeft: "90px",
    }
  }
}));

const App = () => {
  const classes = useStyles();
  // Refs for different sections
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Spring animation state
  const [, setScroll, stopScroll] = useSpring(() => ({ y: 0 }));
  let isStopped = false;

  // Stop animation on mouse wheel
  const onWheel = () => {
    isStopped = true;
    window.removeEventListener('wheel', onWheel);
  };

  // Scroll to target element
  const scrollToTarget = (targetElement) => {
    stopScroll();
    const element = targetElement.current;
    const value = (window.scrollY + element.getBoundingClientRect().top) - (document.documentElement.clientHeight / 4);
    window.addEventListener('wheel', onWheel);
    setScroll({
      y: value,
      reset: true,
      from: { y: window.scrollY },
      onRest: () => {
        isStopped = false;
        window.removeEventListener('wheel', onWheel);
      },
      onFrame: props => {
        if (!isStopped) {
          window.scroll(0, props.y);
        }
      }
    });
  };

  return (
    <Theme>
      <Navbar
        scrollToLanding={() => { scrollToTarget(landingRef); }}
        scrollToAbout={() => { scrollToTarget(aboutRef); }}
        scrollToExperience={() => { scrollToTarget(experienceRef); }}
        scrollToProjects={() => { scrollToTarget(projectsRef); }}
        scrollToContact={() => { scrollToTarget(contactRef); }}
      />
      <Container className={classes.containerStyle}>
        <div ref={landingRef}>
          <Landing scrollToContact={() => { scrollToTarget(contactRef); }} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
      </Container>
    </Theme>
  );
};
export default App;