import React from 'react';
import imagem from '../assets/site.jpg';

const Projetos = () => {
    return (
        <section className="bg-cinza flex items-center justify-center">
            <div className="container max-w-7xl mx-auto py-10">
                <h1 className='text-4xl mb-10 font-bold text-center'>Projetos</h1>
                <div className='grid lg:grid-cols-3 gap-16 grid-col-1'>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className='flex flex-col items-center justify-center px-2'>
                            <img src={imagem} className='border rounded-2xl shadow-lg' alt="" />
                            <h1 className='text-2xl font-bold my-2'>Nome do projeto</h1>
                            <div className='flex gap-5'>
                                <button href="#" className="border-2 border-roxo rounded-full px-8 py-2 text-white bg-roxo hover:transform hover:scale-110 transition-transform duration-300 ease-in-out">Deploy</button>
                                <button href="#" className="border-2 border-roxo rounded-full px-8 py-2 text-black hover:transform hover:scale-110 transition-transform duration-300 ease-in-out">Repositório</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <button href="#" className="bg-gray-300 border rounded-full px-8 py-2 text-white font-bold hover:transform hover:scale-110 transition-transform duration-300 ease-in-out">Veja mais</button>
                </div>
            </div>

        </section>
    );
}

export default Projetos;
