import React, { useState } from 'react';
import './ProductPage.css';
import RecommendedProducts from './RecommendedProducts';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container">
      
      <div className="main-content">
       
        <div className="selections-section">
          <div className="section-header">
            <h2>YOUR SELECTIONS</h2>
            <button className="print-btn">Print</button>
          </div>

          <div className="product-details">
            <div className="product-image">
              <img src="/api/placeholder/300/400" alt="Oxford cotton shirt" />
            </div>
            
            <div className="product-info">
              <h3>Oxford cotton shirt with embroidery</h3>
              <p className="style-number">Style# 742711-ZANVH 9002</p>
              <p className="variation">Variation: white</p>
              <p className="size">Size: 46</p>

              <div className="quantity-price">
                <div className="quantity-selector">
                  <label>QTY:</label>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <span className="price">$ 920</span>
              </div>

              <div className="availability">
                <p className="status">AVAILABLE</p>
                <p className="delivery-info">
                  Estimated delivery within 2-3 business days. Delivery
                  between 9 am - 5 pm, Monday to Friday. A signature will
                  be required upon delivery.
                </p>
              </div>

              <div className="actions">
                <button className="edit">EDIT</button>
                <span style={{marginBottom:7}}>|</span>
                <button className="remove">REMOVE</button>
                <span style={{marginBottom:7}}>|</span>
                <button className="save">
                  <span className="heart-icon">♡</span>
                  SAVED ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>

     
        <div className="order-summary-section">
          <h2>ORDER SUMMARY</h2>
          <div className="order-number">USCAM140237279P1</div>
          
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>$ 920</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free (Premium Express)</span>
            </div>
            <div className="summary-row">
              <span>Estimated Tax</span>
              <span>Calculate</span>
            </div>
            <div className="summary-row total">
              <span>Estimated Total</span>
              <span>$ 920</span>
            </div>
          </div>

          <div className="summary-note">
            <div className='view-details'>
            <span>VIEW DETAILS</span>
            <span style={{fontWeight:'bolder'}}>+</span>
            </div>
            
            <p>You will be charged at the time of shipment. If this is
            a preorder of made-to-order purchase, you will
            be charged at the time of purchase.</p>
          </div>

          <div className="checkout-section">
            <button className="checkout-btn">CHECKOUT</button>
            <div className="payment-divider">OR</div>
            <button className="paypal-btn">PAY WITH PayPal</button>
            <button className="amazon-btn">PAY WITH amazon</button>
          </div>

          <div className="shipping-info">
            <div className="shipping-badge">
              COMPLIMENTARY EXPRESS SHIPPING
            </div>
          </div>

          <div className="help-section">
            <h3>MAY WE HELP?</h3>
            <div className="contact-info">
              <p>+1.877.482.2430</p>
              <p>assistance@us-onlineshopping.gucci.com</p>
            </div>
          </div>
        </div>
      </div>
      <RecommendedProducts/>
    </div>
  );
};

export default ProductPage;