import React from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#F9F9F9' },
                    headerTintColor: '#333'
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="details"
                    options={({ route }) => ({
                        title: route.params?.title || 'Detalhes',
                        headerBackTitle: 'Voltar'
                    })}
                />
            </Stack>
        </GestureHandlerRootView>
    );
}
