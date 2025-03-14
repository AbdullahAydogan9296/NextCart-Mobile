import { View, Text, StyleSheet, Dimensions, Modal, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import ShopHeader from './components/ShopHeader';
import GeneralHeader from './components/GeneralHeader';
import AuthHeader from './components/AuthHeader';

const { width } = Dimensions.get('window');

interface DrawerItem {
    name: string;
    label: string;
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSignOut = () => {
        setModalVisible(false);
        // Çıkış yapma kodu buraya gelecek
    };

    const renderSection = (title: string, items: DrawerItem[]) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {items.map((item) => (
                <DrawerItem
                    key={item.name}
                    label={item.label}
                    onPress={() => props.navigation.navigate(item.name)}
                    labelStyle={styles.drawerLabel}
                />
            ))}
            <View style={styles.separator} /> {/* İnce çizgi */}
        </View>
    );

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Home"
                onPress={() => props.navigation.navigate('home')}
                labelStyle={styles.drawerLabel}
            />
            {renderSection('Categories', [
                { name: 'mens-fashion', label: "Men's Fashion" },
                { name: 'womens-fashion', label: "Women's Fashion" },
                { name: 'electronics', label: 'Electronics' },
                { name: 'cosmetics', label: 'Cosmetics' },
            ])}
            {renderSection('Account', [
                { name: 'profile', label: 'My Profile' },
                { name: 'orders', label: 'My Orders' },
                { name: 'favorites', label: 'My Favorites' },
                { name: 'signout', label: 'Sign Out' },
            ])}
            {renderSection('Legal & Support', [
                { name: 'privacy', label: 'Privacy Policy' },
                { name: 'terms', label: 'Terms of Service' },
                { name: 'faq', label: 'FAQ' },
            ])}
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <Text>Çıkış yapmak istediğinize emin misiniz?</Text>
                    <Button title="Hayır" onPress={() => setModalVisible(false)} color="green" />
                    <Button title="Evet" onPress={handleSignOut} color="red" />
                </View>
            </Modal>
        </DrawerContentScrollView>
    );
}

export default function RootLayout() {
    const isShopPage = (screenName: string) => {
        return ['home', 'shop', 'mens-fashion', 'womens-fashion', 'electronics', 'cosmetics'].includes(screenName);
    };

    const isAuthPage = (screenName: string) => {
        return ['login', 'register'].includes(screenName);
    };

    return (
        <Drawer
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            drawerStyle={{ backgroundColor: '#111827' }} // Arka plan rengi
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: '#111827',
                },
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: '#fff',
                },
                statusBarStyle: 'light',
                statusBarTranslucent: true,
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: '500',
                },
                header: () => {
                    if (isAuthPage(route.name)) {
                        return <AuthHeader />;
                    }
                    return isShopPage(route.name) ? <ShopHeader /> : <GeneralHeader />;
                },
                drawerEnabled: !isAuthPage(route.name),
                swipeEnabled: !isAuthPage(route.name),
            })}
            initialRouteName="login"
        >
            <Drawer.Screen name="home" options={{ title: 'Home' }} />
            <Drawer.Screen name="shop" options={{ title: 'Shop' }} />
            <Drawer.Screen name="mens-fashion" options={{ title: "Men's Fashion" }} />
            <Drawer.Screen name="womens-fashion" options={{ title: "Women's Fashion" }} />
            <Drawer.Screen name="electronics" options={{ title: 'Electronics' }} />
            <Drawer.Screen name="cosmetics" options={{ title: 'Cosmetics' }} />
            <Drawer.Screen name="profile" options={{ title: 'My Profile' }} />
            <Drawer.Screen name="orders" options={{ title: 'My Orders' }} />
            <Drawer.Screen name="favorites" options={{ title: 'My Favorites' }} />
            <Drawer.Screen name="signout" options={{ title: 'Sign Out' }} />
            <Drawer.Screen name="privacy" options={{ title: 'Privacy Policy' }} />
            <Drawer.Screen name="terms" options={{ title: 'Terms of Service' }} />
            <Drawer.Screen name="faq" options={{ title: 'FAQ' }} />
            <Drawer.Screen name="login" options={{ title: 'Login' }} />
            <Drawer.Screen name="register" options={{ title: 'Register' }} />
        </Drawer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: width * 0.05,
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: '#111827',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    section: {
        marginTop: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    drawerLabel: {
        fontSize: 14,
        color: '#000',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 8,
    },
}); 