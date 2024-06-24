import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import AuthUser from '../components/AuthUser';
import Button from 'react-bootstrap/Button';
import Search from '../components/Search';

function CreateTest() {
  const {user} = AuthUser();
  const [formData, setFormData] = useState({
    title: '',
    quest: '',
    // answer: '',
    create_by: user.id,
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddQuest = (resultSearch) => {  // hàm add quest search được vào 
    console.log(resultSearch);
    setFormData((prevData) => ({
      ...prevData,  
        quest:  prevData.quest ? prevData.quest + "," + resultSearch.toString() : prevData.quest + resultSearch.toString()
      
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/test/create', formData)
      console.log(response.data);

      // Đặt lại giá trị của formData sau khi tạo category thành công
      setFormData({
        title: '',
        quest: '',
  
        // answer: '',
        create_by: user.id,
      });
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };
  return (
    <div className='row justify-quest-center pt-5'>
      <div>   
        {/* className="col-sm-6" */}
        <h2> Tạo bộ đề thi mới</h2>
       
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Control type="text" placeholder="Tiêu đề"
                      onChange={handleInputChange}
                      value={formData.title}
                      name="title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuest">
                  <Form.Control type="text" placeholder="Nhập id câu hỏi cách nhau bởi dấu phẩy (,)"
                      onChange={handleInputChange}
                      value={formData.quest}
                      name="quest" />
        </Form.Group>
  
        
        {/* <Form.Group className="mb-3" controlId="formNum_quest">
                  <Form.Control type="text" placeholder="số lượng câu hỏi"
                      onChange={handleInputChange}
                      value={formData.num_quest}
                      name="num_quest" />
        </Form.Group> */}
        <Search addQuest={handleAddQuest}/>
        <Button variant="info" type="submit"> Create </Button>
        </Form>
        
       
      </div>
    </div>
  );
}

export default CreateTest;