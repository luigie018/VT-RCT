import Button from "./Button";


export default function InlineLoginForm() {
    return (
        <>
            <div className="my-3 columns-3 px-3 py-4 gap-3">
                <form action="">
                    <div className="my-1 w-50 columns-2 gap-2">
                        <div className="form-input block">
                            <input className="username-input w-[100%]" placeholder="username" type="text" />
                        </div>
                        <div className="form-input block">
                            <input className="password-input w-[100%]" placeholder="password" type="password" />
                        </div>
                    </div>
                </form>
                <div>
                    <Button />
                </div>
            </div>
            
           
        </>
    )
}