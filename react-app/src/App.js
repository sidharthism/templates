import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LatestNews from "./pages/LatestNews";
import FourOFour from "./pages/FourOFour";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/news' component={LatestNews} />
          <Route component={FourOFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
