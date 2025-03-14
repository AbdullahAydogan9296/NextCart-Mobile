import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Import SVG components
import MenuIcon from '../assets/images/menu.svg';
import ShippingIcon from '../assets/images/shipping.svg';
import DeliveryIcon from '../assets/images/delivery.svg';
import DeliveryWorldIcon from '../assets/images/delivery-world.svg';
import RefundIcon from '../assets/images/refund.svg';

const { width } = Dimensions.get('window');

export default function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <StatusBar style="light" />
                <Stack.Screen
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#111827',
                        },
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <TouchableOpacity style={styles.headerButton}>
                                <Image
                                    source={require('../assets/images/logo.png')}
                                    style={styles.logo}
                                />
                            </TouchableOpacity>
                        ),
                        headerTitle: () => (
                            <View style={styles.searchBox}>
                                <Image
                                    source={require('../assets/images/search.png')}
                                    style={styles.searchIcon}
                                />
                                <TextInput
                                    placeholder="Search in products..."
                                    placeholderTextColor="#6B7280"
                                    style={styles.searchInput}
                                />
                            </View>
                        ),
                        headerRight: () => (
                            <TouchableOpacity style={styles.headerButton}>
                                <MenuIcon width="24" height="24" color="#fff" />
                            </TouchableOpacity>
                        ),
                    }}
                />

                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <Text style={styles.heroPrice}>Starting from $49.99</Text>
                    <Text style={styles.heroTitle}>Exclusive collection{'\n'}for everyone</Text>
                    <TouchableOpacity style={styles.exploreButton}>
                        <Text style={styles.exploreButtonText}>Explore now</Text>
                    </TouchableOpacity>
                </View>

                {/* Features */}
                <View style={styles.features}>
                    <View style={styles.featureRow}>
                        <View style={styles.featureItem}>
                            <ShippingIcon width="24" height="24" style={styles.featureIcon} />
                            <Text style={styles.featureText}>Free shipping</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <DeliveryIcon width="24" height="24" style={styles.featureIcon} />
                            <Text style={styles.featureText}>Very easy to return</Text>
                        </View>
                    </View>
                    <View style={styles.featureRow}>
                        <View style={styles.featureItem}>
                            <DeliveryWorldIcon width="24" height="24" style={styles.featureIcon} />
                            <Text style={styles.featureText}>Worldwide delivery</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <RefundIcon width="24" height="24" style={styles.featureIcon} />
                            <Text style={styles.featureText}>Refunds policy</Text>
                        </View>
                    </View>
                </View>

                {/* Start Exploring Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Start exploring</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#E3F2FF' }]}>
                            <View style={styles.categoryContent}>
                                <View>
                                    <Text style={styles.categoryTitle}>For Men's</Text>
                                    <Text style={styles.categoryPrice}>Starting at $24</Text>
                                </View>
                                <View style={styles.shopNowContainer}>
                                    <Text style={styles.shopNowText}>SHOP NOW</Text>
                                    <Text style={styles.shopNowArrow}>→</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFE8F7' }]}>
                            <View style={styles.categoryContent}>
                                <View>
                                    <Text style={styles.categoryTitle}>Women's Fashion</Text>
                                    <Text style={styles.categoryPrice}>Starting at $24</Text>
                                </View>
                                <View style={styles.shopNowContainer}>
                                    <Text style={styles.shopNowText}>SHOP NOW</Text>
                                    <Text style={styles.shopNowArrow}>→</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#FFF3E5' }]}>
                            <View style={styles.categoryContent}>
                                <View>
                                    <Text style={styles.categoryTitle}>Electronics</Text>
                                    <Text style={styles.categoryPrice}>Starting at $24</Text>
                                </View>
                                <View style={styles.shopNowContainer}>
                                    <Text style={styles.shopNowText}>SHOP NOW</Text>
                                    <Text style={styles.shopNowArrow}>→</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#E5FFE8' }]}>
                            <View style={styles.categoryContent}>
                                <View>
                                    <Text style={styles.categoryTitle}>Cosmetics</Text>
                                    <Text style={styles.categoryPrice}>Starting at $24</Text>
                                </View>
                                <View style={styles.shopNowContainer}>
                                    <Text style={styles.shopNowText}>SHOP NOW</Text>
                                    <Text style={styles.shopNowArrow}>→</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* Recommendations Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recommendations</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.productCard}>
                            <View style={styles.productImageContainer}>
                                <View style={styles.productImagePlaceholder} />
                            </View>
                            <View style={styles.productInfo}>
                                <Text style={styles.productName}>Product Name</Text>
                                <Text style={styles.productPrice}>$XX.XX</Text>
                                <View style={styles.ratingContainer}>
                                    <Text style={styles.rating}>★ X.X</Text>
                                    <Text style={styles.ratingCount}>(XXX)</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* Best Sellers Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Best Sellers</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.productCard}>
                            <View style={styles.productImageContainer}>
                                <View style={styles.productImagePlaceholder} />
                            </View>
                            <View style={styles.productInfo}>
                                <Text style={styles.productName}>Product Name</Text>
                                <Text style={styles.productPrice}>$XX.XX</Text>
                                <View style={styles.ratingContainer}>
                                    <Text style={styles.rating}>★ X.X</Text>
                                    <Text style={styles.ratingCount}>(XXX)</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#111827',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerButton: {
        padding: 12,
    },
    logo: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 100,
        paddingHorizontal: 12,
        paddingVertical: 6,
        width: width * 0.6,
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
        tintColor: '#6B7280',
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#1B1E28',
        padding: 0,
    },
    heroSection: {
        padding: 20,
    },
    heroPrice: {
        fontSize: 16,
        color: '#666',
    },
    heroTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
    },
    exploreButton: {
        backgroundColor: '#111827',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: 150,
    },
    exploreButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    features: {
        padding: 20,
        gap: 20,
    },
    featureRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    featureItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 8,
    },
    featureIcon: {
        marginBottom: 8,
    },
    featureText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    categoryCard: {
        borderRadius: 15,
        width: width * 0.7,
        height: 120,
        marginRight: 15,
        overflow: 'hidden',
    },
    categoryContent: {
        padding: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 4,
    },
    categoryPrice: {
        fontSize: 16,
        color: '#666',
    },
    shopNowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    shopNowText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
        marginRight: 8,
    },
    shopNowArrow: {
        fontSize: 20,
        color: '#111827',
    },
    productCard: {
        width: 200,
        marginRight: 15,
    },
    productImageContainer: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 15,
        overflow: 'hidden',
    },
    productImagePlaceholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5',
    },
    productInfo: {
        marginTop: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: '500',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    rating: {
        color: '#FFD700',
        marginRight: 5,
    },
    ratingCount: {
        color: '#666',
        fontSize: 12,
    },
}); 