import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductCategories from '../ProductCategories/ProductCategories.jsx';
import Products from '../Products/Products';

export default function MyApp() {
  const [items, setItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:3000/api/items?q=${query}`);
      
      const data = await response.json();

      setItems(data);
      setSearchQuery(query);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ProductCategories items={items} />
      <Products items={items} searchQuery={searchQuery} />
    </>
  );
}
