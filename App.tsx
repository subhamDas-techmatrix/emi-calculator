import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './src/navigation/Navigator';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigator />;
}

export default App;
