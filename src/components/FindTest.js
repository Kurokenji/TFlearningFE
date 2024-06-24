import { Form } from "react-router-dom";
import AuthUser from "./AuthUser"
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import axios from "axios";
import { Container, FormControl, InputGroup, Button } from 'react-bootstrap';

function FindTest(){
    const {user} = AuthUser();
    const [formData, setFormData] = useState();
    const handleInputChange = (e) => {
       
      };
    const FindTestByID = async (e) => {
        e.preventDefault();
    
        try {
          // Gửi dữ liệu lên server bằng Axios
          const response = await axios.post('http://localhost:8000/api/test/create', formData);
    
          // Xử lý phản hồi từ server nếu cần
          console.log(response.data);
    
          // Đặt lại giá trị của formData sau khi tạo category thành công
          setFormData({
          });
        } catch (error) {
          console.error('Error creating category:', error);
        }
      };
    return(
        <div>
            
            <h2>Tìm kiếm bài thi</h2>
            
            
            <Button onClick={FindTestByID}> Tìm kiếm</Button>
            
            
        </div>
    )
}
export default FindTest;