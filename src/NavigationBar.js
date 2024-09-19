// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navigation.css'; // import the CSS file

// const NavigationBar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li><Link to="/login" className="link">Login</Link></li>
//         <li><Link to="/register" className="link">Register</Link></li>
//         <span className="cart-icon">
//             <i className="fas fa-shopping-cart"></i>
//           </span>
          
//       </ul>
//     </nav>
//   );
// };

// export default NavigationBar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const NavigationBar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/login" className="link">Login</Link></li>
        <li><Link to="/register" className="link">Register</Link></li>
        <span className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* Display cart count */}
        </span>
      </ul>
    </nav>
  );
};

export default NavigationBar;
