
import InlineLoginForm from "./InlineLoginForm";


export default function Header () {

    return (
        <>
            <div className="login-header bg-cyan-600 place-items-start 
            grid grid-cols-2 gap-2">
                <div className="logo-her">
                    <p className="text-[3em] text-white"> FLAMES </p>
                </div>
                <div className="login-form">
                    <InlineLoginForm />
                </div>
            </div>
        </>
    )
}