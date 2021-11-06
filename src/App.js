import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Fashion from "./pages/Fashion";
import Grocery from "./pages/Grocery";
import Electronics from "./pages/Electronics";
import Mobiles from "./pages/Mobiles";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/fashion" exact component={Fashion} />
          <Route path="/grocery" exact component={Grocery} />
          <Route path="/mobiles" exact component={Mobiles} />
          <Route path="/electronics" exact component={Electronics} />

          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
