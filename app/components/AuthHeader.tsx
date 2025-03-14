import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthHeader() {
    return (
        <SafeAreaView style={styles.safeArea} />
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#111827',
    },
}); 