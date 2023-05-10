import LoginPage from '../views/Login';
import RegisterPage from '../views/Register';
import DetailsPage from '../views/Details';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomePage from "../views/Home";
import Movies from "../views/Movies";

const AppNavigator = createStackNavigator({
        Home:{
            screen: HomePage,
            navigationOptions:{
                title:"FullFlix "
            }
        },
        Login: {
            screen: LoginPage,
            navigationOptions:{
                title:"FullFlix | Login"
            }
        },
        Register: {
            screen: RegisterPage,
            navigationOptions:{
                title:"FullFlix | Register"
            }
        },
    Movies:{
        screen: Movies,
        navigationOptions:{
            title:"FullFlix | Lista de filmes"
        }
    },
        Details:{
            screen: DetailsPage,
            navigationOptions:{
                title:"FullFlix | Details"
            }
        },
    },{
        defaultNavigationOptions:{
            title:'FullFlix!',
            headerTintColor:'#FFFFFF',
            headerStyle:{
                backgroundColor:"#000",
                borderBottomWidth:1,
                borderBottomColor:'#C5C5C5',
            },
            headerTitleStyle:{
                color:'#FFFFFF',
                fontSize:30,
            },
        }
    },
);

const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;