import React, { useState } from 'react';
import { Button, Pagination, Table } from 'react-bootstrap';

const QuestPaginate = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Nội dung hiển thị */}
      <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th width="5%">ID</th>
                      <th>Câu hỏi</th>
                      <th colspan="1">Câu trả lời</th>
                      <th>Đáp án</th>
                      <th width="20%">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                  {currentItems.map(item => (
                    <tr key={item.id}>                  
                        <td>{item.id}</td>
                        <td>{item.content}</td>
                        <td>{item.answer_list}</td>  
                        {/* <td>{item.answerB}</td>
                        <td>{item.answerC}</td>  
                        <td>{item.answerD}</td>   */}
                        <td>{item.answer}</td>
                        <td>
                        <Button variant="outline-success"> <a href="#"> Xem </a> </Button>                          
                        <Button variant="outline-primary"> <a href="#"> Chỉnh sửa </a> </Button>
                        <Button variant="outline-danger"> <a href="#">Xóa</a> </Button>  
                        </td>                                     
                    </tr>
                  ))}
                  </tbody>
                  
                </Table>  
      {/* Phân trang */}
      <Pagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default QuestPaginate;