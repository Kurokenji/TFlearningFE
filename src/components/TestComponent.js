// File: src/components/UserComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Hàm này sẽ được gọi khi component được render
    const fetchData = async () => {
      try {
        // Gọi API bằng axios
        const response = await axios.get('http://localhost:8000/api/get-user');

        // Lấy dữ liệu từ response
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Gọi hàm fetchData để lấy dữ liệu từ API
    fetchData();
  }, []); // [] giúp useEffect chỉ chạy một lần khi component được render

  return (
    <div>
      <h2>User Information</h2>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email:{userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p> // hoặc hiển thị
      )}
    </div>
  );
};

export default TestComponent;
