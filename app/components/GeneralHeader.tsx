import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MenuIcon from '../../assets/images/menu.svg';

export default function GeneralHeader() {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={{ backgroundColor: '#111827' }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={[styles.headerButton, { marginLeft: 16 }]}
                    onPress={() => navigation.navigate('home')}
                >
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={{ width: 28, height: 28, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.headerButton, { marginRight: 16 }]}
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
        justifyContent: 'space-between',
        backgroundColor: '#111827',
        height: 56,
        paddingHorizontal: 8,
    },
    headerButton: {
        padding: 8,
    },
}); 