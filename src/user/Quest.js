import axios from "axios";
import React, { useState, useEffect } from 'react';
import AuthUser from "../components/AuthUser";
import QuestPaginate from "../components/QuestPaginate";

export default function Quest(){
  // phân trang
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [totalPages,setTotalPages] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // end phân trang
  const {user} = AuthUser();
  const [data, setData] = useState([]);
  useEffect(() => {
       
      const fetchData = async () => {
        try {
          // 
          const response = await axios.get('http://localhost:8000/api/quest/list/'+user.id);
          setData(response.data);
          let total = Math.ceil(data.length / itemsPerPage);
          setTotalPages(total);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Tham số thứ hai là mảng dependencies để đảm bảo useEffect chỉ chạy một lần khi component được mount.
  
    return (
      <div>
        <div>
          <div>
           
          </div>
          <div class="container">
            <div class="row">
                <h1>Quản lí câu hỏi</h1>
                <QuestPaginate  data={data}  itemsPerPage={5} />
                          
                <div class="col-12">
                    <div class="pagination">
                       
                    </div>         
                </div> 
            </div>
        </div>
        </div>
      </div>
    );
}