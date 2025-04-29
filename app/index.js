import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from '../components/Carousel';

const carouselData = [
    {
        id: '1',
        title: 'Destinos Exóticos',
        subtitle: 'Descubra lugares incríveis para suas próximas férias',
        image: require('../assets/images/slide1.jpg')
    },
    {
        id: '2',
        title: 'Experiências Únicas',
        subtitle: 'Aventuras que você nunca esquecerá',
        image: require('../assets/images/slide2.jpg')
    },
    {
        id: '3',
        title: 'Cultura Local',
        subtitle: 'Mergulhe nas tradições e costumes locais',
        image: require('../assets/images/slide3.jpg')
    }
];

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Descubra</Text>
                    <Text style={styles.headerSubtitle}>
                        Encontre seu próximo destino
                    </Text>
                </View>

                <Carousel data={carouselData} autoplayDelay={4000} />

                <Text style={styles.sectionTitle}>Destaques da Semana</Text>
                <View style={styles.content}>
                    <Text style={styles.paragraph}>Conteúdo Recomendado</Text>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
                        eget euismod nisl nisl eget nisl.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9F9F9' },
    header: { padding: 20, paddingTop: 10 },
    headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#333' },
    headerSubtitle: { fontSize: 16, color: '#666', marginTop: 5 },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 15
    },
    content: { paddingHorizontal: 20 },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: '#444',
        marginBottom: 10
    }
});
