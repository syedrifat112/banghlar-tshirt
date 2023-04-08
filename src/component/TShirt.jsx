import React from 'react';

const TShirt = ({data}) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src= {data.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <h1>{data.price}</h1>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default TShirt;