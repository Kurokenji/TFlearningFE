import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthUser from './AuthUser';
import { useNavigate } from 'react-router-dom';

function FormRegister() {
    const navigate = useNavigate();
    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [dob, setDob] = useState();
    const [sdt, setSdt] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();
    const submitForm = () =>{
        if(!(rePassword === password)){
            window.alert('Mật khẩu không khớp');
            navigate('/register');
            return ;
        }
        http.post('/register',{email:email,password:password,name:name,sdt:sdt,dob:dob}).then((res)=>{
            navigate('/login');
        })
    }
  return (
    <div className='row justify-content-center pt-5'>
        <div className="col-sm-6">
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control type="text" placeholder="Nhập tên của bạn"
                    onChange={e=>setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Địa chỉ Email</Form.Label>
                <Form.Control type="email" placeholder="Nhập địa chỉ Email" 
                    onChange={e=>setEmail(e.target.value)} />
                    {/* onChange = Gọi hàm -> gọi luôn hàm setEmail, e=event */}
                <Form.Text className="text-muted">
               
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSdt">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control type="text" placeholder="Nhập số điện thoại"
                    onChange={e=>setSdt(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Nhập mật khẩu"
                    onChange={e=>setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formReEnterPassword">
                <Form.Label>Nhập lại mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Nhập lại mật khẩu"
                    onChange={e=>setRePassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Ngày sinh</Form.Label>
                <Form.Control type="date" v
                    onChange={e=>setDob(e.target.value)} />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="button" onClick={submitForm}>
                Đăng ký
            </Button>
        </Form>

        </div>

    </div>
    
  );
}

export default FormRegister;