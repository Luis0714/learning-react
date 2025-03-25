import React from 'react';
import Card from '../components/Card';
import Product from '../types/Product';

const Products: React.FC<{ products: Product[] }> = ({ products }) => {
  const FIRST_IMAGE_INDEX = 0;
  return (
    <section>
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="grid grid-cols-3 gap-4">
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
