import { StatusBar } from 'expo-status-bar';
import { DevoScreen } from './DevoScreen';
const { StyleSheet, View, Text, TouchableOpacity, Button } = require("react-native");

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Campa</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cronograma</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() =>
                    navigation.navigate('DevoScreen', { name: 'Jane' })
                }>
                <Text style={styles.buttonText}>Devocional</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cancionero</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
            {/* <Button
                title="Go to Jane's profile"

            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    }
});

module.exports = { HomeScreen }