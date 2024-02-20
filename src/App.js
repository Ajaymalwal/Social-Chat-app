import Home from "./pages/home";
import LoginS from "./pages/login";
import AboutUs from "./pages/aboutus";
import Footer from "./components/footer";
import Header from "./components/header";
import ChatPage from "./pages/chat";
import React from "react";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';



function App(){
  return(

<Router>
  <div>
    <Header />

      <Routes>
        <Route  path="/" element ={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<LoginS />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
      </Routes>

      <Footer />
  </div>
    </Router>
  );
}

export default App;