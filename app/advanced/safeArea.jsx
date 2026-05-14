import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

const SafeAreaPage = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaContent />
        </SafeAreaProvider>
    );
};

const SafeAreaContent = () => {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView
            contentContainerStyle={[
                styles.screen,
                {
                    paddingTop: insets.top + 20,
                    paddingBottom: insets.bottom + 20,
                    paddingLeft: Math.max(insets.left, 20),
                    paddingRight: Math.max(insets.right, 20),
                },
            ]}
        >
            <Link href="/" style={styles.backLink}>
                Back Home
            </Link>

            <Text style={styles.pageTitle}>Safe Area Reference</Text>

            <Text style={styles.introText}>
                Safe areas keep content away from notches, status bars, rounded screen
                corners, navigation bars, and home indicator areas. This page uses
                react-native-safe-area-context, not React Native's deprecated SafeAreaView.
            </Text>

            <ExampleCard title="1. Current safe area inset values">
                <Text style={styles.explanationText}>
                    useSafeAreaInsets gives you the safe area spacing for each side of
                    the screen.
                </Text>

                <View style={styles.insetsGrid}>
                    <InsetBox label="Top" value={insets.top} />
                    <InsetBox label="Right" value={insets.right} />
                    <InsetBox label="Bottom" value={insets.bottom} />
                    <InsetBox label="Left" value={insets.left} />
                </View>
            </ExampleCard>

            <ExampleCard title="2. SafeAreaView from safe-area-context">
                <Text style={styles.explanationText}>
                    This SafeAreaView comes from react-native-safe-area-context. It is
                    different from the deprecated React Native SafeAreaView.
                </Text>

                <SafeAreaView style={styles.safeAreaDemoBox}>
                    <Text style={styles.demoText}>Content inside SafeAreaView</Text>
                </SafeAreaView>

                <Text style={styles.codeText}>
                    {"import { SafeAreaView } from 'react-native-safe-area-context';"}
                </Text>
            </ExampleCard>

            <ExampleCard title="3. Manual padding with useSafeAreaInsets">
                <Text style={styles.explanationText}>
                    The hook gives more control because you choose exactly which sides
                    receive safe area padding.
                </Text>

                <View
                    style={[
                        styles.manualInsetBox,
                        {
                            paddingTop: insets.top,
                            paddingBottom: insets.bottom,
                            paddingLeft: insets.left,
                            paddingRight: insets.right,
                        },
                    ]}
                >
                    <Text style={styles.demoText}>Manual inset padding</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="4. Apply only the top inset">
                <Text style={styles.explanationText}>
                    This is useful for custom headers that need to avoid the status bar.
                </Text>

                <View style={[styles.fakePhoneFrame, { paddingTop: insets.top }]}>
                    <View style={styles.fakeHeader}>
                        <Text style={styles.fakeHeaderText}>Custom Header</Text>
                    </View>

                    <View style={styles.fakeContent}>
                        <Text>Screen content</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="5. Apply only the bottom inset">
                <Text style={styles.explanationText}>
                    This is useful for bottom buttons, tab bars, and floating action areas.
                </Text>

                <View style={styles.fakePhoneFrame}>
                    <View style={styles.fakeContent}>
                        <Text>Content area</Text>
                    </View>

                    <View style={[styles.bottomActionBar, { paddingBottom: insets.bottom }]}>
                        <Text style={styles.bottomActionText}>Bottom action area</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="6. SafeAreaView edges prop">
                <Text style={styles.explanationText}>
                    edges controls which sides receive safe area padding.
                </Text>

                <SafeAreaView edges={['top']} style={styles.edgesBox}>
                    <Text style={styles.demoText}>Only top edge applied</Text>
                </SafeAreaView>

                <SafeAreaView edges={['bottom']} style={styles.edgesBox}>
                    <Text style={styles.demoText}>Only bottom edge applied</Text>
                </SafeAreaView>

                <Text style={styles.codeText}>
                    {"<SafeAreaView edges={['top']}>...</SafeAreaView>"}
                </Text>
            </ExampleCard>

            <ExampleCard title="7. SafeAreaView mode padding">
                <Text style={styles.explanationText}>
                    mode padding applies the safe area values as padding.
                </Text>

                <SafeAreaView mode="padding" style={styles.modeBox}>
                    <Text style={styles.demoText}>mode="padding"</Text>
                </SafeAreaView>
            </ExampleCard>

            <ExampleCard title="8. SafeAreaView mode margin">
                <Text style={styles.explanationText}>
                    mode margin applies the safe area values as margin instead of padding.
                </Text>

                <SafeAreaView mode="margin" style={styles.modeBox}>
                    <Text style={styles.demoText}>mode="margin"</Text>
                </SafeAreaView>
            </ExampleCard>

            <ExampleCard title="9. Custom screen wrapper pattern">
                <Text style={styles.explanationText}>
                    A reusable screen wrapper keeps safe area logic consistent across pages.
                </Text>

                <Text style={styles.codeText}>
                    {'const Screen = ({ children }) => {'}
                </Text>

                <Text style={styles.codeText}>
                    {'  const insets = useSafeAreaInsets();'}
                </Text>

                <Text style={styles.codeText}>
                    {'  return <View style={{ flex: 1, paddingTop: insets.top }}>{children}</View>;'}
                </Text>

                <Text style={styles.codeText}>
                    {'};'}
                </Text>
            </ExampleCard>

            <ExampleCard title="10. ScrollView safe area pattern">
                <Text style={styles.explanationText}>
                    For scrollable screens, apply safe area spacing to the scroll content
                    so the first and last items do not hide behind system UI.
                </Text>

                <View style={styles.miniScrollPreview}>
                    <Text style={styles.codeText}>
                        {'<ScrollView contentContainerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom }} />'}
                    </Text>
                </View>
            </ExampleCard>

            <ExampleCard title="11. FlatList safe area pattern">
                <Text style={styles.explanationText}>
                    For FlatList, use contentContainerStyle for top and bottom spacing.
                </Text>

                <Text style={styles.codeText}>
                    {'<FlatList contentContainerStyle={{ paddingBottom: insets.bottom + 20 }} />'}
                </Text>
            </ExampleCard>

            <ExampleCard title="12. Floating button pattern">
                <Text style={styles.explanationText}>
                    Absolute positioned buttons should account for the bottom and side insets.
                </Text>

                <View style={styles.floatingPreview}>
                    <View
                        style={[
                            styles.fakeFloatingButton,
                            {
                                bottom: insets.bottom + 12,
                                right: Math.max(insets.right, 12),
                            },
                        ]}
                    >
                        <Text style={styles.fakeFloatingButtonText}>+</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="13. Platform specific safe area note">
                <Text style={styles.explanationText}>
                    Current platform: {Platform.OS}
                </Text>

                <Text style={styles.explanationText}>
                    Safe area behavior can look different across Android, iOS, landscape,
                    and web. Test on each platform you support.
                </Text>
            </ExampleCard>

            <ExampleCard title="14. SafeAreaProvider">
                <Text style={styles.explanationText}>
                    SafeAreaProvider should usually be placed near the root of the app.
                    This page includes it so the demo is self contained.
                </Text>

                <Text style={styles.codeText}>
                    {"import { SafeAreaProvider } from 'react-native-safe-area-context';"}
                </Text>

                <Text style={styles.codeText}>
                    {'<SafeAreaProvider><App /></SafeAreaProvider>'}
                </Text>
            </ExampleCard>

            <ExampleCard title="15. Common mistake, importing the wrong SafeAreaView">
                <Text style={styles.warningText}>
                    Do not import SafeAreaView from react-native for new work.
                </Text>

                <Text style={styles.codeText}>
                    Wrong: {"import { SafeAreaView } from 'react-native';"}
                </Text>

                <Text style={styles.codeText}>
                    Correct: {"import { SafeAreaView } from 'react-native-safe-area-context';"}
                </Text>
            </ExampleCard>

            <ExampleCard title="16. Common mistake, wrapping the whole app UI blindly">
                <Text style={styles.warningText}>
                    Do not blindly wrap every component in SafeAreaView. Apply safe area
                    spacing where the screen actually needs it.
                </Text>
            </ExampleCard>

            <ExampleCard title="17. Common mistake, double padding">
                <Text style={styles.warningText}>
                    Be careful not to apply SafeAreaView padding and manual inset padding
                    to the same side at the same time.
                </Text>

                <Text style={styles.codeText}>
                    Avoid: SafeAreaView plus paddingTop: insets.top on the same container.
                </Text>
            </ExampleCard>

            <ExampleCard title="18. Common mistake, ignoring bottom inset">
                <Text style={styles.warningText}>
                    Bottom buttons can be covered by the home indicator or Android
                    navigation area if you do not account for the bottom inset.
                </Text>
            </ExampleCard>
        </ScrollView>
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

const InsetBox = ({ label, value }) => {
    return (
        <View style={styles.insetBox}>
            <Text style={styles.insetLabel}>{label}</Text>
            <Text style={styles.insetValue}>{Math.round(value)}</Text>
        </View>
    );
};

export default SafeAreaPage;

const styles = StyleSheet.create({
    screen: {
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

    insetsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },

    insetBox: {
        flex: 1,
        minWidth: 120,
        backgroundColor: '#e6f0ff',
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    insetLabel: {
        fontSize: 14,
        color: '#555',
        fontWeight: 'bold',
        marginBottom: 4,
    },

    insetValue: {
        fontSize: 24,
        color: '#222',
        fontWeight: 'bold',
    },

    safeAreaDemoBox: {
        backgroundColor: '#d9ecff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    manualInsetBox: {
        backgroundColor: '#d9ecff',
        borderRadius: 12,
        minHeight: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    demoText: {
        fontSize: 16,
        color: '#222',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    fakePhoneFrame: {
        minHeight: 220,
        backgroundColor: '#eee',
        borderRadius: 18,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',
    },

    fakeHeader: {
        backgroundColor: '#007AFF',
        padding: 14,
        alignItems: 'center',
    },

    fakeHeaderText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    fakeContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    bottomActionBar: {
        backgroundColor: '#007AFF',
        paddingTop: 14,
        paddingHorizontal: 16,
        alignItems: 'center',
    },

    bottomActionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    edgesBox: {
        backgroundColor: '#d9ecff',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    modeBox: {
        backgroundColor: '#d9ecff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    miniScrollPreview: {
        backgroundColor: '#eee',
        borderRadius: 12,
        padding: 12,
    },

    floatingPreview: {
        height: 220,
        backgroundColor: '#eee',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        position: 'relative',
    },

    fakeFloatingButton: {
        position: 'absolute',
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fakeFloatingButtonText: {
        color: '#fff',
        fontSize: 30,
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