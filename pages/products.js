import React from 'react';
import LayOut from "../Components/LayOut/LayOut";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";

const Products = () => {
    return (
        <LayOut>
            <main className='w-full h-full'>
                <div className='lg:container px-4 lg:px-0 flex flex-col items-center mx-auto'>
                    <Breadcrumb/>
                    <div>
                        <h3>صفحه محصولات </h3>

                    </div>
                </div>
            </main>

        </LayOut>

    );
};

export default Products;