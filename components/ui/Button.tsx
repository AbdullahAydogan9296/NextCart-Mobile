import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator,
    View,
    Text,
} from 'react-native';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    loading?: boolean;
    variant?: 'primary' | 'outline';
    showSeparator?: boolean;
}

export function Button({
    title,
    loading,
    variant = 'primary',
    style,
    disabled,
    showSeparator,
    ...props
}: ButtonProps) {
    const tintColor = useThemeColor('tint', {});
    const disabledColor = useThemeColor('disabled', {});
    const backgroundColor = useThemeColor('background', {});
    const separatorColor = useThemeColor('separator', {});
    const separatorTextColor = useThemeColor('separatorText', {});
    const buttonTextColor = useThemeColor('buttonText', {});
    const textColor = useThemeColor('text', {});

    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor: variant === 'primary' ? textColor : backgroundColor,
                        borderColor: variant === 'primary' ? textColor : tintColor,
                    },
                    variant === 'outline' && styles.outlineButton,
                    disabled && {
                        backgroundColor: disabledColor,
                        borderColor: disabledColor,
                    },
                    style,
                ]}
                disabled={disabled || loading}
                {...props}>
                {loading ? (
                    <ActivityIndicator color={variant === 'outline' ? tintColor : buttonTextColor} />
                ) : (
                    <ThemedText
                        style={[
                            styles.text,
                            {
                                color: variant === 'outline' ? tintColor : buttonTextColor,
                            },
                        ]}>
                        {title}
                    </ThemedText>
                )}
            </TouchableOpacity>
            {showSeparator && (
                <View style={styles.separatorContainer}>
                    <View style={[styles.separator, { backgroundColor: separatorColor }]} />
                    <Text style={[styles.separatorText, { color: separatorTextColor }]}>OR</Text>
                    <View style={[styles.separator, { backgroundColor: separatorColor }]} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 48,
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outlineButton: {
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    separator: {
        flex: 1,
        height: 1,
    },
    separatorText: {
        marginHorizontal: 16,
        fontSize: 14,
    },
}); 