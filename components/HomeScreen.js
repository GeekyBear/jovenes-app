import { Button, Icon } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
const { StyleSheet, View, Text, Image } = require("react-native");

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/jdp-logo.jpeg')} />
            <Button size="lg"
                containerStyle={styles.containerStyle}
                buttonStyle={styles.buttonStyle}
                onPress={() =>
                    navigation.navigate('Crono')
                }>
                <Icon name="home" color="000" />
                <Text style={styles.buttonText}>Cronograma</Text>
            </Button>
            <Button size="lg"
                containerStyle={styles.containerStyle}
                buttonStyle={styles.buttonStyle}
                onPress={() =>
                    navigation.navigate('Devo')
                }>
                <Icon name="home" color="000" />
                <Text style={styles.buttonText}>Devocionales</Text>
            </Button>
            <Button size="lg"
                containerStyle={styles.containerStyle}
                buttonStyle={styles.buttonStyle}
                onPress={() =>
                    navigation.navigate('Cancionero')
                }>
                <Icon name="home" color="000" />
                <Text style={styles.buttonText}>Cancionero</Text>
            </Button>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerStyle: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
        backgroundColor: 'rgba(78, 116, 289, 1)'
    },
    buttonStyle: {
        backgroundColor: '#FFFAFA'
    },
    buttonText: {
        color: 'black',
        fontSize: 24
    },
    text: {
        color: 'white'
    },
    logo: {
        width: 200,
        height: 200
    }
});

module.exports = { HomeScreen }