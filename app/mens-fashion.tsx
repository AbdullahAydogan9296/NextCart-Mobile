import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function MensFashion() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Men's Fashion</Text>
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