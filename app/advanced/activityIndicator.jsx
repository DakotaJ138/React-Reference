import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Link } from 'expo-router';

const ActivityIndicatorPage = () => {
    const [animating, setAnimating] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [fakeDataLoading, setFakeDataLoading] = useState(false);
    const [fakeData, setFakeData] = useState('No data loaded yet.');

    const handleButtonLoad = () => {
        setButtonLoading(true);

        setTimeout(() => {
            setButtonLoading(false);
            Alert.alert('Complete', 'The fake button action finished.');
        }, 1200);
    };

    const handleOverlayLoad = () => {
        setOverlayVisible(true);

        setTimeout(() => {
            setOverlayVisible(false);
        }, 1200);
    };

    const handleFakeDataLoad = () => {
        setFakeDataLoading(true);
        setFakeData('Loading...');

        setTimeout(() => {
            setFakeDataLoading(false);
            setFakeData('Data loaded successfully.');
        }, 1200);
    };

    return (
        <View style={styles.root}>
            <ScrollView contentContainerStyle={styles.screen}>
                <Link href="/" style={styles.backLink}>
                    Back Home
                </Link>

                <Text style={styles.pageTitle}>ActivityIndicator Reference</Text>

                <Text style={styles.introText}>
                    ActivityIndicator is used to show that something is loading,
                    processing, saving, fetching, submitting, or waiting. It is usually
                    paired with state so the spinner appears only while work is happening.
                </Text>

                <ExampleCard title="1. Basic ActivityIndicator">
                    <Text style={styles.explanationText}>
                        The simplest version uses the default spinner.
                    </Text>

                    <View style={styles.centerExample}>
                        <ActivityIndicator />
                    </View>
                </ExampleCard>

                <ExampleCard title="2. size small">
                    <Text style={styles.explanationText}>
                        size small is the default spinner size.
                    </Text>

                    <View style={styles.centerExample}>
                        <ActivityIndicator size="small" />
                    </View>
                </ExampleCard>

                <ExampleCard title="3. size large">
                    <Text style={styles.explanationText}>
                        size large makes the spinner bigger.
                    </Text>

                    <View style={styles.centerExample}>
                        <ActivityIndicator size="large" />
                    </View>
                </ExampleCard>

                <ExampleCard title="4. Numeric size Android">
                    <Text style={styles.explanationText}>
                        Numeric size values are Android specific. On iOS, use small or large.
                    </Text>

                    <View style={styles.centerExample}>
                        <ActivityIndicator size={48} />
                    </View>

                    <Text style={styles.codeText}>
                        {'<ActivityIndicator size={48} />'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="5. color">
                    <Text style={styles.explanationText}>
                        color changes the spinner color.
                    </Text>

                    <View style={styles.rowExample}>
                        <ActivityIndicator size="large" color="#007AFF" />
                        <ActivityIndicator size="large" color="#D32F2F" />
                        <ActivityIndicator size="large" color="#2E7D32" />
                    </View>
                </ExampleCard>

                <ExampleCard title="6. animating">
                    <Text style={styles.explanationText}>
                        animating controls whether the spinner is active.
                    </Text>

                    <View style={styles.centerExample}>
                        <ActivityIndicator
                            size="large"
                            color="#007AFF"
                            animating={animating}
                        />
                    </View>

                    <Pressable
                        style={styles.button}
                        onPress={() => setAnimating(!animating)}
                    >
                        <Text style={styles.buttonText}>
                            {animating ? 'Stop Animating' : 'Start Animating'}
                        </Text>
                    </Pressable>
                </ExampleCard>

                <ExampleCard title="7. hidesWhenStopped iOS">
                    <Text style={styles.explanationText}>
                        hidesWhenStopped is iOS specific. It controls whether the spinner
                        hides when animating is false.
                    </Text>

                    <View style={styles.centerExample}>
                        <ActivityIndicator
                            size="large"
                            color="#007AFF"
                            animating={false}
                            hidesWhenStopped={false}
                        />
                    </View>

                    <Text style={styles.codeText}>
                        {'hidesWhenStopped={false}'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="8. Full screen loading pattern">
                    <Text style={styles.explanationText}>
                        Use this pattern when the entire screen is waiting for data.
                    </Text>

                    <View style={styles.fullScreenPreview}>
                        <ActivityIndicator size="large" color="#007AFF" />
                        <Text style={styles.loadingText}>Loading screen...</Text>
                    </View>
                </ExampleCard>

                <ExampleCard title="9. Inline loading pattern">
                    <Text style={styles.explanationText}>
                        Use inline loading when only one small area is waiting.
                    </Text>

                    <View style={styles.inlineLoadingRow}>
                        <ActivityIndicator size="small" color="#007AFF" />
                        <Text style={styles.statusText}>Checking availability...</Text>
                    </View>
                </ExampleCard>

                <ExampleCard title="10. Loading button pattern">
                    <Text style={styles.explanationText}>
                        This pattern disables a button while the action is running.
                    </Text>

                    <Pressable
                        disabled={buttonLoading}
                        style={[
                            styles.button,
                            buttonLoading && styles.disabledButton,
                        ]}
                        onPress={handleButtonLoad}
                    >
                        {buttonLoading ? (
                            <View style={styles.buttonContentRow}>
                                <ActivityIndicator size="small" color="#fff" />
                                <Text style={styles.buttonText}>Saving...</Text>
                            </View>
                        ) : (
                            <Text style={styles.buttonText}>Save</Text>
                        )}
                    </Pressable>
                </ExampleCard>

                <ExampleCard title="11. Conditional rendering">
                    <Text style={styles.explanationText}>
                        This is usually better than leaving an inactive spinner in the layout.
                    </Text>

                    <Pressable style={styles.button} onPress={handleFakeDataLoad}>
                        <Text style={styles.buttonText}>Load Fake Data</Text>
                    </Pressable>

                    <View style={styles.dataBox}>
                        {fakeDataLoading ? (
                            <ActivityIndicator size="large" color="#007AFF" />
                        ) : (
                            <Text style={styles.statusText}>{fakeData}</Text>
                        )}
                    </View>

                    <Text style={styles.codeText}>
                        {'{isLoading ? <ActivityIndicator /> : <Text>Loaded</Text>}'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="12. Loading card pattern">
                    <Text style={styles.explanationText}>
                        A spinner can sit inside a card while one section is loading.
                    </Text>

                    <View style={styles.loadingCard}>
                        <ActivityIndicator size="large" color="#007AFF" />
                        <Text style={styles.loadingCardTitle}>Fetching profile</Text>
                        <Text style={styles.loadingCardText}>
                            This card is waiting for content.
                        </Text>
                    </View>
                </ExampleCard>

                <ExampleCard title="13. List footer loading pattern">
                    <Text style={styles.explanationText}>
                        This is commonly used at the bottom of FlatList when loading more items.
                    </Text>

                    <View style={styles.listPreview}>
                        <View style={styles.listItem}>
                            <Text>Item 1</Text>
                        </View>

                        <View style={styles.listItem}>
                            <Text>Item 2</Text>
                        </View>

                        <View style={styles.listFooter}>
                            <ActivityIndicator size="small" color="#007AFF" />
                            <Text style={styles.statusText}>Loading more...</Text>
                        </View>
                    </View>
                </ExampleCard>

                <ExampleCard title="14. Overlay loading pattern">
                    <Text style={styles.explanationText}>
                        Use an overlay when work blocks the current screen temporarily.
                    </Text>

                    <Pressable style={styles.button} onPress={handleOverlayLoad}>
                        <Text style={styles.buttonText}>Show Overlay Loader</Text>
                    </Pressable>
                </ExampleCard>

                <ExampleCard title="15. ActivityIndicator with text">
                    <Text style={styles.explanationText}>
                        A spinner should usually include nearby text when the loading
                        reason is not obvious.
                    </Text>

                    <View style={styles.centerExample}>
                        <ActivityIndicator size="large" color="#007AFF" />
                        <Text style={styles.loadingText}>Submitting request...</Text>
                    </View>
                </ExampleCard>

                <ExampleCard title="16. ActivityIndicator inside a centered View">
                    <Text style={styles.explanationText}>
                        The spinner itself does not center the layout. Center it with a View.
                    </Text>

                    <View style={styles.centeredLoaderBox}>
                        <ActivityIndicator size="large" color="#007AFF" />
                    </View>
                </ExampleCard>

                <ExampleCard title="17. Platform note">
                    <Text style={styles.explanationText}>
                        Current platform: {Platform.OS}
                    </Text>

                    <Text style={styles.explanationText}>
                        Some ActivityIndicator behavior is platform specific. Numeric
                        size is Android specific. hidesWhenStopped is iOS specific.
                    </Text>
                </ExampleCard>

                <ExampleCard title="18. Common mistake, spinner without state">
                    <Text style={styles.warningText}>
                        A spinner should usually be controlled by loading state. Otherwise,
                        it may spin forever.
                    </Text>

                    <Text style={styles.codeText}>
                        {'const [isLoading, setIsLoading] = useState(false);'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="19. Common mistake, not disabling submit">
                    <Text style={styles.warningText}>
                        When a button is loading, disable it so the user cannot submit
                        the same action multiple times.
                    </Text>

                    <Text style={styles.codeText}>
                        {'<Pressable disabled={isLoading}>...</Pressable>'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="20. Common mistake, hiding with animating only">
                    <Text style={styles.warningText}>
                        animating false can stop the spinner, but the component may still
                        take up layout space. Conditional rendering is often cleaner.
                    </Text>

                    <Text style={styles.codeText}>
                        Better: {'{isLoading && <ActivityIndicator />}'}
                    </Text>
                </ExampleCard>
            </ScrollView>

            {overlayVisible && (
                <View style={styles.overlay}>
                    <View style={styles.overlayCard}>
                        <ActivityIndicator size="large" color="#007AFF" />
                        <Text style={styles.overlayText}>Processing...</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

const TimedLoadingExample = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.dataBox}>
            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" />
            ) : (
                <Text style={styles.statusText}>Timed loading complete.</Text>
            )}
        </View>
    );
};

const ExampleCard = ({ title, children }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={styles.exampleArea}>{children}</View>
        </View>
    );
};

export default ActivityIndicatorPage;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

    screen: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },

    backLink: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        textDecorationLine: 'underline',
    },

    pageTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 12,
    },

    introText: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
        marginBottom: 20,
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 12,
    },

    exampleArea: {
        gap: 10,
    },

    explanationText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },

    centerExample: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 16,
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    rowExample: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
        padding: 16,
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    fullScreenPreview: {
        minHeight: 220,
        backgroundColor: '#eee',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },

    loadingText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },

    inlineLoadingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#eee',
        padding: 12,
        borderRadius: 8,
    },

    statusText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },

    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    disabledButton: {
        backgroundColor: '#8bbff5',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonContentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    dataBox: {
        minHeight: 100,
        backgroundColor: '#eee',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },

    loadingCard: {
        backgroundColor: '#f8fbff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#cfe4ff',
        padding: 20,
        alignItems: 'center',
        gap: 10,
    },

    loadingCardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },

    loadingCardText: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        lineHeight: 20,
    },

    listPreview: {
        backgroundColor: '#eee',
        borderRadius: 8,
        padding: 10,
        gap: 8,
    },

    listItem: {
        backgroundColor: '#d9ecff',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    listFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 12,
    },

    centeredLoaderBox: {
        height: 160,
        backgroundColor: '#eee',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    overlayCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        gap: 12,
        minWidth: 180,
    },

    overlayText: {
        fontSize: 16,
        color: '#222',
        fontWeight: 'bold',
    },

    warningText: {
        fontSize: 16,
        color: '#D32F2F',
        fontWeight: 'bold',
        lineHeight: 24,
    },

    codeText: {
        fontSize: 14,
        color: '#333',
        backgroundColor: '#eee',
        padding: 8,
        borderRadius: 6,
        fontFamily: 'monospace',
        lineHeight: 20,
    },
});