import React from "react";


const Signup = () => {
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
                <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                    E-mail
                </label>
                <div>
                    <input type="text" autocomplete="off" name="null" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" />
                </div>
            </div>
            <div className="mt-6">
                <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                    Repetir e-mail
                </label>
                <div>
                    <input type="email" autocomplete="off" name="null" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" />
                </div>
            </div>
            <div className="mt-6">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                    Senha
                </label>
                <div>
                    <input type="password" autocomplete="off" name="null" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" />
                </div>
            </div>
            <div className="mt-6">
                <label className="relative flex items-start mt-2">
                    <div className="flex items-center h-5">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer" />
                    </div>
                    <div className="ml-2 text-sm leading-5">
                        <span className="font-medium text-gray-700">Eu li e aceito os <a href="https://kiwify.com.br/termos-de-uso" target="_blank" className="underline"> termos de uso</a>, 
                            <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" className="underline"> termos de licença de uso de software</a>, 
                            <a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" className="underline"> política de conteúdo</a> da Kiwify </span>
                        </div>
                 </label>
            </div>
            <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                    <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        Criar conta
                </button>
                </span>
            </div>
        </div>
    </div>
    );
};

export default Signup;