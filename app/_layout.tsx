import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { View, TouchableOpacity, Image, TextInput, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import SVG icons
import MenuIcon from '../assets/images/menu.svg';

interface DrawerItem {
  name: string;
  label: string;
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
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
    </DrawerContentScrollView>
  );
}

function ShopHeader() {
  return (
    <SafeAreaView style={{ backgroundColor: '#111827' }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerButton}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{ width: 28, height: 28, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <View style={[styles.searchBox, { height: 40 }]}>
            <Image
              source={require('../assets/images/search.png')}
              style={[styles.searchIcon, { tintColor: '#6B7280' }]}
            />
            <TextInput
              placeholder="Search in products..."
              style={[styles.searchInput, { color: '#6B7280', fontSize: 14 }]}
              placeholderTextColor="#6B7280"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.headerButton}>
          <MenuIcon width="28" height="28" color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function Layout() {
  // Helper function to determine if a screen is a shop page
  const isShopPage = (screenName: string) => {
    return ['home', 'shop', 'mens-fashion', 'womens-fashion', 'electronics', 'cosmetics'].includes(screenName);
  };

  // Helper function to determine if a screen is an auth page
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
        // Auth pages (Login/Register) - Empty header
        ...(isAuthPage(route.name) && {
          headerTitle: '',
          headerLeft: () => null,
          headerRight: () => null,
          drawerItemStyle: { display: 'none' },
        }),
        // Shop pages - Logo, Search bar, and Hamburger menu
        ...(isShopPage(route.name) && {
          header: () => <ShopHeader />,
          headerStyle: {
            backgroundColor: '#111827',
            height: 0, // Remove default header height
          },
          headerShadowVisible: false,
        }),
        // Other pages - Logo and Hamburger menu
        ...(!isAuthPage(route.name) && !isShopPage(route.name) && {
          headerLeft: () => (
            <TouchableOpacity style={[styles.headerButton, { marginLeft: 16 }]}>
              <Image
                source={require('../assets/images/logo.png')}
                style={{ width: 28, height: 28, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => null,
          headerRight: () => (
            <TouchableOpacity style={[styles.headerButton, { marginRight: 16 }]}>
              <MenuIcon width="28" height="28" color="#fff" />
            </TouchableOpacity>
          ),
        }),
      })}
    >
      <Drawer.Screen
        name="home"
        options={{
          title: 'Home',
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="shop"
        options={{
          title: 'Shop',
          drawerLabel: 'Shop',
        }}
      />
      <Drawer.Screen
        name="mens-fashion"
        options={{
          title: "Men's Fashion",
          drawerLabel: "Men's Fashion",
        }}
      />
      <Drawer.Screen
        name="womens-fashion"
        options={{
          title: "Women's Fashion",
          drawerLabel: "Women's Fashion",
        }}
      />
      <Drawer.Screen
        name="electronics"
        options={{
          title: 'Electronics',
          drawerLabel: 'Electronics',
        }}
      />
      <Drawer.Screen
        name="cosmetics"
        options={{
          title: 'Cosmetics',
          drawerLabel: 'Cosmetics',
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: 'My Profile',
          drawerLabel: 'My Profile',
        }}
      />
      <Drawer.Screen
        name="orders"
        options={{
          title: 'My Orders',
          drawerLabel: 'My Orders',
        }}
      />
      <Drawer.Screen
        name="favorites"
        options={{
          title: 'My Favorites',
          drawerLabel: 'My Favorites',
        }}
      />
      <Drawer.Screen
        name="signout"
        options={{
          title: 'Sign Out',
          drawerLabel: 'Sign Out',
        }}
      />
      <Drawer.Screen
        name="privacy"
        options={{
          title: 'Privacy Policy',
          drawerLabel: 'Privacy Policy',
        }}
      />
      <Drawer.Screen
        name="terms"
        options={{
          title: 'Terms of Service',
          drawerLabel: 'Terms of Service',
        }}
      />
      <Drawer.Screen
        name="faq"
        options={{
          title: 'FAQ',
          drawerLabel: 'FAQ',
        }}
      />
      <Drawer.Screen
        name="login"
        options={{
          title: 'Login',
          drawerLabel: 'Login',
        }}
      />
      <Drawer.Screen
        name="register"
        options={{
          title: 'Register',
          drawerLabel: 'Register',
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    height: 56,
    paddingHorizontal: 8,
  },
  searchContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  headerButton: {
    padding: 8,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    padding: 0,
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
});
