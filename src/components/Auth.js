import Admin from "../admin/Admin";
import User from "../user/User";
import AuthUser from "./AuthUser";

function Auth(){
    const {user} = AuthUser();
    if (user.role === "1"){
        return(
            <div>
                <User/>
                {/* <div> Chào mừng {user.name} đã login thành công </div> */}
                {/* <div> user role: {user.role}</div> */}
            </div>
            
        ) 
        
    }
    return(
        <div>
            <Admin/>
        </div>
        
    )
}

export default Auth;