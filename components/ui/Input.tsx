import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
    const inputBorder = useThemeColor('inputBorder', {});
    const inputBackground = useThemeColor('inputBackground', {});
    const placeholder = useThemeColor('placeholder', {});
    const errorColor = useThemeColor('error', {});

    return (
        <View style={styles.container}>
            {label && (
                <ThemedText style={styles.label}>
                    {label}
                </ThemedText>
            )}
            <TextInput
                style={[
                    styles.input,
                    {
                        borderColor: error ? errorColor : inputBorder,
                        backgroundColor: inputBackground,
                    },
                    style
                ]}
                placeholderTextColor={placeholder}
                {...props}
            />
            {error && (
                <ThemedText style={[styles.error, { color: errorColor }]}>
                    {error}
                </ThemedText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 4,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 14,
    },
    error: {
        fontSize: 12,
        marginTop: 4,
    },
}); 