import {Home,ProductOverviewPage} from "./constrains/index";
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
      <Route path="/:productId" element={<ProductOverviewPage/>}> </Route>

    </Routes>
      
    </div>
  );
}

export default App;
