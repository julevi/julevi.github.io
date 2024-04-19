import React from 'react';
import imagem from '../assets/site.jpg';

const Projetos = () => {
    return (
        <section className="fundo1 flex items-center justify-center">
            <div className="container max-w-7xl mx-auto py-10">
                <h1 className='text-4xl mb-10 font-bold text-center'>Projetos</h1>
                <div className='grid lg:grid-cols-3 gap-16 grid-col-1'>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className='border border-azul flex flex-col items-center justify-center'>
                            <img src={imagem} className='w-full ' alt="" />
                            <div className='text-center p-5'>
                                <h1 className='text-2xl font-bold my-2'>Nome do projeto</h1>
                                <div className='flex gap-5'>
                                    <button href="#" className="botao1 px-8 py-2 animacaoToque">Deploy</button>
                                    <button href="#" className="border-2 border-azul rounded-full px-8 py-2 animacaoToque">Repositório</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <button href="#" className="botao2 animacaoToque px-8 py-2 animacaoToque">Veja mais</button>
                </div>
            </div>

        </section>
    );
}

export default Projetos;
