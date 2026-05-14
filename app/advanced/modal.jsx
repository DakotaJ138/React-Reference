import React, { useState } from 'react';
import {
    Alert,
    Modal,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Link } from 'expo-router';

const ModalPage = () => {
    const [basicVisible, setBasicVisible] = useState(false);
    const [fadeVisible, setFadeVisible] = useState(false);
    const [slideVisible, setSlideVisible] = useState(false);
    const [transparentVisible, setTransparentVisible] = useState(false);
    const [fullScreenVisible, setFullScreenVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [statusVisible, setStatusVisible] = useState(false);
    const [eventText, setEventText] = useState('Modal events have not fired yet.');

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Link href="/" style={styles.backLink}>
                Back Home
            </Link>

            <Text style={styles.pageTitle}>Modal Component Reference</Text>

            <Text style={styles.introText}>
                Modal displays content above the current screen. It is useful for
                confirmation prompts, forms, details, alerts, full screen overlays,
                and temporary focused tasks.
            </Text>

            <ExampleCard title="1. Basic Modal">
                <Text style={styles.explanationText}>
                    visible controls whether the Modal is shown.
                </Text>

                <DemoButton title="Open Basic Modal" onPress={() => setBasicVisible(true)} />

                <Modal
                    visible={basicVisible}
                    animationType="none"
                    onRequestClose={() => setBasicVisible(false)}
                >
                    <View style={styles.fullScreenModal}>
                        <Text style={styles.modalTitle}>Basic Modal</Text>

                        <Text style={styles.modalText}>
                            This Modal covers the current screen.
                        </Text>

                        <DemoButton title="Close Modal" onPress={() => setBasicVisible(false)} />
                    </View>
                </Modal>
            </ExampleCard>

            <ExampleCard title="2. animationType none">
                <Text style={styles.explanationText}>
                    animationType none opens the Modal without a transition.
                </Text>

                <Text style={styles.codeText}>
                    {'animationType="none"'}
                </Text>
            </ExampleCard>

            <ExampleCard title="3. animationType fade">
                <Text style={styles.explanationText}>
                    fade opens the Modal with a fade animation.
                </Text>

                <DemoButton title="Open Fade Modal" onPress={() => setFadeVisible(true)} />

                <Modal
                    visible={fadeVisible}
                    animationType="fade"
                    transparent
                    onRequestClose={() => setFadeVisible(false)}
                >
                    <View style={styles.overlay}>
                        <View style={styles.centerModalCard}>
                            <Text style={styles.modalTitle}>Fade Modal</Text>

                            <Text style={styles.modalText}>
                                This Modal uses animationType fade.
                            </Text>

                            <DemoButton title="Close" onPress={() => setFadeVisible(false)} />
                        </View>
                    </View>
                </Modal>
            </ExampleCard>

            <ExampleCard title="4. animationType slide">
                <Text style={styles.explanationText}>
                    slide opens the Modal from the bottom of the screen.
                </Text>

                <DemoButton title="Open Slide Modal" onPress={() => setSlideVisible(true)} />

                <Modal
                    visible={slideVisible}
                    animationType="slide"
                    transparent
                    onRequestClose={() => setSlideVisible(false)}
                >
                    <View style={styles.bottomOverlay}>
                        <View style={styles.bottomSheet}>
                            <Text style={styles.modalTitle}>Slide Modal</Text>

                            <Text style={styles.modalText}>
                                This pattern works well for bottom sheets and action panels.
                            </Text>

                            <DemoButton title="Close" onPress={() => setSlideVisible(false)} />
                        </View>
                    </View>
                </Modal>
            </ExampleCard>

            <ExampleCard title="5. transparent">
                <Text style={styles.explanationText}>
                    transparent allows the Modal to appear above a partially visible
                    background instead of filling the whole screen with a solid color.
                </Text>

                <DemoButton
                    title="Open Transparent Modal"
                    onPress={() => setTransparentVisible(true)}
                />

                <Modal
                    visible={transparentVisible}
                    animationType="fade"
                    transparent
                    onRequestClose={() => setTransparentVisible(false)}
                >
                    <View style={styles.overlay}>
                        <View style={styles.centerModalCard}>
                            <Text style={styles.modalTitle}>Transparent Modal</Text>

                            <Text style={styles.modalText}>
                                The dark overlay is a View behind this card.
                            </Text>

                            <DemoButton
                                title="Close"
                                onPress={() => setTransparentVisible(false)}
                            />
                        </View>
                    </View>
                </Modal>
            </ExampleCard>

            <ExampleCard title="6. Full screen Modal layout">
                <Text style={styles.explanationText}>
                    A Modal can behave like a temporary full screen page.
                </Text>

                <DemoButton
                    title="Open Full Screen Modal"
                    onPress={() => setFullScreenVisible(true)}
                />

                <Modal
                    visible={fullScreenVisible}
                    animationType="slide"
                    onRequestClose={() => setFullScreenVisible(false)}
                >
                    <View style={styles.fullScreenModal}>
                        <Text style={styles.modalTitle}>Full Screen Modal</Text>

                        <Text style={styles.modalText}>
                            Use this for focused flows, details, or temporary pages.
                        </Text>

                        <View style={styles.fakeContentBlock}>
                            <Text style={styles.fakeContentText}>Full screen content area</Text>
                        </View>

                        <DemoButton
                            title="Close Full Screen Modal"
                            onPress={() => setFullScreenVisible(false)}
                        />
                    </View>
                </Modal>
            </ExampleCard>

            <ExampleCard title="7. Confirmation Modal pattern">
                <Text style={styles.explanationText}>
                    This pattern is useful before deleting, submitting, or canceling work.
                </Text>

                <DemoButton
                    title="Open Confirm Modal"
                    onPress={() => setConfirmVisible(true)}
                />

                <Modal
                    visible={confirmVisible}
                    animationType="fade"
                    transparent
                    onRequestClose={() => setConfirmVisible(false)}
                >
                    <View style={styles.overlay}>
                        <View style={styles.centerModalCard}>
                            <Text style={styles.modalTitle}>Confirm Action</Text>

                            <Text style={styles.modalText}>
                                Are you sure you want to continue?
                            </Text>

                            <View style={styles.buttonRow}>
                                <Pressable
                                    style={styles.cancelButton}
                                    onPress={() => setConfirmVisible(false)}
                                >
                                    <Text style={styles.cancelButtonText}>Cancel</Text>
                                </Pressable>

                                <Pressable
                                    style={styles.confirmButton}
                                    onPress={() => {
                                        setConfirmVisible(false);
                                        Alert.alert('Confirmed', 'The action was confirmed.');
                                    }}
                                >
                                    <Text style={styles.confirmButtonText}>Confirm</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ExampleCard>

            <ExampleCard title="8. Form Modal pattern">
                <Text style={styles.explanationText}>
                    A Modal can hold a form, but longer forms may work better as a normal route.
                </Text>

                <DemoButton title="Open Form Modal" onPress={() => setFormVisible(true)} />

                <Modal
                    visible={formVisible}
                    animationType="slide"
                    transparent
                    onRequestClose={() => setFormVisible(false)}
                >
                    <View style={styles.bottomOverlay}>
                        <View style={styles.bottomSheet}>
                            <Text style={styles.modalTitle}>Example Form</Text>

                            <View style={styles.fakeInput}>
                                <Text style={styles.fakeInputText}>Name input placeholder</Text>
                            </View>

                            <View style={styles.fakeInput}>
                                <Text style={styles.fakeInputText}>Email input placeholder</Text>
                            </View>

                            <View style={styles.buttonRow}>
                                <Pressable
                                    style={styles.cancelButton}
                                    onPress={() => setFormVisible(false)}
                                >
                                    <Text style={styles.cancelButtonText}>Cancel</Text>
                                </Pressable>

                                <Pressable
                                    style={styles.confirmButton}
                                    onPress={() => {
                                        setFormVisible(false);
                                        Alert.alert('Saved', 'Form modal submitted.');
                                    }}
                                >
                                    <Text style={styles.confirmButtonText}>Save</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ExampleCard>

            <ExampleCard title="9. onRequestClose">
                <Text style={styles.explanationText}>
                    onRequestClose handles Android back button behavior. You should
                    include it so the user can dismiss the Modal properly.
                </Text>

                <Text style={styles.codeText}>
                    {'onRequestClose={() => setModalVisible(false)}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="10. onShow and onDismiss">
                <Text style={styles.explanationText}>
                    onShow runs when the Modal appears. onDismiss is iOS specific and
                    runs after the Modal is dismissed.
                </Text>

                <DemoButton
                    title="Open Event Modal"
                    onPress={() => setStatusVisible(true)}
                />

                <Text style={styles.statusText}>{eventText}</Text>

                <Modal
                    visible={statusVisible}
                    animationType="fade"
                    transparent
                    onShow={() => setEventText('onShow fired.')}
                    onDismiss={() => setEventText('onDismiss fired.')}
                    onRequestClose={() => setStatusVisible(false)}
                >
                    <View style={styles.overlay}>
                        <View style={styles.centerModalCard}>
                            <Text style={styles.modalTitle}>Event Modal</Text>

                            <Text style={styles.modalText}>
                                This Modal updates state when it appears and dismisses.
                            </Text>

                            <DemoButton title="Close" onPress={() => setStatusVisible(false)} />
                        </View>
                    </View>
                </Modal>
            </ExampleCard>

            <ExampleCard title="11. presentationStyle iOS">
                <Text style={styles.explanationText}>
                    presentationStyle controls how a Modal is presented on iOS.
                    Common values include fullScreen, pageSheet, formSheet, and overFullScreen.
                </Text>

                <Text style={styles.codeText}>
                    {'presentationStyle="pageSheet"'}
                </Text>

                <Text style={styles.codeText}>
                    {'presentationStyle="formSheet"'}
                </Text>

                <Text style={styles.codeText}>
                    {'presentationStyle="overFullScreen"'}
                </Text>
            </ExampleCard>

            <ExampleCard title="12. statusBarTranslucent Android">
                <Text style={styles.explanationText}>
                    statusBarTranslucent allows the Modal to draw under the Android
                    status bar.
                </Text>

                <Text style={styles.codeText}>
                    {'statusBarTranslucent={true}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="13. navigationBarTranslucent Android">
                <Text style={styles.explanationText}>
                    navigationBarTranslucent allows the Modal to draw under the Android
                    navigation bar. React Native notes that statusBarTranslucent should
                    also be true.
                </Text>

                <Text style={styles.codeText}>
                    {'navigationBarTranslucent={true}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="14. hardwareAccelerated Android">
                <Text style={styles.explanationText}>
                    hardwareAccelerated can force hardware acceleration for the Modal
                    window on Android.
                </Text>

                <Text style={styles.codeText}>
                    {'hardwareAccelerated={true}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="15. supportedOrientations iOS">
                <Text style={styles.explanationText}>
                    supportedOrientations controls which orientations the Modal supports on iOS.
                </Text>

                <Text style={styles.codeText}>
                    {"supportedOrientations={['portrait', 'landscape']}"}
                </Text>
            </ExampleCard>

            <ExampleCard title="16. allowSwipeDismissal iOS">
                <Text style={styles.explanationText}>
                    allowSwipeDismissal lets users dismiss some iOS modal styles by swiping.
                </Text>

                <Text style={styles.codeText}>
                    {'allowSwipeDismissal={true}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="17. Common mistake, no close button">
                <Text style={styles.warningText}>
                    A Modal should almost always include a clear way to close it.
                </Text>

                <Text style={styles.codeText}>
                    Wrong: open a Modal with no close action.
                </Text>

                <Text style={styles.codeText}>
                    Better: include Cancel, Close, Done, or Save.
                </Text>
            </ExampleCard>

            <ExampleCard title="18. Common mistake, using Modal for every screen">
                <Text style={styles.warningText}>
                    Use Modal for temporary content. Use normal routes for full screen
                    app sections that users may revisit or link to.
                </Text>
            </ExampleCard>

            <ExampleCard title="19. Common mistake, forgetting transparent overlay">
                <Text style={styles.warningText}>
                    transparent only makes the Modal background transparent. You still
                    need to create your own overlay View if you want a dimmed background.
                </Text>

                <Text style={styles.codeText}>
                    {'<Modal transparent><View style={styles.overlay}>...</View></Modal>'}
                </Text>
            </ExampleCard>

            <ExampleCard title="20. Platform note">
                <Text style={styles.explanationText}>
                    Current platform: {Platform.OS}
                </Text>

                <Text style={styles.explanationText}>
                    Some Modal props are platform specific, so always test on both Android
                    and iOS when the app targets both.
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

const DemoButton = ({ title, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.demoButton,
                pressed && styles.demoButtonPressed,
            ]}
            onPress={onPress}
            accessibilityRole="button"
        >
            <Text style={styles.demoButtonText}>{title}</Text>
        </Pressable>
    );
};

export default ModalPage;

const styles = StyleSheet.create({
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

    statusText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },

    demoButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    demoButtonPressed: {
        opacity: 0.7,
        transform: [
            { scale: 0.98 },
        ],
    },

    demoButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    fullScreenModal: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    bottomOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        justifyContent: 'flex-end',
    },

    centerModalCard: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        gap: 12,
    },

    bottomSheet: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        gap: 12,
    },

    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
    },

    modalText: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
        textAlign: 'center',
    },

    fakeContentBlock: {
        width: '100%',
        minHeight: 160,
        backgroundColor: '#e6f0ff',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },

    fakeContentText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },

    fakeInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 14,
        backgroundColor: '#f8f8f8',
    },

    fakeInputText: {
        color: '#777',
        fontSize: 16,
    },

    buttonRow: {
        flexDirection: 'row',
        gap: 10,
    },

    cancelButton: {
        flex: 1,
        backgroundColor: '#eee',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cancelButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },

    confirmButton: {
        flex: 1,
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
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