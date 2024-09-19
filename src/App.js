// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './NavigationBar';
// import Login from './Login';
// import Register from './Register';
// import ProductList from './ProductList';
// import CarouselComponent from './CarouselComponent'; // Import the carousel
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const App = () => {
  
//   return (
//     <Router>
//       <div>
//         <NavigationBar />
       
//         <CarouselComponent />
//         <ProductList/>

      
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/productList" element={<ProductList />} /> 
          
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react'; // Added useState import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Login from './Login';
import Register from './Register';
import ProductList from './ProductList';
import CarouselComponent from './CarouselComponent'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  const [cartCount, setCartCount] = useState(0); 

  const addToCart = () => {
    setCartCount(cartCount + 1); 
  };

  return (
    <Router>
      <div>
        <NavigationBar cartCount={cartCount} /> {/* Pass cart count to the NavigationBar */}
        <CarouselComponent /> {/* Carousel component */}
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="" element={<ProductList onAddToCart={addToCart} />} /> {/* ProductList component with addToCart */}
        </Routes>

        {/* Optionally, you can render ProductList outside of the Routes as well if needed */}
        <ProductList onAddToCart={addToCart} />   {/* Fixing the self-closing issue() */}
      </div>
    </Router>
  );
};

export default App;

