import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Project';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import MyExperiences from './components/About/MyExperiences';
import Social from './components/About/Social';
import AdvancedProjects from './components/Projects/AdvancedProjects';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import CssBaseline from '@mui/material/CssBaseline'; // Import CssBaseline
import theme from './theme'; // Import your custom theme
import './App.css';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="wrapper">
          <Navbar />
          <div className="container mt-5 content background">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/skills" component={Skill} />
              <Route path="/contact" component={Contact} />
              <Route path="/my-experiences" component={MyExperiences} />
              <Route path="/social" component={Social} />
              <Route path="/advancedProjects" component={AdvancedProjects} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
