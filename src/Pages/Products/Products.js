import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard';
import { productsData } from '../../productsData';
import './Products.css';




const Products = () => {
  return (
    <div className="Products">
      <div className="Products-Filters">
        <p className="filter-head">Filters</p>
        <div className="category">
          <p className="filter-categoryHead">Category</p>
          <div className="filter-category">Mobiles</div>
        </div>
        <div className='Price'>
          <p className='priceHead'>Price</p>
          <input type="range" name='' id="" className='pricerange'/>
          <div className='price-input'>
            <input value={0} className='pricebox'/> <p>to</p>
            <input value={50000} className='pricebox'/> 
          </div>
        </div>
        <div className='brand'>
          <p>Brand</p>
        </div>
      </div>
      <div className='Products-items'>
        <p className='totalresults'>
             Showing 1-{productsData.length} of {productsData.length} results
        </p>
        <div className='sortby'>
             <p>Sort By</p>
             <ul className='sortitems'>
                       <li className='sortitem'>Relevance</li>
                       <li className='sortitem'>Popularity</li>
                       <li className='sortitem'>Price -- Low to High</li>
                       <li className='sortitem'>Price -- High to Low</li>
                       <li className='sortitem'>Newest First</li>
             </ul>
        </div>          
      </div>
      <div>
        {productsData.map((item, index) => (
          <Link key={index} to={`productdetails/${item.id}`}>
            <ProductDetailCard Data={item}/>
          </Link>
        ))}
      </div>
        
    </div>
  );
}

export default Products