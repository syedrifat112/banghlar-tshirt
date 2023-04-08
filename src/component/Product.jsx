import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';
import Card from './Card';

const Product = () => {
    const tshirt = useLoaderData();
    return (
        <div className='grid col-span-4'>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
           {
            tshirt.map(data => <TShirt key = {data._id} data ={data}></TShirt>)
           }
        </div>
        <div className='grid col-span-2'>
            <Card></Card>
        </div>
        </div>
    );
};

export default Product;