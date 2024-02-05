import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductCategories from '../ProductCategories/ProductCategories.jsx';
import Products from '../Products/Products';

export default function MyApp() {
  const [items, setItems] = useState({});

  const handleSearch = async (query) => {

    try {

      localStorage.removeItem('activeItemCategory');

      const response = await fetch(`http://localhost:3000/api/items?q=${query}`);
      
      const data = await response.json();

      setItems(data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ProductCategories items={items} />
      <Products items={items} />
    </>
  );
}
