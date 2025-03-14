import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Shop() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shop</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: width * 0.05,
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: '#111827',
    },
}); 