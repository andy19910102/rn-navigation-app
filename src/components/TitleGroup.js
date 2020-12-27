import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TitleGroup = () => {
    return (
        <View>
            <Text>Title</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 6
    }
})

export default TitleGroup;