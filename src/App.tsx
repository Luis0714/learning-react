import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useProducts } from './services/hooks/UseProducts';
import Header from './components/Header';

const Products = lazy(() => import('./pages/Products'));
const Login = lazy(() => import('./pages/Login'));

const App: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();

  return (
    <>
      <Header isLoggedIn={false} />

      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          {/* Redirige "/" a "/products" */}
          <Route path="/" element={<Navigate to="/products" />} />

          {/* Página de productos con datos del hook */}
          <Route
            path="/products"
            element={
              isLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : products ? (
                <Products products={products} />
              ) : (
                <p>No products found</p>
              )
            }
          />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Ruta 404 opcional */}
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
