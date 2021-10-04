import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import HeroPart from "./Component/HeroPart/HeroPart";
import Service from "./Component/Service/Service";
import Blog from "./Component/Blog/Blog";
import Error from "./Component/Error/Error";
import About from "./Component/AboutUs/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/hero">
            <HeroPart></HeroPart>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
