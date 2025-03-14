import React, { useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { View, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import ShopHeader from './components/ShopHeader';
import GeneralHeader from './components/GeneralHeader';
import AuthHeader from './components/AuthHeader';

type AppRoute =
  | '/home'
  | '/shop'
  | '/mens-fashion'
  | '/womens-fashion'
  | '/electronics'
  | '/cosmetics'
  | '/profile'
  | '/orders'
  | '/favorites'
  | '/privacy'
  | '/terms'
  | '/faq'
  | '/login'
  | '/register';

interface DrawerItem {
  name: string;
  label: string;
  route: AppRoute;
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    setModalVisible(false);
    router.push('/login' as AppRoute);
  };

  const renderSection = (title: string, items: DrawerItem[]) => (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: '#fff' }]}>{title}</Text>
      {items.map((item) => (
        <DrawerItem
          key={item.name}
          label={item.label}
          onPress={() => {
            if (item.label === 'Sign Out') {
              setModalVisible(true);
            } else {
              router.push(item.route);
            }
          }}
          labelStyle={[
            styles.drawerLabel,
            item.label === 'Sign Out' && { color: '#ff4444' }
          ]}
        />
      ))}
      <View style={styles.separator} />
    </View>
  );

  return (
    <DrawerContentScrollView {...props} style={styles.drawer}>
      <DrawerItem
        label="Home"
        onPress={() => router.push('/home' as AppRoute)}
        labelStyle={[styles.drawerLabel, { color: '#fff' }]}
      />

      {renderSection('Categories', [
        { name: 'mens-fashion', label: "Men's Fashion", route: '/mens-fashion' },
        { name: 'womens-fashion', label: "Women's Fashion", route: '/womens-fashion' },
        { name: 'electronics', label: 'Electronics', route: '/electronics' },
        { name: 'cosmetics', label: 'Cosmetics', route: '/cosmetics' },
      ])}

      {renderSection('Account', [
        { name: 'profile', label: 'My Profile', route: '/profile' },
        { name: 'orders', label: 'My Orders', route: '/orders' },
        { name: 'favorites', label: 'My Favorites', route: '/favorites' },
        { name: 'signout', label: 'Sign Out', route: '/login' },
      ])}

      {renderSection('Legal & Support', [
        { name: 'privacy', label: 'Privacy Policy', route: '/privacy' },
        { name: 'terms', label: 'Terms of Service', route: '/terms' },
        { name: 'faq', label: 'FAQ', route: '/faq' },
      ])}

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Çıkış Yap</Text>
            <Text style={styles.modalText}>Çıkış yapmak istediğinize emin misiniz?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.noButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.noButtonText}>Hayır</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.yesButton]}
                onPress={handleSignOut}
              >
                <Text style={styles.yesButtonText}>Evet</Text>
              </TouchableOpacity>
            </View>
          </View>
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
        drawerPosition: 'right',
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
      <Drawer.Screen name="privacy" options={{ title: 'Privacy Policy' }} />
      <Drawer.Screen name="terms" options={{ title: 'Terms of Service' }} />
      <Drawer.Screen name="faq" options={{ title: 'FAQ' }} />
      <Drawer.Screen name="login" options={{ title: 'Login' }} />
      <Drawer.Screen name="register" options={{ title: 'Register' }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#111827',
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 16,
    marginBottom: 8,
    color: '#fff',
  },
  drawerLabel: {
    fontSize: 14,
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  noButton: {
    backgroundColor: '#e8f5e9',
  },
  yesButton: {
    backgroundColor: '#ffebee',
  },
  noButtonText: {
    color: '#2e7d32',
    fontSize: 16,
    fontWeight: '600',
  },
  yesButtonText: {
    color: '#c62828',
    fontSize: 16,
    fontWeight: '600',
  },
});
