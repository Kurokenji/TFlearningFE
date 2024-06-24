/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from 'react';
import AuthUser from "./AuthUser";
import Card from 'react-bootstrap/Card';

export default function History(){
  const cardStyle = {
    border: '2px solid #ddd', // Điều chỉnh border
    margin: '10px',            // Điều chỉnh margin
    padding: '10px',
  };
    const {user} = AuthUser();
    const [data, setData] = useState([]);
    useEffect(() => {
       
      const fetchData = async () => {
        try {
          // 
          const response = await axios.get('http://localhost:8000/api/history/'+user.id);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Tham số thứ hai là mảng dependencies để đảm bảo useEffect chỉ chạy một lần khi component được mount.
  
    return (
     <div>
      Lịch sử làm bài: {user.name}
      <div>
      {data.map(item => (
        <Card key={item.id} style={cardStyle}>                  
          <div>ID: {item.id} | Tên bài thi: {item.name}</div>
          <div>Thời gian làm bài:{item.time}</div>
          {/* <div>Đáp án đã nộp: {item.quest_submit}</div> */}
          <div>Điểm số: {item.diemso} </div>
          <div>Thời gian nộp bài: {item.formatted_date} : {item.formatted_time}</div>                                                
        </Card>
      ))}
      </div>
     </div>
    );
}