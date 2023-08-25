import { Link } from "react-router-dom";

export default function Buttons() {

    //const navigate = useNavigate();

    // function Logout() {
    //     navigate('/login');
    // }

    return (
    <>  
        <Link to='/login'>
            <button >Logout</button>
        </Link>
    </>
    );
}