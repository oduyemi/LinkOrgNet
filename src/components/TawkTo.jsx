import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Dynamically create the Tawk.to script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66f3cd854cbc4814f7de584a/1i8k5ll5p';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI required
};

export default TawkToChat;
