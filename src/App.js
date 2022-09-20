import {Home,ProductOverviewPage,SearchPageProduct,About} from "./pages/index";
import './style/style.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation";


function App() {
  return (
    <div className='app' >
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/property/:productId" element={<ProductOverviewPage/>}> </Route>
      <Route path="/properties" element={<SearchPageProduct/>}> </Route>
      <Route path="/contact" element={<About/>}> </Route>

    </Routes>
      
    </div>
  );
}

export default App;
