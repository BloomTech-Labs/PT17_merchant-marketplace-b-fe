import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';
import './dashboard.css';
import InvSection from './invSection';
import OrderSection from './orderSection';
import CustomerSection from './customerSection';

function Dashboard() {
  //
  // all of my state and auth setup
  const { authState, authService } = useOktaAuth();
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
  // console.log(token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    axios
      .get('https://merchant-marketplace-b-api.herokuapp.com/item', {
        headers: headers,
      })
      .then(res => {
        console.log('dashboard index', res);
        setData(res.data);
      })
      .catch(err => err);
  }, []);
  const getData = () => {
    console.log(data);
  };
  return (
    <div className="dashboard">
      <div className="dashItem">
        {data.map(item => (
          <InvSection
            key={item.id}
            id={item.id}
            item_name={item.item_name}
            description={item.description}
            price_in_cents={item.price_in_cents / 100}
            quantity_available={item.quantity_available}
          />
        ))}
      </div>
      <div className="dashItem">
        <OrderSection />
      </div>
      <div className="dashItem">
        <CustomerSection />
      </div>
    </div>
  );
}

export default Dashboard;
