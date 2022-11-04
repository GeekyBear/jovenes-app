
const { View, Text, TouchableOpacity, StyleSheet } = require("react-native")

const CronoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={() =>
                    navigation.navigate('Crono')
                }>
                <Text style={styles.buttonText}>Dia 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() =>
                    navigation.navigate('Crono')
                }>
                <Text style={styles.buttonText}>Dia 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() =>
                    navigation.navigate('Crono')
                }>
                <Text style={styles.buttonText}>Dia 3</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 8
    },
    button: {
        backgroundColor: '#ddd',
        paddingVertical: 14,
        paddingHorizontal: 18,
        margin: 14,
        width: '100%'
    },
    buttonText: {
        color: 'black'
    }
});

module.exports = { CronoScreen }