import React from "react";
import logo from './logo.png';

const Header = () => {
    return (
            <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img src={logo} alt="Kiwify" className="mx-auto h-12 w-auto" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Criar nova conta
                    </h2>
                    
                </div>
            </div>
    );
};

export default Header;