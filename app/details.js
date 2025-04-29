import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Details() {
    const { id, title } = useLocalSearchParams();
    const router = useRouter();

    const getImageSource = () => {
        switch (id) {
            case '1':
                return require('../assets/images/slide1.jpg');
            case '2':
                return require('../assets/images/slide2.jpg');
            case '3':
                return require('../assets/images/slide3.jpg');
            default:
                return require('../assets/images/slide1.jpg');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <ScrollView>
                <Image
                    source={getImageSource()}
                    style={styles.image}
                    resizeMode="cover"
                />
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.backButtonText}>← Voltar</Text>
                </TouchableOpacity>

                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>Detalhes do item {id}</Text>

                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
                        eget euismod nisl nisl eget nisl.
                    </Text>
                    <Text style={styles.description}>
                        Nullam euismod, nisl eget ultricies tincidunt, nisl nisl aliquam
                        nisl, eget euismod nisl nisl eget nisl. Nullam euismod, nisl eget
                        ultricies tincidunt, nisl nisl aliquam nisl, eget euismod nisl
                        nisl eget nisl.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF' },
    image: { width: '100%', height: 250 },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 20,
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20
    },
    backButtonText: { fontWeight: 'bold', color: '#333' },
    content: { padding: 20 },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10
    },
    subtitle: { fontSize: 18, color: '#666', marginBottom: 20 },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#444',
        marginBottom: 15
    }
});
