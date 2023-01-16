import React from 'react';
import Theme from "./Theme.jsx";
import "./App.css";
import { Container, createStyles, makeStyles } from "@material-ui/core";
import Landing from "./Components/Landing.jsx";
import Navbar from "./Components/Layout/Navabar.jsx";
import About from "./Components/About.jsx";
import Experience from "./Components/Experience.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import { useSpring } from 'react-spring';
import FadeInOnView from './Components/Animation/FadeInView.jsx';

const useStyles = makeStyles((theme) => createStyles({
  containerStyle: {
    [theme.breakpoints.between('md', 'lg')]: {
      paddingLeft: "90px",
    }
  }
}));

const App = () => {
  const classes = useStyles();
  const landingRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const [, setScroll, stopScroll] = useSpring(() => ({ y: 0 }));

  let isStopped = false;

  const onWheel = () => {
    isStopped = true;
    window.removeEventListener('wheel', onWheel);
  };

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
