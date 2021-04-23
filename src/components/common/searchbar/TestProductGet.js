import React, { useState, useEffect } from 'react';
import axios from 'axios';
// attempting to bring in what I need for auth here
import { useOktaAuth } from '@okta/okta-react';
import { fetchAllProducts } from '/Users/chadscanlon/lambdaSchool/PT17_merchant-marketplace-b-fe/src/state/actions/index.js';
import { Form, Input, Button, Checkbox, InputNumber, Select } from 'antd';

const TestProductGet = () => {
  const [form] = Form.useForm();
  const [formState, setFormState] = useState({
    item_name: '',
    description: '',
    price_in_cents: '',
    quantity_available: '',
    published: '',
    id: '',
  });
  const [newItem, setNewItem] = useState([]);
  const { authState, authService } = useOktaAuth();
  const [data, setData] = useState([]);

  const getAuthHeader = authState => {
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

  const handleSubmit = event => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post(
        'https://merchant-marketplace-b-api.herokuapp.com/item',
        formState,
        { headers: headers }
      )
      .then(response => {
        setNewItem(response.data);
        setFormState({
          item_name: '',
          description: '',
          price_in_cents: '',
          quantity_available: '',
          published: '',
          id: '',
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  const handleChange = event => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    };

    setFormState(newItem);
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

  return (
    <>
      Testing product get request
      <div className="myProductContents">
        <h1>Update Product</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="salesperson">
            <input
              id="item_name"
              type="text"
              name="item_name"
              placeholder="item_name"
              required={true}
              value={formState.item_name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            <input
              id="description"
              type="text"
              name="description"
              placeholder="description"
              value={formState.description}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price_in_cents">
            <input
              id="price_in_cents"
              type="text"
              name="price_in_cents"
              placeholder="price_in_cents"
              value={formState.price_in_cents}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="quantity_available">
            <input
              id="quantity_available"
              type="text"
              name="quantity_available"
              placeholder="quantity_available"
              value={formState.quantity_available}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="published">
            <input
              id="published"
              type="checkbox"
              name="published"
              placeholder="published"
              value={formState.published}
              onChange={handleChange}
            />
          </label>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default TestProductGet;
