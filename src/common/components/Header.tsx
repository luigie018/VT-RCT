import { useState } from "react";
import Logo from "./Logo";




export default function Header () {

    const [menuClicked, setMenuClicked] = useState("none");

    function openMenu() { 
        if (menuClicked === "show") {
            setMenuClicked("none");
            document.documentElement.style.setProperty("--menu-status", "none");
        } else {
            setMenuClicked("show");
            document.documentElement.style.setProperty("--menu-status", "show");
        }
        
    }

    return (

        <>

        <div className="container lg:mx-32 xl:mx-32">
            <div className="wrapper flex flex-row justify-between">
                <div className="max-w-[10px] mr-[20%]">
                    <Logo />
                </div>
                <div className="main-menu max-w-[50%]">
                    <ul className="flex flex-row gap-12 text-center mt-9">
                        <li>Home</li>
                        <li>News</li>
                        <li>History</li>
                        <li>Account</li>
                        <li>About</li>
                    </ul>
                </div>
                <nav className="burger-menu cursor-pointer h-[65px] w-[65px]" onClick={openMenu}>
                    <p> 
                        {
                        menuClicked === "none" 
                            ?
                                <a><i className="fa fa-bars text-3xl p-5"></i></a>
                                
                            :
                                <a><i className="fa fa-close text-3xl p-5"></i></a>
                        }
                    </p>
                    
                </nav>
            </div>
        </div>

        <div className="container sub-nav-menu pt-20">
            <nav className="wrapper nav-menu flex text-center">
                <ul className="menu flex-col min-w-[100%]">
                    <li>Home</li>
                    <li>News</li>
                    <li>History</li>
                    <li>Account</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
        </>
    )
}