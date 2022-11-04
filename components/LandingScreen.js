import { Button, Icon } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
// import countdown from '../utils/countdown';
const { StyleSheet, View, Text, Image } = require("react-native");

const LandingScreen = ({ navigation }) => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    function countdown() {
        // Set the date we're counting down to
        var countDownDate = new Date("Apr 7, 2024 09:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);
    };

    useEffect(() => countdown())

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/jdp-logo.jpeg')} />
            {days !== 0 ? <Text style={styles.title}>{days} DIAS PARA EL CAMPA</Text> : <Text style={styles.title}>Loading...</Text>}
            {days !== 0 ? <Text style={styles.title}>{hours}Hs {minutes}' {seconds}'' </Text> : null}
            <Button size="lg"
                containerStyle={styles.containerStyle}
                buttonStyle={styles.buttonStyle}
                onPress={() =>
                    navigation.navigate('Home')
                }>
                <Text style={styles.buttonText}>Entrar </Text>
                <Icon name='send' />
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
    },
    title: {
        color: 'white'
    }
});

module.exports = { LandingScreen }