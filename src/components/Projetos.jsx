import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyC0Pim959TWQmENeIJRUg3W5wYL6x-PvJE",
      authDomain: "projetos-fullstack.firebaseapp.com",
      projectId: "projetos-fullstack",
      storageBucket: "projetos-fullstack.appspot.com",
      messagingSenderId: "2935472717",
      appId: "1:2935472717:web:dc6f42f0356ff27eb11204"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Buscar projetos do Firebase Firestore
    const fetchProjetos = async () => {
      const projetosSnapshot = await getDocs(collection(db, 'projetos'));
      const projetosData = projetosSnapshot.docs.map(doc => doc.data());
      setProjetos(projetosData);
    };

    fetchProjetos();
  }, []);

  return (
    <section className="fundo1 flex items-center justify-center">
      <div className="container max-w-7xl mx-auto py-10">
        <h1 className='text-4xl mb-10 font-bold text-center'>Projetos</h1>
        <div className='grid lg:grid-cols-3 gap-16 grid-col-1'>
          {projetos.map((projeto, index) => (
            <div key={index} className='border border-azul flex flex-col items-center justify-center animacaoToque'>
              <img src={projeto.imagem} className='w-full ' alt="" />
              <div className='flex flex-col items-center justify-center text-center p-5'>
                <h1 className='text-2xl font-bold my-2'>{projeto.nome}</h1>
                <a href={projeto.link} className="botao1 px-8 py-2 animacaoToque" target="_blank">Acesse aqui!</a>
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center mt-10'>
          <a href="https://github.com/julevi" className="botao2 animacaoToque px-8 py-2 animacaoToque" target="_blank">Veja mais</a>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
