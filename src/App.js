import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./components/nav-bar";
import { Footer} from './components/footer'
import { Home } from './components/home'
function App() {
  return (
    <div className="App">
      <NavigationBar />      
      <Home />
      <Footer />
    </div>
  );
}

export default App;
