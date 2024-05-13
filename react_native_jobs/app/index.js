import { View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {

    const router = useRouter(); //hook

    return (
        //allows to show the content in a way that there is no clipping of the content.
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}> 
            
            <Stack.Screen //self closing statement,
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite} ,
                    headerShadowVisible: false, //removes a shadow under the header

                    //adds a icon to the left of the header
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension="60%"/>
                    ),
                    //add icon to the right of the header
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = {images.profile} dimension="100%"/>
                    ),
                    headerTitle: "", //overrides the default title                    
                }}
            
            />

            {/* the vertical scroll indicator to false hides the scroll bar */}
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: SIZES.medium,
                    }}
                >
                    <Welcome
                        //we can pass some props to the welcome component
                    />
                    <Popularjobs
                        //we can pass some props to the popular jobs component
                    />

                    <Nearbyjobs
                        //we can pass some props to the nearby jobs component
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;