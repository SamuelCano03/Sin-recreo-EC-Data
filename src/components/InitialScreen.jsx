import React, { useEffect } from 'react';

const InitialScreen = ({ onClick }) => {
  useEffect(() => {
    // Cargar el CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
    document.head.appendChild(link);

    // Cargar el script
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);

    // Limpiar los elementos al desmontar el componente
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header board-class bg-custom bg-cover bg-no-repeat">
        <img src="myfavi.png" className="App-logo" alt="logo" />
        <button onClick={onClick} className='bg-gray-500 hover:bg-blue-500 font-bold py-2 px-1 rounded'>Click me</button>
      </header>
      {/* Insertar el código embebido */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <df-messenger
            location="us-central1"
            project-id="gen-lang-client-0696680921"
            agent-id="fd6c00c6-89bc-4cf1-863b-3133d5179aea"
            language-code="en"
            max-query-length="-1">
            <df-messenger-chat-bubble chat-title="recreo agente"></df-messenger-chat-bubble>
          </df-messenger>
          <style>
            df-messenger {
              z-index: 999;
              position: fixed;
              --df-messenger-font-color: #000;
              --df-messenger-font-family: Google Sans;
              --df-messenger-chat-background: #f3f6fc;
              --df-messenger-message-user-background: #d3e3fd;
              --df-messenger-message-bot-background: #fff;
              bottom: 16px;
              right: 16px;
            }
          </style>
          `,
        }}
      />
    </div>
  );
};

export default InitialScreen;
