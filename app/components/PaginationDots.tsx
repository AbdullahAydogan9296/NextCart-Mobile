import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PaginationDotsProps {
    total: number;
    current: number;
}

export default function PaginationDots({ total, current }: PaginationDotsProps) {
    return (
        <View style={styles.container}>
            {Array.from({ length: total }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.dot,
                        index === current ? styles.activeDot : styles.inactiveDot,
                    ]}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#111827',
    },
    inactiveDot: {
        backgroundColor: '#D1D5DB',
    },
}); 