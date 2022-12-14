const { View, Text, StyleSheet } = require("react-native")

const DevoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Aca van los devocionales</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#ddd',
        paddingVertical: 14,
        paddingHorizontal: 18,
        margin: 14
    },
    buttonText: {
        color: 'black'
    },
    text: {
        color: 'white'
    }
});

module.exports = { DevoScreen }