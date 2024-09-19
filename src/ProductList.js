// import React from 'react';
// import './ProductList.css'; // Import the CSS file for styling

// const products = [
   
  
//   {
//     id: 1,
//     Brand: 'Bouncefit',
//     image: 'https://m.media-amazon.com/images/I/51rW3mp1PoL._SX425_.jpg',
//     price: '1999',
//     description: 'Bouncefit D20 Y68 Fitness Band Smart Watch for Men, Women, Boys, Girls, Kids – Single Touch Interface, Water Resistant, Workout Modes, Quick Charge Sports Smartwatch – Pink',
//   },
//   {
//     id: 2,
//     Brand: 'Noise Twist',
//     image: 'https://m.media-amazon.com/images/I/61BoaOUf+KL._AC_UY327_FMwebp_QL65_.jpg',
//     price: '2999',
//     description: 'Noise Twist Go Bluetooth Calling Smart Watch for Women with Sleek Metal Dial, Glossy Finish, 1.39" Display, 100+ Watch Faces, IP68, Sleep Tracking, Voice Assistance, Upto 7 Days Battery (Gold Link)',
//   },
//   {
//     id: 3,
//     Brand: 'Fire-Boltt',
//     image: 'https://m.media-amazon.com/images/I/71XqAPvpqEL._AC_UY327_FMwebp_QL65_.jpg',
//     price: '3299',
//     description: 'Fire-Boltt Phoenix Pro 35.3mm (1.39 inch) Bluetooth Calling Smartwatch, AI Voice Assistant, Metal Body with 120+ Sports Modes, SpO2, Heart Rate Monitoring (Gold Pink)',
//   },
//   {
//     id: 4,
//     Brand: 'Noise',
//     image: 'https://m.media-amazon.com/images/I/41WvpK7pGgL._SX300_SY300_QL70_FMwebp_.jpg',
//     price: '3999',
//     description: 'Leather Strap Options, 100+ Watch Faces, Female Cycle Tracker Smart Watch for Women (Rose Pink)',
//   },

//   {
//     id: 5,
//     Brand: 'boAt',
//     image: 'https://m.media-amazon.com/images/I/41Qg6YkjaEL._AC_UL480_FMwebp_QL65_.jpg',
//     price: '999',
//     description: 'boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)',
//   },
//   {
//     id: 6,
//     brand: 'boAt Airdopes',
//     image: 'https://m.media-amazon.com/images/I/61kReoWGtHL._AC_UL480_FMwebp_QL65_.jpg',
//     price: '999',
//     description: 'boAt Airdopes 91 Truly Wireless in Ear Ear Buds w/ 45 hrs Playtime, Beast Mode with 50 ms Low Latency, Dual Mics with ENx, ASAP Charge, IWP Tech, IPX4 & Bluetooth v5.3(Active Black)',
  
//   },
//   {
//     id: 7,
//     name: 'boAt Airdopes',
//     image: 'https://m.media-amazon.com/images/I/71RFdy6y6LL._AC_UL480_FMwebp_QL65_.jpg',
//     price: '1999',
//     description: 'boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)',
    
//   },
//   {
//     id: 8,
//     name: 'boAt Nirvana Ion',
//     image: 'https://m.media-amazon.com/images/I/81-TGXuOMAL._AC_UL480_FMwebp_QL65_.jpg',
//     price: '2999',
//     description: 'boAt Nirvana Ion Truly Wireless in Ear Ear Buds w/ 120 HRS Playback(24hrs/Charge), Crystal Bionic Sound w/Dual EQ Modes, Quad Mics ENx™ Technology, in Ear Detection(Charcoal Black)',
    
//   },
//   {
//     id:9,
//     name: '',
//     image: '',
//     price: '',
//     description: '',
//   },
//   {
//     id: 10,
//     name: '',
//     image: '',
//     price: '',
//     description: '',
    
//   },
//   {
//     id: 11,
//     name: '',
//     image: '',
//     price: '',
//     description: '',
    
//   },
//   {
//     id: 12,
//     name: '',
//     image: '',
//     price: '',
//     description: '',
    
//   },
// ];

// const handleAddToCart = (productName) => {
//   alert(`${productName} has been added to the cart!`);
// };

// const ProductList = () => {
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <div key={product.id} className="product-card">
//           <img src={product.image} alt={product.name} className="product-image" />
//           <h3>{product.name}</h3>
//           <p>{product.price}</p>
//           <p>{product.description}</p>
//           <button className="add-to-cart-button" onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
import React from 'react';
import './ProductList.css'; // Import the CSS file for styling

const products = [
  // Men category
  { id: 1, category: 'Men', brand: 'Hems trends', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/2/b/k/m-st1-rahul-look-original-imah3yryteqjgxjd.jpeg?q=70', price: '999',description:'Men Regular Fit Solid Mandarin Collar Casual Shirt' },
  { id: 2, category: 'Men', brand: 'METRONAUT', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/e/n/l-frml-st2-vebnor-original-imahftabd2vptyyp.jpeg?q=70', price: '2999', description: 'Men Regular Fit Solid Spread Collar Casual Shirt' },
  { id: 3, category: 'Men', brand: 'SHIRTZONE', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/l/2/l-st1-vebnor-original-imah4degztfxacxr.jpeg?q=70', price: '1999', description: 'Men Regular Fit Solid Spread Collar Casual Shirt' },
  { id: 4, category: 'Men', brand: 'VEBNOR', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/u/h/m-st2-vebnor-original-imagpw7w3ha4tv2h.jpeg?q=70', price: '2999', description: 'Men Regular Fit Solid Spread Collar Casual Shirt' },
  
  // Space between categories
  { id: 5, category: 'Space' },

  // Women category
  { id: 6, category: 'Women', brand: 'DHANSHREE TEX', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/g/9/s-pink-zari-printed-sk-prisca-original-imah2twyccjsed7m.jpeg?q=70', price: '999', description: 'Women Woven Design Cotton Blend Flared Kurta ' },
  { id: 7, category: 'Women', brand: 'MF HAYAT', image: 'https://rukminim2.flixcart.com/image/612/612/kr0ynbk0/kurta/k/t/i/xl-anpink-s-chalwal-threads-original-imag4wy7shrenrae.jpeg?q=70', price: '999', description: ' Women Woven Design Cotton Blend Flared Kurta ' },
  { id: 8, category: 'Women', brand: 'MOKSHI', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/c/e/4xl-ku632lgn-48-mahadev-hand-print-original-imahywxrwjpwst8s.jpeg?q=70', price: '899', description: 'Women Woven Design Cotton Blend Flared Kurta' },
  { id: 9, category: 'Women', brand: 'VISHUDH', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/q/b/c/xl-vnku006692-black-gold-vishudh-original-imah3cggyzaf7yvj.jpeg?q=70', price: '799', description: 'Women Woven Design Cotton Blend Flared Kurta' },

  { id: 10, category: 'Space' },

  // KIDS
  { id: 11, category: 'Kids', brand: 'DEKLOOK', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/m/o/a/11-12-years-gown10-5-6-years-aarya-designer-original-imaghcbdqrkdvhhj.jpeg?q=70', price: '999', description: 'Girls Maxi/Full Length Casual Dress' },
  { id: 12, category: 'Kids', brand: 'SIM FAB', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/u/7/p/3-4-years-jahir-micky-sim-fab-original-imahf78ufzyzzcfb.jpeg?q=70', price: '999', description: 'Girls Maxi/Full Length Casual Dress' },
  { id: 13, category: 'Kids', brand: 'OTABU', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/s/q/z/13-14-years-gown39-aarya-designer-original-imagmgxfhtgaxb9w.jpeg?q=70', price: '899', description: 'Girls Maxi/Full Length Casual Dress' },
  { id: 14, category: 'Kids', brand: 'TIK TOK', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/p/0/m/8-9-years-bm009-tiktok-fashion-original-imah3avbgmwgzgjg.jpeg?q=70', price: '799', description: 'Girls Above Knee Casual Dress' },
  
  // Additional space or more categories can be added similarly
  { id: 15, category: 'Space' },
  { id: 16, category: 'Accessories', brand: 'FAST TRACK', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/c/m/b/-original-imagz3zgbgtkkgmy.jpeg?q=70', price: '4999', description: 'All Nighters Analog Watch - For Men NN3165NL01' },
  { id: 17, category: 'Accessories', brand: 'FAST TRACK', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sunglass/b/h/g/free-size-ln1992rozti053-rozti-original-imah3hephqkgmycy.jpeg?q=70', price: '2999', description: 'UV Protection Aviator Sunglasses' },
  { id: 18, category: 'Accessories', brand: 'LENO PERROS', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/g/a/q/-original-imah4kg4zg7jgk8f.jpeg?q=70', price: '1899', description: 'Women Pink Shoulder Bag - Extra Spacious' },
  { id: 19, category: 'Accessories', brand: 'WOODEN WALL', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/rack-shelf/3/n/b/living-room-bedroom-1-vxgbxc-timberz-6-original-imah2mf7tgyhevx5.jpeg?q=70', price: '799', description: 'classicionline New pilu set wooden wall shelf' },
  
];

// const handleAddToCart = (productName) => {
//   alert(`${productName} has been added to the cart!`);
// };

// const ProductList = () => {
//   return (
//     <div className="product-list">
//       {products.map((product, index) => (
//         <React.Fragment key={product.id}>
//           {product.category === 'Space' && <div className="category-space"></div>}
//           {product.category !== 'Space' && (
//             <>
//               {index === 0 || products[index - 1].category !== product.category ? (
//                 <h2 className="category-header">{product.category} Products</h2>
//               ) : null}
//               <div className="product-card">
//                 <img src={product.image} alt={product.brand} className="product-image" />
//                 <h3>{product.brand}</h3>
//                 <p>Price: ₹{product.price}</p>
//                 <p>{product.description}</p>
//                 <button className="add-to-cart-button" onClick={() => handleAddToCart(product.brand)}>Add to Cart</button>
//               </div>
//             </>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          {product.category === 'Space' && <div className="category-space"></div>}
          {product.category !== 'Space' && (
            <>
              {index === 0 || products[index - 1].category !== product.category ? (
                <h2 className="category-header">{product.category} Products</h2>
              ) : null}
              <div className="product-card">
                <img src={product.image} alt={product.brand} className="product-image" />
                <h3>{product.brand}</h3>
                <p>Price: ₹{product.price}</p>
                <p>{product.description}</p>
                <button className="add-to-cart-button" onClick={onAddToCart}>Add to Cart</button> {/* Use the onAddToCart function */}
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductList;

