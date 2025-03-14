import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import GeneralHeader from './components/GeneralHeader';

export default function About() {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    header: () => <GeneralHeader />,
                }}
            />
            <Text style={styles.text}>About Us Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: '#111827',
    },
}); 