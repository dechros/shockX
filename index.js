import { AppRegistry } from 'react-native';
import App from './src/App';
import appJson from './app.json';

const { name: appName } = appJson.expo;

AppRegistry.registerComponent(appName, () => App);
