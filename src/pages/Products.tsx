import React from 'react';
import Card from '../components/Card';
import Product from '../types/Product';

const Products: React.FC<{ products: Product[] }> = ({ products }) => {
  const FIRST_IMAGE_INDEX = 0;
  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.images[FIRST_IMAGE_INDEX]}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
