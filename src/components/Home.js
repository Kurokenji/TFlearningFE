import {Routes, Route, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import CardGroup from 'react-bootstrap/CardGroup';
import CardLink from 'react-bootstrap/esm/CardLink';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import DoThisExam from './DoThisExam';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({id}){
   
    const cardStyle = {
        border: '2px solid #ddd', 
        margin: '10px',            

      };
    const [data, setData] = useState([]);
    useEffect(() => {
       
      const fetchData = async () => {
        try {
          // 
          const response = await axios.get('http://localhost:8000/api/test/detail');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Tham số thứ hai là mảng dependencies để đảm bảo useEffect chỉ chạy một lần khi component được mount.
  
    return(
        <div>                 
            <div> 
                <Image variant="top" src="bia2.jpg" width={1300}></Image>
            </div>
            <div className="row justify-content-center pt-5">
            <CardGroup>
                {data.map((item, index) => (
                <React.Fragment key={item.id}>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src="default-document.png" />
                    <Card.Body>
                    <Card.Title>
                        <CardLink as={Link} to={{pathname:"/do/"+item.id}}>
                            {item.title} 
                        </CardLink>    
                    </Card.Title>
                    <Card.Text >
                        <div> Test ID: {item.id}</div>
                        <div> Số câu hỏi: {item.num_quest} </div>
                        <div> Người tạo: {item.own}</div>

                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    
                </Card>
            
                
                </React.Fragment>
                
                ))}
               
                </CardGroup>
               
                <Routes>
                    {/* <Route path="/do_exam/:id" element={<Exam/>} /> */}
                    <Route path='/do/:id' element={<DoThisExam/>} />
                </Routes>
                
            </div>
            
        </div>
     
    )
}