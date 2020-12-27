import React, {useState, useEffect} from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import Constants from "expo-constants"

// 首頁
function HomeScreen() { 
    const logo = require("../images/react-native-logo.png")
    const reactNativeWebLinkk = "https://reactnative.dev/"

    return (
        <View style={styles.homeScreen}>
            <Image
                style={styles.logo}
                source={logo}
            />
            <Text style={styles.title}>React Native APP</Text>
            <Text style={styles.subtitle}>Learn once, write anywhere.</Text>
            <Text style={styles.version}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 6
    },
    subtitle: {
        fontSize: 18,
        color: "#888"
    }
})

export default HomeScreen;