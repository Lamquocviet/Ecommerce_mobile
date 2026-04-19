import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import { useCart } from '../hooks/useCart';

const Header = () => {

  const { user } = useAuth();

  const { items } = useCart();

  return (

    <header className="bg-white shadow">

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/" className="text-xl font-bold">Ecommerce</Link>

        <nav className="flex space-x-4">

          <Link to="/products">Products</Link>

          <Link to="/cart">Cart ({items.length})</Link>

          {user ? <Link to="/profile">Profile</Link> : <Link to="/login">Login</Link>}

        </nav>

      </div>

    </header>

  );

};

export default Header;