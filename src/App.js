//router
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Layout/NavBar";

//components
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

//css


//material ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    
    <MuiThemeProvider>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Redirect to  ="/"/>
        </Route>
      </Switch>
    </Router>
    </MuiThemeProvider>
    
  );
}

export default App;
