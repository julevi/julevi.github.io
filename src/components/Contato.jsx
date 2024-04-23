import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import desenho from '../assets/images/phone.png'

const Contato = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();
    
        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        }
    
        emailjs.send("service_b8kwc1h", "template_cmbjmm4", templateParams, "sLAPRyPwN4Bl6etQF")
        .then((response) => {
            alert("Email enviado com sucesso! " + response.status + " " + response.text);
            setEmail('');
            setName('');
            setMessage('');
        })
        .catch((error) => {
            alert("Falha ao enviar o email, erro: " + error.message);
        });
    }

    return (
        <section className="fundo1" id='contato'>
            <div className="container max-w-5xl mx-auto py-20">

                <div className='flex flex-row justify-center items-center gap-18 xl:gap-28'>
                    <img className='hidden lg:block w-96 mx-5' src={desenho} alt="desenho" />
                    <form onSubmit={sendEmail} className='flex flex-col justify-center items-center w-full mx-5'>

                        <h1 className='text-4xl mb-5 font-bold text-center'>Contato</h1>
                        <input className='caixaForm my-2 w-full' type="text" id="nome" name="nome" placeholder="Nome:" onChange={(e) => setName(e.target.value)} value={name} required />

                        <input className='caixaForm my-2 w-full' type="email" id="email" name="email" placeholder="Email:" onChange={(e) => setEmail(e.target.value)} value={email} required />

                        <textarea className='caixaForm my-2 w-full' id="mensagem" name="mensagem" placeholder="Digite sua mensagem:" rows="8" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>

                        <button type="submit" className='botao1 mt-5 animacaoToque'>Enviar</button>

                    </form>
                </div>
            </div>
        </section >
    );
}

export default Contato;
