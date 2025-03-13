import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ROUTES } from '@/app/routes';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const backgroundColor = useThemeColor('background', {});
    const linkColor = useThemeColor('link', {});
    const tintColor = useThemeColor('tint', {});

    const handleLogin = () => {
        setLoading(true);
        // TODO: Implement login logic
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
                <ThemedText style={styles.title}>Login</ThemedText>
            </View>

            <View style={styles.form}>
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Link href={ROUTES.FORGOT_PASSWORD} style={styles.forgotPassword}>
                    <ThemedText style={[styles.forgotPasswordText, { color: linkColor }]}>
                        Forgot your password?
                    </ThemedText>
                </Link>
                <Button
                    title="LOGIN"
                    onPress={handleLogin}
                    loading={loading}
                    style={styles.loginButton}
                />
            </View>

            <View style={styles.footer}>
                <ThemedText>Don't have an account? </ThemedText>
                <Link href={ROUTES.REGISTER}>
                    <ThemedText style={[styles.registerText, { color: tintColor }]}>
                        Register
                    </ThemedText>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        marginTop: 68,
        marginBottom: 73,
    },
    title: {
        fontSize: 34,
        lineHeight: 34,
        fontWeight: '700',
    },
    form: {
        gap: 8,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 8,
        marginBottom: 32,
    },
    forgotPasswordText: {
        fontSize: 14,
    },
    loginButton: {
        marginTop: 32,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 'auto',
        paddingVertical: 16,
    },
    registerText: {
        fontSize: 14,
    },
}); 