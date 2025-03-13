import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ROUTES } from '@/app/routes';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const backgroundColor = useThemeColor('background', {});
    const tintColor = useThemeColor('tint', {});

    const handleRegister = () => {
        setLoading(true);
        // TODO: Implement register logic
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
                <ThemedText style={styles.title}>Sign up</ThemedText>
            </View>

            <View style={styles.form}>
                <Input
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                />
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
                <Button
                    title="SIGN UP"
                    onPress={handleRegister}
                    loading={loading}
                    style={styles.registerButton}
                />
            </View>

            <View style={styles.footer}>
                <ThemedText>Already have an account? </ThemedText>
                <Link href={ROUTES.LOGIN}>
                    <ThemedText style={[styles.loginText, { color: tintColor }]}>
                        Login
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
    registerButton: {
        marginTop: 32,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 'auto',
        paddingVertical: 16,
    },
    loginText: {
        fontSize: 14,
    },
}); 