import React from "react"
import { View , ScrollView, StyleSheet } from "react-native"
import Navbar from "./Navbar"

const Layout = (props) => {
    return (
        <View style={styles.screen}>
            <ScrollView style={styles.wrap}>
        {props.children}
            </ScrollView>
            <Navbar />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'red'
    },
    wrap: {
        flex: 1,
        backgroundColor: 'pink'
    }
})

export default Layout