import { Stack } from "expo-router"; //links to other navigation pages.
import { useCallback } from "react";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); //prevents the splash screen from auto hiding.

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        DMMeduim: require('../assets/fonts/DMSans-Medium.ttf'),        
    });

    //only show main screen if fonts have been loaded.
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return <Stack onLayouyt ={onLayoutRootView}/>;
}

export default Layout;