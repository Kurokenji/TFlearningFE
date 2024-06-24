import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthUser from './AuthUser';
import { useNavigate } from 'react-router-dom';

function FormLogin() {
    const navigate = useNavigate();
    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submitForm = () =>{
        try{
            const response = http.post('/login',{email:email,password:password}).then((res)=>{
                if(res.status === 200){
                    setToken(res.data.user,res.data.access_token);
                    console.log(res.status);
                }
                navigate('/');
              
                console.log(res.status);
            });
        }
        catch{
            window.alert('Tài khoản hoặc mật khẩu không đúng');
            navigate('/login');
            return ;
        };
        
    }
  return (
    <div className='row justify-content-center pt-5'>
        <div className="col-sm-6">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                    onChange={e=>setEmail(e.target.value)} />
                    {/* onChange = Gọi hàm -> gọi luôn hàm setEmail, e=event */}
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    onChange={e=>setPassword(e.target.value)} />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="button" onClick={submitForm}>
                Login
            </Button>
        </Form>

        </div>

    </div>
    
  );
}

export default FormLogin;