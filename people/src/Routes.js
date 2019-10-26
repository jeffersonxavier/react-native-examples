import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import People from './pages/People';
import PeopleDetail from './pages/PeopleDetail';
import capitalize from './utils/capitalize';

const AppNavigator = createStackNavigator({
  PeoplePage: {
    screen: People,
  },
  PeopleDetailPage: {
    screen: PeopleDetail,
    navigationOptions: ({ navigation }) => {
      return {
        title: capitalize(navigation.state.params.person.name.first),
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30,
        },
      };
    }
  },
}, {
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerStyle: {
      backgroundColor: '#7aa9f5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center',
    },
  }
});

export default createAppContainer(AppNavigator);
