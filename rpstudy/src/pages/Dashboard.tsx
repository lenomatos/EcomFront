// src/pages/Dashboard.tsx
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaBell,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Dashboard.css"; // We'll create this CSS file next

const Dashboard: React.FC = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/images/caroline-attwood-E1rH__X9SA0-unsplash.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      image: "/images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      image: "/images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: 99.99,
      image: "/images/rachit-tank-2cFZ_FB08UM-unsplash.jpg",
    },
  ];

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <button className="menu-button" onClick={toggleSidePanel}>
          <FaBars />
        </button>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
        <div className="header-icons">
          <span className="icon" color="black">
            <FaShoppingCart />
          </span>
          <span className="icon">
            <FaBell />
          </span>
          <span className="icon">
            <FaUser />
          </span>
        </div>
      </header>

      {/* Side Panel */}

      <div className={`side-panel ${isSidePanelOpen ? "open" : ""}`}>
        <div className="panel-header">
          <h3>Profile</h3>

          <button className="close-button" onClick={toggleSidePanel}>
            <FaTimes /> {/* Close icon */}
          </button>
        </div>
        <ul>
          <li>Settings</li>
          <li>Orders</li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <h2>Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
