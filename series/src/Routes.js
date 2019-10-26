import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Login';

const StackNavigator = createStackNavigator({
  LoginScreen: {
    screen: Login,
  }
});

export default createAppContainer(StackNavigator);
