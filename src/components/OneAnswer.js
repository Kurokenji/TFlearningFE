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


function OneAnswer(props) {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [checkSubmit, setCheckSubmit] = useState(null); // neu null tuc chua tung submit đúng
 const sendData = (a) => { 
    props.parentCallback(props.numquest, a); // a: đáp án 
  };
  // cau hỏi
  const fieldsToShow = ['content', 'answer'];
    
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerArray, setAnswerArray] = useState(null);
    const [trueAnswer, setTrueAnswer] = useState(null);

    const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.id);
    if(event.target.id === "A" ) sendData(data.answerA);
    };
  useEffect(() => {
       
    const fetchData = async () => {
      try {
        // 
        const response = await axios.get('http://localhost:8000/api/quest/find/'+props.dataFromParent);
        setData(response.data);
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
                <Form.Check
                    type = "checkbox"
                    label={data.answerA}
                    id="A"
                    checked={selectedAnswer === data.answerA}
                    onChange={handleRadioChange}
                />

                </div>
                {/* <button onClick={submitButtonClick}> Gửi </button> */}
            </Form>
        </div>
        
    </div>
    
  );
}

export default OneAnswer;