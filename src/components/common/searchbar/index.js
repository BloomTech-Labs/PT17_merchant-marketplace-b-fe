import React, { useEffect, useState } from 'react';
import { Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import './searchbarStyles.css';
import TestProductGet from './TestProductGet';

function SearchBar({ searchVisible, setData }) {
  const [inView, setInView] = useState('nope');
  const { Search } = Input;
  const { Option } = Select;

  function onSearch(values) {
    setData(values);
  }

  function publishedChange() {
    setData('$#&published');
  }
  function unPublishedChange() {
    setData('$#&unpublished');
  }
  function mainChange() {
    setData('$#&main');
  }

  function sortChange(value) {
    console.log(`selected sortBy: ${value}`);
  }

  function categoryChange(value) {
    console.log(`selected category: ${value}`);
  }

  useEffect(() => {
    if (searchVisible === false) {
      setInView('inView');
    }
  });

  return (
    <div className={inView}>
      <div className="searchOuter">
        <div className="searchBtns">
          <Button onClick={mainChange}>Main</Button>
          {/* adding a link to another component 
          to display published inventory only */}
          <Link to="/myprofile/inventory/published-inventory">
            <Button>Published</Button>
          </Link>
          {/* adding a link to another component 
          to display drafts only */}
          <Link to="/myprofile/inventory/drafts">
            <Button>Drafts</Button>
          </Link>
          <Button>Archives</Button>
        </div>
        <div className="searchBtns"></div>
        <Search
          placeholder="Search through your inventory"
          className="searchBar"
          onSearch={onSearch}
          onChange={e => onSearch(e.target.value)}
          name="searchItem"
          initialValue=""
        />
        <div>
          <Select defaultValue="Sort By" onChange={sortChange}>
            <Option value="cat">Category</Option>
          </Select>
          <Select defaultValue="Category" onChange={categoryChange}>
            <Option value="candy">Candy</Option>
          </Select>
        </div>
        <div>
          <Link to="/myprofile/inventory/additem">
            <Button className="add-item-button">+ Add Item</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
