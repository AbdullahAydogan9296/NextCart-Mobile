import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import PaginationDots from './components/PaginationDots';
import {
    useFonts,
    Poppins_400Regular as PoppinsRegular,
    Poppins_500Medium as PoppinsMedium,
    Poppins_600SemiBold as PoppinsSemiBold,
    Poppins_700Bold as PoppinsBold,
} from '@expo-google-fonts/poppins';

// Import SVG components
import MenuIcon from '../assets/images/menu.svg';
import ShippingIcon from '../assets/images/shipping.svg';
import DeliveryIcon from '../assets/images/delivery.svg';
import DeliveryWorldIcon from '../assets/images/delivery-world.svg';
import RefundIcon from '../assets/images/refund.svg';

// Import types and API
import { Product } from './types/product';
import { api } from './services/api';

const { width } = Dimensions.get('window');

export default function Home() {
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
    const [bestSellers, setBestSellers] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentCategory, setCurrentCategory] = useState(0);
    const [currentRecommendation, setCurrentRecommendation] = useState(0);
    const [currentBestSeller, setCurrentBestSeller] = useState(0);

    const [fontsLoaded] = useFonts({
        PoppinsRegular,
        PoppinsMedium,
        PoppinsSemiBold,
        PoppinsBold,
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Fetch smartphones for recommendations
            const smartphones = await api.getProductsByCategory('smartphones');
            setRecommendedProducts(smartphones.products);

            // Fetch laptops for best sellers
            const laptops = await api.getProductsByCategory('laptops');
            setBestSellers(laptops.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#111827" />;
    }

    const categories = [
        { title: "For Men's", price: "Starting at $24", color: '#E3F2FF' },
        { title: "Women's Fashion", price: "Starting at $24", color: '#FFE8F7' },
        { title: "Electronics", price: "Starting at $24", color: '#FFF3E5' },
        { title: "Cosmetics", price: "Starting at $24", color: '#E5FFE8' },
    ];

    const handleScroll = (event: any, setter: (index: number) => void, itemWidth: number) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffset / itemWidth);
        setter(index);
    };

    const renderProductCard = (product: Product) => (
        <TouchableOpacity key={product.id} style={styles.productCard}>
            <View style={styles.productImageContainer}>
                <Image
                    source={{ uri: product.thumbnail }}
                    style={styles.productImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={1}>{product.title}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>★ {product.rating.toFixed(1)}</Text>
                    <Text style={styles.ratingCount}>({Math.floor(Math.random() * 500)})</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <StatusBar style="light" />
                <Stack.Screen
                    options={{
                        headerShown: true,
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
                            <ShippingIcon width={width * 0.06} height={width * 0.06} style={styles.featureIcon} />
                            <Text style={styles.featureText}>Free shipping</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <DeliveryIcon width={width * 0.06} height={width * 0.06} style={styles.featureIcon} />
                            <Text style={styles.featureText}>Very easy to return</Text>
                        </View>
                    </View>
                    <View style={styles.featureRow}>
                        <View style={styles.featureItem}>
                            <DeliveryWorldIcon width={width * 0.06} height={width * 0.06} style={styles.featureIcon} />
                            <Text style={styles.featureText}>Worldwide delivery</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <RefundIcon width={width * 0.06} height={width * 0.06} style={styles.featureIcon} />
                            <Text style={styles.featureText}>Refunds policy</Text>
                        </View>
                    </View>
                </View>

                {/* Start Exploring Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Start exploring</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={(e) => handleScroll(e, setCurrentCategory, width)}
                        scrollEventThrottle={16}
                        decelerationRate="fast"
                        snapToInterval={width}
                        contentContainerStyle={styles.categoryContainer}
                        style={styles.categoryScrollView}
                    >
                        {categories.map((category, index) => (
                            <View key={index} style={styles.categoryWrapper}>
                                <TouchableOpacity
                                    style={[
                                        styles.categoryCard,
                                        { backgroundColor: category.color }
                                    ]}
                                >
                                    <View style={styles.categoryContent}>
                                        <View>
                                            <Text style={styles.categoryTitle}>{category.title}</Text>
                                            <Text style={styles.categoryPrice}>{category.price}</Text>
                                        </View>
                                        <View style={styles.shopNowContainer}>
                                            <Text style={styles.shopNowText}>SHOP NOW</Text>
                                            <Text style={styles.shopNowArrow}>→</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                    <PaginationDots total={categories.length} current={currentCategory} />
                </View>

                {/* Recommendations Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recommendations</Text>
                    {loading ? (
                        <ActivityIndicator size="large" color="#111827" />
                    ) : (
                        <>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled
                                onScroll={(e) => handleScroll(e, setCurrentRecommendation, width)}
                                scrollEventThrottle={16}
                                decelerationRate="fast"
                                snapToInterval={width}
                                contentContainerStyle={styles.productContainer}
                                style={styles.categoryScrollView}
                            >
                                {recommendedProducts.map((product) => (
                                    <View key={product.id} style={styles.categoryWrapper}>
                                        {renderProductCard(product)}
                                    </View>
                                ))}
                            </ScrollView>
                            <PaginationDots
                                total={recommendedProducts.length}
                                current={currentRecommendation}
                            />
                        </>
                    )}
                </View>

                {/* Best Sellers Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Best Sellers</Text>
                    {loading ? (
                        <ActivityIndicator size="large" color="#111827" />
                    ) : (
                        <>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled
                                onScroll={(e) => handleScroll(e, setCurrentBestSeller, width)}
                                scrollEventThrottle={16}
                                decelerationRate="fast"
                                snapToInterval={width}
                                contentContainerStyle={styles.productContainer}
                                style={styles.categoryScrollView}
                            >
                                {bestSellers.map((product) => (
                                    <View key={product.id} style={styles.categoryWrapper}>
                                        {renderProductCard(product)}
                                    </View>
                                ))}
                            </ScrollView>
                            <PaginationDots
                                total={bestSellers.length}
                                current={currentBestSeller}
                            />
                        </>
                    )}
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
        padding: width * 0.03,
    },
    logo: {
        width: width * 0.08,
        height: width * 0.08,
        resizeMode: 'contain',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 100,
        paddingHorizontal: width * 0.03,
        paddingVertical: width * 0.015,
        width: width * 0.6,
    },
    searchIcon: {
        width: width * 0.04,
        height: width * 0.04,
        marginRight: width * 0.02,
        tintColor: '#6B7280',
    },
    searchInput: {
        flex: 1,
        fontSize: width * 0.035,
        color: '#1B1E28',
        padding: 0,
    },
    heroSection: {
        padding: width * 0.05,
    },
    heroPrice: {
        fontSize: width * 0.04,
        color: '#666',
        fontWeight: '400',
    },
    heroTitle: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        marginTop: width * 0.025,
        marginBottom: width * 0.05,
    },
    exploreButton: {
        backgroundColor: '#111827',
        padding: width * 0.0375,
        borderRadius: width * 0.0625,
        alignItems: 'center',
        width: width * 0.375,
    },
    exploreButtonText: {
        color: '#fff',
        fontSize: width * 0.04,
        fontWeight: '600',
    },
    features: {
        padding: width * 0.05,
        gap: width * 0.05,
    },
    featureRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    featureItem: {
        flex: 1,
        alignItems: 'center',
        padding: width * 0.04,
        marginHorizontal: width * 0.02,
    },
    featureIcon: {
        marginBottom: width * 0.02,
    },
    featureText: {
        fontSize: width * 0.03,
        color: '#666',
        textAlign: 'center',
        fontWeight: '400',
    },
    section: {
        padding: width * 0.05,
    },
    sectionTitle: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        marginBottom: width * 0.0375,
    },
    categoryScrollView: {
        overflow: 'visible',
    },
    categoryContainer: {
        alignItems: 'center',
    },
    categoryWrapper: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryCard: {
        borderRadius: width * 0.0375,
        height: width * 0.3,
        width: width * 0.85,
        overflow: 'hidden',
        paddingHorizontal: width * 0.05,
    },
    categoryContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: width * 0.05,
    },
    categoryTitle: {
        fontSize: width * 0.06,
        fontWeight: '600',
        color: '#111827',
        marginBottom: width * 0.02,
    },
    categoryPrice: {
        fontSize: width * 0.04,
        color: '#666',
        fontWeight: '400',
    },
    shopNowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shopNowText: {
        fontSize: width * 0.035,
        fontWeight: '600',
        color: '#111827',
        marginRight: width * 0.02,
    },
    shopNowArrow: {
        fontSize: width * 0.05,
        color: '#111827',
    },
    productContainer: {
        alignItems: 'center',
    },
    productCard: {
        width: width * 0.85,
        overflow: 'hidden',
    },
    productImageContainer: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: width * 0.0375,
        overflow: 'hidden',
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productInfo: {
        marginTop: width * 0.025,
    },
    productName: {
        fontSize: width * 0.04,
        fontWeight: '500',
    },
    productPrice: {
        fontSize: width * 0.045,
        fontWeight: 'bold',
        marginTop: width * 0.0125,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width * 0.0125,
    },
    rating: {
        color: '#FFD700',
        marginRight: width * 0.0125,
        fontSize: width * 0.04,
        fontWeight: '400',
    },
    ratingCount: {
        color: '#666',
        fontSize: width * 0.03,
        fontWeight: '400',
    },
}); 