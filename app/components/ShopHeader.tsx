import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MenuIcon from '../../assets/images/menu.svg';

export default function ShopHeader() {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={{ backgroundColor: '#111827' }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={styles.headerButton}
                    onPress={() => navigation.navigate('home')}
                >
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={{ width: 28, height: 28, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>

                <View style={styles.searchContainer}>
                    <View style={[styles.searchBox, { height: 40 }]}>
                        <Image
                            source={require('../../assets/images/search.png')}
                            style={[styles.searchIcon, { tintColor: '#6B7280' }]}
                        />
                        <TextInput
                            placeholder="Search in products..."
                            style={[styles.searchInput, { color: '#6B7280', fontSize: 14 }]}
                            placeholderTextColor="#6B7280"
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.headerButton}
                    onPress={() => navigation.openDrawer()}
                >
                    <MenuIcon width="28" height="28" color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
}); 