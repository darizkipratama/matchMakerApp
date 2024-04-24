import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LikedPages from "../components/pages/LikedPages";
import FeedPages from "../components/pages/FeedPages";

const Routes = () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedPages} />
            <Tab.Screen name="Liked" component={LikedPages} />
        </Tab.Navigator>
    );
};

export default Routes;
