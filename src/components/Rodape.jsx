import React from 'react';

const Rodape = () => {
    return (

        <footer className="menu absolute w-full z-10">
            <div className='container max-w-4xl mx-auto py-2 px-10'>
                <div className='flex items-center justify-center pt-5 flex-col md:flex-row'>

                    <div className='flex items-center justify-between w-full md:w-auto flex-col md:flex-row'>
                        <p className='text-white text-center md:mr-4 my-2 md:my-0'> © 2024 Juliana Prado. All Rights Reserved.</p>
                    </div>

                </div>
                <a href="https://www.linkedin.com/in/jpradoweb/"><p className='text-sm text-white text-center md:mr-4 my-2 md:my-0 cursor-pointer relative animacaoToque'><i>Desenvolvido por @jpradoweb</i> </p></a>
            </div>
        </footer>


    );
}

export default Rodape;