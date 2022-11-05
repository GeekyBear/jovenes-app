const { View, Text, StyleSheet, FlatList } = require("react-native")

const CancioneroScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: 'Devin' },
                    { key: 'Dan' },
                    { key: 'Dominic' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'Joel' },
                    { key: 'John' },
                    { key: 'Jillian' },
                    { key: 'Jimmy' },
                    { key: 'Julie' },
                ]}
                renderItem={({ item }) => <Text onPress={() =>
                    navigation.navigate('Cancion')
                } style={styles.text}>{item.key}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
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
        padding: 10,
        fontSize: 18,
        height: 64,
        color: 'white'
    }
});

module.exports = { CancioneroScreen }