import React, { useState } from 'react'
import { data } from '../data/data'


function Food() {
    // console.log(data);

    const [foods,setFoods] = useState(data);

    // filter types burger/pizza

    const filterType =(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };
 
    const filterPrice =(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price === price;
            })
        );
    };


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
       <h1 className='text-orange-600 font-bold tex-4xl text-center'>Top Rated Manu Items</h1>

       {/* filter Row  */}
       <div  className='flex flex-col lg:glex-row justify-between'>

        {/* fliter type */}
        <div >
          <p className='font-bold text-gray-700'>Filter Types</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={()=> setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
            <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
            <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
            <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
          </div>
        </div>

        {/* filter price */}
        <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={()=>filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                <button onClick={()=>filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                <button onClick={()=>filterPrice('$$$')}className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                <button onClick={()=>filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
            </div>
        </div>
    </div>

    {/* display foods */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-2'>
        {foods.map ((item, index)=> (
            <div key={index} className='border shodow-lg  rounded-lg hover:scale-105 duration-300'>
                <img src={item.image} alt={item.name}  className='w-full h-[200px] object-cover rouded-t-lg'/>

                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                    </p>
                </div>
            </div>
        ))}
    </div>



    </div>
  )
}

export default Food