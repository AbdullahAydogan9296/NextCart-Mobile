import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from './routes';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const backgroundColor = useThemeColor('background', {});
    const tintColor = useThemeColor('tint', {});
    const { login } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Hata', 'Lütfen email ve şifrenizi girin.');
            return;
        }

        setLoading(true);
        const result = await login(email, password);
        setLoading(false);

        if (result.success) {
            router.replace(ROUTES.HOME);
        } else {
            Alert.alert('Hata', 'Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.');
        }
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.content}>
                <ThemedText style={styles.title}>Login</ThemedText>

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
                    <Button
                        title="LOGIN"
                        onPress={handleLogin}
                        loading={loading}
                        style={styles.loginButton}
                        showSeparator
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 34,
        lineHeight: 34,
        fontWeight: '700',
        marginBottom: 32,
        textAlign: 'center',
    },
    form: {
        gap: 16,
    },
    loginButton: {
        marginTop: 32,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
    },
    registerText: {
        fontSize: 14,
        fontWeight: '500',
    },
}); 