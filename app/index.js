import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
    return (
        <SafeAreaView>
            <Stack.Screen/>
        </SafeAreaView>
    )
}

export default Home;