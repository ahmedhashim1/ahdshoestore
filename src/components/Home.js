import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome to Shoestore</h1>
      <img src={require("../shoes.jpg")} alt="Shoes" />
    </div>
  );
}

export default Home;
