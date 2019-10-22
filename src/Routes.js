import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import People from './pages/People';

const AppNavigator = createStackNavigator({
  PeoplePage: {
    screen: People,
  }
}, {
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
