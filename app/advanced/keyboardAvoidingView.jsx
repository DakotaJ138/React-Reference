import React, { useRef, useState } from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Link } from 'expo-router';

const KeyboardAvoidingViewPage = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [basicName, setBasicName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
        >
            <ScrollView
                contentContainerStyle={styles.screen}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
            >
                <Link href="/" style={styles.backLink}>
                    Back Home
                </Link>

                <Text style={styles.pageTitle}>KeyboardAvoidingView Reference</Text>

                <Text style={styles.introText}>
                    KeyboardAvoidingView helps keep inputs visible when the keyboard opens.
                    It is commonly used on login screens, registration screens, profile
                    forms, comment forms, and chat input screens.
                </Text>

                <ExampleCard title="1. Basic KeyboardAvoidingView">
                    <Text style={styles.explanationText}>
                        This page itself is wrapped in KeyboardAvoidingView. Tap the input
                        below and the screen should adjust when the keyboard opens.
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Type your name"
                        value={basicName}
                        onChangeText={setBasicName}
                    />

                    <Text style={styles.statusText}>Current value: {basicName}</Text>
                </ExampleCard>

                <ExampleCard title="2. behavior padding">
                    <Text style={styles.explanationText}>
                        behavior padding adjusts bottom padding when the keyboard appears.
                        This is commonly used on iOS.
                    </Text>

                    <Text style={styles.codeText}>
                        {'behavior="padding"'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="3. behavior height">
                    <Text style={styles.explanationText}>
                        behavior height adjusts the height of the container. This is often
                        used on Android.
                    </Text>

                    <Text style={styles.codeText}>
                        {'behavior="height"'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="4. behavior position">
                    <Text style={styles.explanationText}>
                        behavior position moves the content container. This can be useful
                        for fixed layouts.
                    </Text>

                    <Text style={styles.codeText}>
                        {'behavior="position"'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="5. Platform based behavior">
                    <Text style={styles.explanationText}>
                        A common pattern is to use padding on iOS and height on Android.
                    </Text>

                    <Text style={styles.codeText}>
                        {"behavior={Platform.OS === 'ios' ? 'padding' : 'height'}"}
                    </Text>

                    <Text style={styles.statusText}>
                        Current platform: {Platform.OS}
                    </Text>
                </ExampleCard>

                <ExampleCard title="6. keyboardVerticalOffset">
                    <Text style={styles.explanationText}>
                        keyboardVerticalOffset adds extra offset between the top of the
                        screen and the React Native view. Use this when you have a header
                        or navigation bar taking up space.
                    </Text>

                    <Text style={styles.codeText}>
                        {'keyboardVerticalOffset={80}'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="7. enabled">
                    <Text style={styles.explanationText}>
                        enabled turns KeyboardAvoidingView behavior on or off.
                    </Text>

                    <Text style={styles.codeText}>
                        {'enabled={true}'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'enabled={false}'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="8. contentContainerStyle">
                    <Text style={styles.explanationText}>
                        contentContainerStyle applies to the inner content container when
                        using behavior position.
                    </Text>

                    <Text style={styles.codeText}>
                        {'contentContainerStyle={styles.keyboardContent}'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="9. KeyboardAvoidingView plus ScrollView pattern">
                    <Text style={styles.explanationText}>
                        This is a practical pattern for forms that may be taller than the screen.
                    </Text>

                    <Text style={styles.codeText}>
                        {'<KeyboardAvoidingView style={{ flex: 1 }} behavior={behavior}>'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'  <ScrollView keyboardShouldPersistTaps="handled">'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'    <TextInput />'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'  </ScrollView>'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'</KeyboardAvoidingView>'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="10. keyboardShouldPersistTaps">
                    <Text style={styles.explanationText}>
                        keyboardShouldPersistTaps controls whether taps are handled while
                        the keyboard is open. This matters when a form has buttons below inputs.
                    </Text>

                    <Text style={styles.codeText}>
                        {'keyboardShouldPersistTaps="handled"'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="11. keyboardDismissMode">
                    <Text style={styles.explanationText}>
                        keyboardDismissMode can dismiss the keyboard when the user drags
                        the ScrollView.
                    </Text>

                    <Text style={styles.codeText}>
                        {'keyboardDismissMode="on-drag"'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="12. Keyboard.dismiss">
                    <Text style={styles.explanationText}>
                        The Keyboard module can dismiss the keyboard from code.
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Tap here, then dismiss keyboard"
                    />

                    <Pressable style={styles.secondaryButton} onPress={Keyboard.dismiss}>
                        <Text style={styles.secondaryButtonText}>Dismiss Keyboard</Text>
                    </Pressable>
                </ExampleCard>

                <ExampleCard title="13. Login form pattern">
                    <Text style={styles.explanationText}>
                        This pattern uses refs to move from the email input to the password input.
                    </Text>

                    <Text style={styles.label}>Email</Text>

                    <TextInput
                        ref={emailRef}
                        style={styles.input}
                        placeholder="Email address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        value={email}
                        onChangeText={setEmail}
                        onSubmitEditing={() => passwordRef.current?.focus()}
                    />

                    <Text style={styles.label}>Password</Text>

                    <TextInput
                        ref={passwordRef}
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        returnKeyType="done"
                        value={password}
                        onChangeText={setPassword}
                        onSubmitEditing={() => {
                            Keyboard.dismiss();
                            Alert.alert('Submitted', 'Login form submitted.');
                        }}
                    />

                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            Keyboard.dismiss();
                            Alert.alert('Submitted', 'Login form submitted.');
                        }}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                </ExampleCard>

                <ExampleCard title="14. Bottom button pattern">
                    <Text style={styles.explanationText}>
                        A common form layout keeps the main fields scrollable and the
                        submit button near the bottom.
                    </Text>

                    <View style={styles.fakePhoneFrame}>
                        <View style={styles.fakeFormArea}>
                            <View style={styles.fakeInput} />
                            <View style={styles.fakeInput} />
                            <View style={styles.fakeInput} />
                        </View>

                        <View style={styles.fakeBottomButton}>
                            <Text style={styles.fakeBottomButtonText}>Submit</Text>
                        </View>
                    </View>
                </ExampleCard>

                <ExampleCard title="15. Full screen form pattern">
                    <Text style={styles.explanationText}>
                        Use flex: 1 on KeyboardAvoidingView. Without bounded height,
                        keyboard avoiding behavior may not work correctly.
                    </Text>

                    <Text style={styles.codeText}>
                        {'<KeyboardAvoidingView style={{ flex: 1 }}>'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'    <Form />'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'  </ScrollView>'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'</KeyboardAvoidingView>'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="16. Chat input pattern">
                    <Text style={styles.explanationText}>
                        Chat screens often keep the message input at the bottom while
                        the keyboard opens.
                    </Text>

                    <View style={styles.chatPreview}>
                        <View style={styles.chatMessage}>
                            <Text>Message list area</Text>
                        </View>

                        <View style={styles.chatInputRow}>
                            <TextInput
                                style={styles.chatInput}
                                placeholder="Message"
                            />

                            <Pressable style={styles.sendButton}>
                                <Text style={styles.sendButtonText}>Send</Text>
                            </Pressable>
                        </View>
                    </View>
                </ExampleCard>

                <ExampleCard title="17. Common mistake, missing flex: 1">
                    <Text style={styles.warningText}>
                        KeyboardAvoidingView needs a bounded layout. In most screens,
                        give it flex: 1.
                    </Text>

                    <Text style={styles.codeText}>
                        {'<KeyboardAvoidingView style={{ flex: 1 }}>'}
                    </Text>
                </ExampleCard>

                <ExampleCard title="18. Common mistake, using the same behavior everywhere">
                    <Text style={styles.warningText}>
                        Keyboard behavior can differ between Android and iOS. Test both.
                        A common starting point is padding for iOS and height for Android.
                    </Text>
                </ExampleCard>

                <ExampleCard title="19. Common mistake, forgetting keyboardVerticalOffset">
                    <Text style={styles.warningText}>
                        If your app has a header, the keyboard adjustment may be off.
                        Add keyboardVerticalOffset to account for the header height.
                    </Text>
                </ExampleCard>

                <ExampleCard title="20. Common mistake, expecting it to fix every layout">
                    <Text style={styles.warningText}>
                        KeyboardAvoidingView helps, but it does not automatically make
                        every input scroll into view. Long forms usually need ScrollView too.
                    </Text>
                </ExampleCard>
            </ScrollView>
        </KeyboardAvoidingView>
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

export default KeyboardAvoidingViewPage;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    screen: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        paddingBottom: 40,
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

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        color: '#222',
    },

    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
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

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    secondaryButton: {
        backgroundColor: '#e6f0ff',
        borderWidth: 1,
        borderColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    secondaryButtonText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    fakePhoneFrame: {
        minHeight: 260,
        backgroundColor: '#eee',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        justifyContent: 'space-between',
    },

    fakeFormArea: {
        gap: 10,
    },

    fakeInput: {
        height: 44,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    fakeBottomButton: {
        backgroundColor: '#007AFF',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },

    fakeBottomButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    chatPreview: {
        minHeight: 260,
        backgroundColor: '#eee',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        overflow: 'hidden',
    },

    chatMessage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    chatInputRow: {
        flexDirection: 'row',
        gap: 8,
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },

    chatInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 999,
        paddingHorizontal: 14,
        paddingVertical: 8,
        fontSize: 16,
    },

    sendButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },

    sendButtonText: {
        color: '#fff',
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