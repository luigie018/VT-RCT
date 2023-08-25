import { useNavigate } from "react-router-dom";

export default function Buttons() {

    const navigate = useNavigate();

    function Logout() {
        navigate('/main');
    }

    return (
    <>
        <button className="text-white bg-red-900 border-solid border-2 
        rounded-md px-6 py-0.5 hover:bg-red-800" type='submit' onClick={Logout}>Signin</button>
    </>
    );
}