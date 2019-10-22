import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import People from './pages/People';

const AppNavigator = createStackNavigator({
  PeoplePage: {
    screen: People,
  }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerStyle: {
      backgroundColor: '#7aa9f5',
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center',
    },
  }
});

export default createAppContainer(AppNavigator);
