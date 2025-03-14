import React, { useState } from 'react';
import { StyleSheet, View, Alert, Pressable } from 'react-native';
import { Link, router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from './routes';

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [loading, setLoading] = useState(false);

    const backgroundColor = useThemeColor('background', {});
    const tintColor = useThemeColor('tint', {});
    const { register } = useAuth();

    const handleRegister = async () => {
        if (!email || !password || !passwordAgain) {
            Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Hata', 'Şifre en az 6 karakter olmalıdır.');
            return;
        }

        if (password !== passwordAgain) {
            Alert.alert('Hata', 'Şifreler eşleşmiyor.');
            return;
        }

        if (!email.includes('@')) {
            Alert.alert('Hata', 'Geçerli bir email adresi girin.');
            return;
        }

        setLoading(true);
        const result = await register(email, password);
        setLoading(false);

        if (result.success) {
            router.replace(ROUTES.HOME);
        } else {
            Alert.alert('Hata', 'Kayıt olunamadı. ' + (result.error || 'Lütfen bilgilerinizi kontrol edin.'));
        }
    };

    const handleLoginPress = () => {
        router.push({
            pathname: ROUTES.LOGIN,
            params: {
                animation: 'slide_from_left'
            }
        });
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.content}>
                <ThemedText style={styles.title}>Register</ThemedText>

                <View style={styles.form}>
                    <Input
                        label="Email"
                        placeholder="example@example.com"
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
                    <Input
                        label="Password (Again)"
                        placeholder="Enter your password again"
                        value={passwordAgain}
                        onChangeText={setPasswordAgain}
                        secureTextEntry
                    />
                    <Button
                        title="CONTINUE"
                        onPress={handleRegister}
                        loading={loading}
                        style={styles.registerButton}
                        showSeparator
                    />
                </View>

                <View style={styles.footer}>
                    <ThemedText>Already a member? </ThemedText>
                    <Pressable onPress={handleLoginPress}>
                        <ThemedText style={[styles.loginText, { color: tintColor }]}>
                            Login
                        </ThemedText>
                    </Pressable>
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
    registerButton: {
        marginTop: 32,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
    },
    loginText: {
        fontSize: 14,
        fontWeight: '500',
    },
}); 