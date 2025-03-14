import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

export default function Privacy() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.content}>
                This is our privacy policy. We take your privacy seriously and are committed to protecting your personal information.
            </Text>
        </ScrollView>
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
        marginBottom: width * 0.05,
    },
    content: {
        fontSize: width * 0.04,
        color: '#374151',
        lineHeight: width * 0.06,
    },
}); 