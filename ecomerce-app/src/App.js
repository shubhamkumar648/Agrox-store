import "./App.css";
import { Navbar, Toast } from "./component";
import { RoutPath } from "./routes/routespath";


 function App() {

  return (
    <div className="App">

    <Navbar/>
    <Toast/>
    <RoutPath/>
    </div>
  );
}


export default  App