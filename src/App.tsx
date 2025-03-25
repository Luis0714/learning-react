import { lazy } from 'react';
import './App.css';
import { useProducts } from './services/hooks/UseProducts';

const Products = lazy(() => import('./pages/Products'));

const App: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!products) {
    return <p>No products found</p>;
  }
  return (
    <>
      <Products products={products} />
    </>
  );
};

export default App;
