import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { MainScreen } from "../sreens/MainScreen"
import { RegistrationScreen } from "../sreens/RegistrationScreen"


const ScreenNavigaor = createStackNavigator({
    Main: MainScreen,
    Registration: RegistrationScreen
})

export const AppNtigation = createAppContainer(ScreenNavigaor)