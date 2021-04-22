import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import {
  fetchProducts,
  fetchCategories,
  fetchTags,
} from '../../../../state/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../../common/navBar';
import SearchResults from './searchResults';
import useSearch from '../../../common/customHooks/useSearch';
import InventoryDisplay from './InventoryDisplay';

function CurrentInventory({
  state,
  inventory,
  fetchProducts,
  fetchCategories,
  fetchTags,
  getProductsStatus,
  getCategoriesStatus,
  getTagsStatus,
}) {
  const [searchData, setSearchData] = useState({});
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchProducts(authState);
    fetchCategories(authState);
    fetchTags(authState);
  }, []);

  const displayedData = useSearch(inventory, 'item_name', searchData);

  const [data, setData] = useState([]);

  const getAuthHeader = authState => {
    console.log(authState);
    if (authState.isAuthenticated) {
      return { Authorization: `Bearer ${authState.idToken}` };
    } else {
      throw new Error('Not authenticated');
    }
    localStorage.setItem('token', `${authState.idToken}`);
  };
  const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    axios
      .get('https://merchant-marketplace-b-api.herokuapp.com/item', {
        headers: headers,
      })
      .then(res => {
        setData(res.data);
      })
      .catch(err => err);
  }, []);
  const getData = () => {};
  return (
    <>
      <NavBar searchVisible={false} setData={setSearchData} />
      <div className="outerContainer">
        <div className="contents">
          <SearchResults data={displayedData} filter={searchData} />
          <Link to="/myprofile/inventory/additem">
            <Button style={{ background: '#8ac4d0', color: 'white' }}>
              +Add Item
            </Button>
          </Link>
        </div>

        <div className="inv-display-box">
          {data.map(item => (
            <InventoryDisplay
              key={item.id}
              id={item.id}
              item_name={item.item_name}
              description={item.description}
              price_in_cents={item.price_in_cents / 100}
              quantity_available={item.quantity_available}
              published={item.published}
            />
          ))}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  state: state,
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
  getCategoriesStatus: state.categories.getCategoriesStatus,
  getTagsStatus: state.tags.getTagsStatus,
});

export default connect(mapStateToProps, {
  fetchProducts,
  fetchCategories,
  fetchTags,
})(CurrentInventory);
