import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { globalStyles } from '../src/globalStyles';

const Home = () => {
    const sections = [
        {
            title: 'Basics',
            data: [
                { label: 'Text', route: '/basics/text' },
                { label: 'View', route: '/basics/view' },
                { label: 'Images', route: '/basics/images' },
                { label: 'Pressable', route: '/basics/pressable' },
                { label: 'Text Input', route: '/basics/textInput' },
                { label: 'Scroll View', route: '/basics/scrollView' },
                { label: 'Flat List', route: '/basics/flatList' },
            ],
        },
        {
            title: 'Advanced',
            data: [
                { label: 'Modal', route: '/advanced/modal' },
                { label: 'Safe Area', route: '/advanced/safeArea' },
                { label: 'Activity Indicator', route: '/advanced/activityIndicator' },
                { label: 'Animations', route: '/advanced/animations' },
                { label: 'Keyboard Avoiding View', route: '/advanced/keyboardAvoidingView' },
            ],
        },
    ];

    return (
        <View style={styles.screen}>
            <Text style={styles.pageTitle}>React Native Reference</Text>

            <SectionList
                sections={sections}
                keyExtractor={(item) => item.route}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionTitle}>
                        {section.title}
                    </Text>
                )}
                renderItem={({ item }) => (
                    <Link href={item.route} style={styles.linkItem}>
                        {item.label}
                    </Link>
                )}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },

    pageTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 20,
        textAlign: 'center',
    },

    listContent: {
        paddingBottom: 40,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
        marginTop: 16,
        marginBottom: 10,
        textDecorationLine: 'underline',
    },

    linkItem: {
        backgroundColor: '#fff',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        textDecorationLine: 'none',
    },

    itemSeparator: {
        height: 10,
    },

    sectionSeparator: {
        height: 8,
    },
});