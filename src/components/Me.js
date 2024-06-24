import { useEffect, useState } from "react";
import AuthUser from "./AuthUser"
import Button from "react-bootstrap/Button";
import '../styles/Me.css'

export default function Me(){
    const {user} = AuthUser();
    // const [job, setJob] = useState("Học sinh");
    useEffect(() => {
        // if(user.role == 1) setJob("Giáo viên");
    }, []);
    return(
        <div>
            <h2>Thông tin cá nhân</h2>
            {/* <div className="row justify-content-center pt-5">
                <div className="wrap-me">
                    <div class="title-text profile-card-panel-header"> </div>
                    <div>Tên: {user.name}</div>
                    <div>Email: {user.email}</div>
                    <div>SĐT: {user.sdt}</div>
                    <div>Ngày sinh: {user.dob}</div>
                    <div>Nghề nghiệp: {job}</div>
                </div>
                      
            </div> */}
            <body>
                <div class="container-me">
                    <div class="profile-info">
                    <div>
                        <label>Tên: </label>
                        <span> {user.name}</span>
                    </div>
                    <div>
                        <label>Email:</label>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <label>SĐT:</label>
                        <span>{user.sdt}</span>
                    </div>
                    <div>
                        <label>Ngày sinh:</label>
                        <span>{user.dob}</span>
                    </div>
                    {/* <div>
                        <label>Nghề nghiệp:</label>
                        <span> {job}</span>
                    </div> */}
                    </div>
                </div>
                <Button to={{pathname:"/me/edit/"+user.id}}>
                    Chỉnh sửa
                  </Button>
            </body>
        </div>
    )
}