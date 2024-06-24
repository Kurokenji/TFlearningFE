import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AuthUser from './AuthUser';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import DoOneQuest from './DoOneQuest';
import '../styles/Button.css';
import '../styles/Wrapbody.css';

function DoThisExam() {
  const navigate = useNavigate();
  const {user} = AuthUser();
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();
  const [answerList, setAnswerList] = useState([]); // 
  const [addEle, setAddEle] = useState(true) // đã khởi tạo phần tử mảng chưa
  const [data, setData] = useState([]);
  const [questArray, setquestArray] = useState(null);
  const handleButtonClick = () => {
    setquestArray(data.quest.split(','));
    // set mảng đáp án mặc định
    if(addEle){
      const num_quest = data.quest.split(','); // lấy số câu hỏi trong bộ đề
      for (let i = 1; i <= num_quest.length; i++) {
        answerList.push(1);
      };
      setAddEle(false);
    }
    // lấy đáp án
    // Đặt giá trị mới cho biến state để kích hoạt render lại
    setShowContent(true);
  };
  const handleButtonFinishClick= () => {
      console.log("kq:")
      console.log("user: "+user.id)
      console.log("test: "+data.id)
      const answerString =  answerList.join(',');
      console.log("dapan: "+answerString)
      const response =  axios.post('http://localhost:8000/api/submit', {
        arrayData: answerString,
        doingUser: user.id,
        doingTest: data.id,
      })
      window.alert('Submit bài thi thành công, bấm ok để chuyển về home');
      navigate('/');
  }
  const callbackFunction = (childDataIndex, childDataAnswer) => {
    const newArray = answerList.map((element, index) => (index === childDataIndex ? childDataAnswer : element));
    // Cập nhật trạng thái với mảng mới
    setAnswerList(newArray);
    console.log(newArray);
  }
   
  useEffect(() => {
       
    const fetchData = async () => {
      try {
        // 
        const response = await axios.get('http://localhost:8000/api'+location.pathname);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  // Render component content here
    
  return (
    <div className='row justify-content-center pt-5'>
        <div className="col-sm-6">
        </div>
        <div>
               
                <div className="wrap-exam">
                ID bài thi: {data.id}
                </div>

                <div>
                Tên bài thi: {data.title}
                <div>
                ID câu hỏi: {data.quest}
                </div>            
                </div>
                <div>
                <button className="custom-show-button" onClick={handleButtonClick}>Show</button>
                {showContent && (
                  <div >
                    <div className="minibody">
                      <div>
                        {questArray.map((item, index) => (
                        <li key={index}>
                          <a href={index+1}> Câu hỏi số {index+1} </a>         
                        </li>
                        ))}
                      </div>
                      <hr></hr>
                      <div className="timmer">
                        bộ đếm giờ
                      </div>
                    
                    </div>
                    <div className="wrapbody">
                    <ul>
                    {/* Hiển thị từng phần tử trong mảng */}
                    {questArray.map((item, index) => (
                      <li key={index}>
                        <div id={index+1}></div>
                          Câu hỏi số {index+1}, ID = {item.trim()}
                          <DoOneQuest dataFromParent={item.trim() } numquest={index} parentCallback={callbackFunction} />
                      </li>
                    ))}
                    </ul>
                    </div>
                  </div>
                )}
                <button className="custom-submit-button" onClick={handleButtonFinishClick}>Nộp bài</button>
               
                    
                </div>
                
            </div>

    </div>
    
  );
}

export default DoThisExam;