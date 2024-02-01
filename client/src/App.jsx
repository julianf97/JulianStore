import './App.css';
import MyApp from './components/MyApp/MyApp.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyApp/>} />
          <Route path="/productdetail/:itemId" element={<ProductDetail />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
