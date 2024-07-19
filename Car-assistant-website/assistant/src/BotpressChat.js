import React, { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    document.body.appendChild(botpressScript);

    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/41d31ed2-300a-4ef0-a03d-30d13528f085/webchat/config.js';
    configScript.defer = true;
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(botpressScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return <div id="botpress-chat-container" />;
};

export default BotpressChat;
