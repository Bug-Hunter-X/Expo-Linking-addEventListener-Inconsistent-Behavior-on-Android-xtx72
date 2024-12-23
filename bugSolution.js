import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const handleUrl = (url) => {
      setDeepLink(url);
    };

    const subscription = Linking.addEventListener('url', handleUrl);

    Linking.getInitialURL().then(url => {
      if (url) {
        setInitialUrl(url);
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
      {deepLink && <Text>Deep Link: {deepLink}</Text>}
    </View>
  );
}

export default App;