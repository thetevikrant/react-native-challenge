import { StackNavigator } from "react-navigation";
import Home from "../screens/home/containers/HomeContainer";
import Details from "../screens/details/containers/DetailsContainer";

export default StackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
  }
);
