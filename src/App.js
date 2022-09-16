import {Home,ProductOverviewPage,SearchPageProduct} from "./pages/index";
import './style/style.css'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className='app' >
      <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/property/:productId" element={<ProductOverviewPage/>}> </Route>
      <Route path="/properties" element={<SearchPageProduct/>}> </Route>
    </Routes>
      
    </div>
  );
}

export default App;
