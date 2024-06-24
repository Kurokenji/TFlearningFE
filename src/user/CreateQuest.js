import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import AuthUser from '../components/AuthUser';
import Button from 'react-bootstrap/Button';

function CreateQuest() {
  const {user} = AuthUser();
  const [numAns, setNumAns] = useState(1);
  const [showAns, setShowAns] = useState(false);
  const handleButtonClick = () => {
    setNumAns(numAns+1);
    setShowAns(true);
  };

  const [formData, setFormData] = useState({
    content: '',
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: '',
    answerE: '',
    answerF: '',
    answer: '',
    difficult: '0',
    owner: user.id,
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Gửi dữ liệu lên server bằng Axios
      const response = await axios.post('http://localhost:8000/api/quest/create', formData);

      // Xử lý phản hồi từ server nếu cần
      console.log(response.data);

      // Đặt lại giá trị của formData sau khi tạo category thành công
      setFormData({
        content: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        answerE: '',
        answerF: '',
        answer: '',
        owner: user.id,
        difficult: '0',
      });
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };
  return (
    <div className='row justify-content-center pt-5'>
      <div>   
        {/* className="col-sm-6" */}
        <h2> Tạo câu hỏi mới</h2>
       
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formContent">
                  <Form.Control as="textarea" placeholder="Nhập câu hỏi"
                      onChange={handleInputChange}
                      value={formData.content}
                      name="content" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAnswerA">
                  <Form.Control type="text" placeholder="Câu trả lời"
                      onChange={handleInputChange}
                      value={formData.answerA}
                      name="answerA" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAnswerB">
                  <Form.Control type="text" placeholder="Câu trả lời"
                      onChange={handleInputChange}
                      value={formData.answerB}
                      name="answerB" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAnswerC">
                  <Form.Control type="text" placeholder="Câu trả lời"
                      onChange={handleInputChange}
                      value={formData.answerC}
                      name="answerC" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAnswerD">
                  <Form.Control type="text" placeholder="Câu trả lời"
                      onChange={handleInputChange}
                      value={formData.answerD}
                      name="answerD" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAnswerE">
                  <Form.Control type="text" placeholder="Câu trả lời"
                      onChange={handleInputChange}
                      value={formData.answerE}
                      name="answerE" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAnswerF">
                  <Form.Control type="text" placeholder="Câu trả lời"
                      onChange={handleInputChange}
                      value={formData.answerF}
                      name="answerF" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formAnswer">
                  <Form.Control type="text" placeholder="Đáp án chính xác"
                      onChange={handleInputChange}
                      value={formData.answer}
                      name="answer" />
        </Form.Group>
        <Button variant="info" type="submit"> Create </Button>
        </Form>
       
      </div>
    </div>
  );
}

export default CreateQuest;