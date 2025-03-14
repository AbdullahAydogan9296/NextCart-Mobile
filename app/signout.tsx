import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function SignOut() {
    const handleSignOut = () => {
        // Add sign out logic here
        router.replace('/');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Out</Text>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: width * 0.05,
    },
    button: {
        backgroundColor: '#111827',
        padding: width * 0.04,
        borderRadius: width * 0.02,
        width: width * 0.5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.04,
        fontWeight: '600',
    },
}); 