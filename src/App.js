import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
          <Routes>
              <Route  path="/shop" element={<Shop/>} />
              <Route  path="/review" element={<Review/>} />
              <Route  path="/manage" element={<Inventory/>} />
              <Route  exact path="/" element={<Shop/>} />
              <Route  path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
