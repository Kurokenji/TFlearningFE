import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthUser from './AuthUser';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function DoOneQuest(props) {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [checkSubmit, setCheckSubmit] = useState(null); // neu null tuc chua tung submit đúng
 const sendData = (a) => { 
    props.parentCallback(props.numquest, a); // a: đáp án 
  };
  // cau hỏi
  const fieldsToShow = ['content', 'answerA', 'answerB', 'answerC', 'answerD', 'answerE', 'answerF'];
    
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [trueAnswer, setTrueAnswer] = useState(null);

    const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.id);
    if(event.target.id === "A" ) sendData(data.answerA);
    if(event.target.id === "B" ) sendData(data.answerB);
    if(event.target.id === "C" ) sendData(data.answerC);
    if(event.target.id === "D" ) sendData(data.answerD);
    if(event.target.id === "E" ) sendData(data.answerE);
    if(event.target.id === "F" ) sendData(data.answerF);
    };
    
    const [shouldRender, setShouldRender] = useState(false);

    // Xử lí câu hỏi điền
    // const handleInputChange = (e) => {
    //   sendData(data.answerText)
    // };
    

  // const submitButtonClick = (e)  => {
  //   e.preventDefault();
  //   console.log('btn clicked');
  //   console.log(trueAnswer);
  //     if(selectedAnswer == trueAnswer){
  //         console.log('dungg roi');
  //         setCheckSubmit(1); // đánh dấu đã từng trả lời đúng
  //     }
  //     else{
  //       if(setCheckSubmit){ // nếu từng trả lời đúng thì trừ điểm

  //       }
  //     }
  // };
  // end cau hỏi
  useEffect(() => {
       
    const fetchData = async () => {
      try {
        // 
        const response = await axios.get('http://localhost:8000/api/quest/find/'+props.dataFromParent);
        setData(response.data);
        const timeout = setTimeout(() => {
          setShouldRender(true);
      }, 3000);

      // Clear timeout khi component bị unmount (tránh memory leak)
      return () => clearTimeout(timeout);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  // Render component content here
    
  return (
    <div>
        {/* <div>
               {data.content}
               {props.dataFromParent}
        </div> */}
        <div>
            <Form>
                <div> {data.content}</div>
                <div key={'default-checkbox'} className="mb-3">
                {data.num_of_answer == 1 &&
                <Form.Group className="mb-3" controlId="formAnswer">
                <Form.Control type="text" placeholder="Câu trả lời" style={{ width: '300px'}}
                    // onChange={handleInputChange}
                    name="answerText" />
                </Form.Group>
                }
                {data.num_of_answer > 1 &&
                <Form.Check
                    type = "checkbox"
                    label={data.answerA}
                    id="A"
                    checked={selectedAnswer === "A"}
                    onChange={handleRadioChange}
                />}
                {data.num_of_answer > 1 &&                
                <Form.Check
                    type = "checkbox"
                    label={data.answerB}
                    id="B"
                    checked={selectedAnswer === "B"}
                    onChange={handleRadioChange}
                /> }
                {data.num_of_answer > 2 &&
                <Form.Check
                    type = "checkbox"
                    label={data.answerC}
                    id="C"
                    checked={selectedAnswer === "C"}
                    onChange={handleRadioChange}
                /> }
                {data.num_of_answer > 3 &&
                <Form.Check
                    type = "checkbox"
                    label={data.answerD}
                    id="D"
                    checked={selectedAnswer === "D"}
                    onChange={handleRadioChange}
                />}
                {data.num_of_answer > 4 &&
                <Form.Check
                    type = "checkbox"
                    label={data.answerE}
                    id="E"
                    checked={selectedAnswer === "E"}
                    onChange={handleRadioChange}
                />}
                {data.num_of_answer > 5 &&
                <Form.Check
                    type = "checkbox"
                    label={data.answerF}
                    id="F"
                    checked={selectedAnswer === "F"}
                    onChange={handleRadioChange}
                />}
                </div>
                {/* <button onClick={submitButtonClick}> Gửi </button> */}
            </Form>
        </div>
        
    </div>
    
  );
}

export default DoOneQuest;