import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Login';

const StackNavigator = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      title: 'Bem-vindo!'
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Séries',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
    },
  }
});

export default createAppContainer(StackNavigator);
