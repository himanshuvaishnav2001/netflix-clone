
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import FooterPage from './Component/FooterPage/FooterPage';
import Main from './Component/Header/Main'
import Login from './Component/LoginPage/Login';
import HomePage from "./Component/HomePage/HomePage";

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<Main />} />
                    
          </Routes>
      
          <Routes>
              <Route path="/Login" element={<Login />} />
          </Routes>

          <Routes>
              <Route path="/HomePage" element={<HomePage />} />
          </Routes>




      </Router>

      <FooterPage />
      
    </div>
  );
}

export default App;
