
import { useState } from "react";
import "./RecommendedProducts.css";

const recommendedItems = [
  {
    id: 1,
    name: "GG PRINTED SILK SHIRT",
    price: 2100,
    image: "https://tse4.mm.bing.net/th?id=OIP.0Bqv_8KO1DeX4WfM8S5W-AHaJQ&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "GG CANVAS SHIRT",
    price: 1350,
    image: "https://tse3.mm.bing.net/th?id=OIP.ev3JdjYOWNqkTbZE2ooPcAHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "JUMBO GG CHECKED WOOL SHIRT",
    price: 1350,
    image: "https://tse3.mm.bing.net/th?id=OIP.gbwNaA6lnHLBd0u76NXu6QHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "OXFORD COTTON SHIRT WITH EMBROIDERY",
    price: 920,
    image: "https://tse2.mm.bing.net/th?id=OIP.LdjrbYjaioZpy8n2kShPGgHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    name: "MAXI GG CANVAS SHIRT",
    price: 1350,
    image: "https://tse4.mm.bing.net/th?id=OIP.KP-vl3_gPSSj3IOolLYcsAHaHa&pid=Api&P=0&h=180",
  },
];

const RecommendedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 3) % recommendedItems.length);
  };

  const handlePrevious = () => {
    setActiveIndex((activeIndex - 3 + recommendedItems.length) % recommendedItems.length);
  };

  return (
    <div className="recommended-section">
      <h2 className="recommended-title">YOU MAY ALSO LIKE</h2>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={handlePrevious}>
          &lt;
        </button>
        <div className="carousel-images">
          {recommendedItems.slice(activeIndex, activeIndex + 3).map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image-container">
                <img src={item.image} alt={item.name} className="carousel-image" />
                <button className="wishlist-button">♡</button>
              </div>
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">${item.price}</p>
                <button className="shop-button">SHOP THIS</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default RecommendedProducts;
