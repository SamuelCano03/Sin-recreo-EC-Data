import React, { useEffect } from 'react';

const InitialScreen = ({ onClick }) => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    let audioChunks = [];

    mediaRecorder.ondataavailable = event => audioChunks.push(event.data);
    mediaRecorder.start();

    setTimeout(() => {
      mediaRecorder.stop();
    }, 3000); // Cambia la duración si es necesario

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      const formData = new FormData();
      formData.append('file', audioBlob, 'audio.wav');

      const response = await fetch('http://localhost:5000/process-audio', { // tu endpoint en Flask
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      sendToChatbot(data.transcription);
    };
  };

const sendToChatbot = (text) => {
  const interval = setInterval(() => {
    const messageInput = document.querySelector('df-messenger').shadowRoot.querySelector('input');
    if (messageInput) {
      clearInterval(interval);
      messageInput.value = text;
      messageInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    }
  }, 100); // Intenta cada 100 ms
};

  return (
    <div className="App">
      <header className="App-header board-class bg-custom bg-cover bg-no-repeat">
        <img src="myfavi.png" className="App-logo" alt="logo" />
        <button onClick={startRecording} className='bg-gray-500 hover:bg-blue-500 font-bold py-2 px-1 rounded'>Start Recording</button>
        <button onClick={onClick} className='bg-gray-500 hover:bg-blue-500 font-bold py-2 px-1 rounded'>Hazme click</button>
      </header>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <df-messenger
            location="us-central1"
            project-id="gen-lang-client-0696680921"
            agent-id="fd6c00c6-89bc-4cf1-863b-3133d5179aea"
            language-code="en"
            max-query-length="-1">
          </df-messenger>
          `,
        }}
      />
    </div>
  );
};

export default InitialScreen;

