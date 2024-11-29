import { useEffect } from 'react';

const CrispChat = () => {
  useEffect(() => {
    // Check if the Crisp script is already added
    if (!window.$crisp) {
      window.$crisp = [];
      //Replace with your Crisp Website ID
      window.CRISP_WEBSITE_ID = 'YOUR CRISP WEBSITE ID'; //After account creation, At Crisp Dashboard , Go to Settings > Workspace Settings > Setup Instructions then copy your Website ID

      const d = document;
      const s = d.createElement('script');

      s.src = 'https://client.crisp.chat/l.js';
      s.async = true;
      d.getElementsByTagName('head')[0].appendChild(s);
    }
  }, []);

  return null; // This component does not render anything
};

export default CrispChat;
