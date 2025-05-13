const Shoes = () => {
  return (
    <main className="Shoes container">
      <div className="Shoes-wrapper">
        <div className="Shoes-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH YOUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH YOUR SHOES.
          </p>
          <div className="shoes-button">
            <button className="primary-button">Shop Now</button>
            <button className="secondary-button">Category</button>
          </div>
          <div className="shopping">
            <p>Available On</p>
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.webp" alt="flipkart-logo" />
            </div>
          </div>
        </div>

        <div className="shoes-image">
          <img src="/images/shoes.avif" alt="shoe-image" />
        </div>
      </div>
    </main>
  );
};



export default Shoes;