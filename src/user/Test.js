import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import AuthUser from "../components/AuthUser";
import { useNavigate } from "react-router-dom";

export default function Test(){
  const navigate = useNavigate();
    const {user} = AuthUser();
    const [data, setData] = useState([]);
    useEffect(() => {
        
       
        const fetchData = async () => {
          try {
            // 
            const response = await axios.get('http://localhost:8000/api/test/list/'+user.id);
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return(
        <div>
            <div class="container">
            <div class="row">
                <h1>Quản lí bài thi</h1>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th width="5%">ID</th>
                      <th>Title</th>
                      <th >Câu hỏi</th>
                      <th width="20%">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map(item => (
                    <tr key={item.id}>                  
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.quest}</td>  
                        <td>
                        <Button variant="outline-success"> <a href="#"> Xem </a> </Button>                          
                        <Button variant="outline-primary"> <a href="#"> Chỉnh sửa </a> </Button>
                        <Button variant="outline-danger"> <a href="#">Xóa</a> </Button>  
                        </td>                                     
                    </tr>
                  ))}
                  </tbody>
                </Table>              
                <div class="col-12">
                    <div class="pagination">
                        {/* {{$blogCategory->render()}};   */}
                    </div>         
                </div> 
            </div>
        </div>
        </div>
        
    )
}