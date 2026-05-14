import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const PressablePage = () => {
    const [pressCount, setPressCount] = useState(0);
    const [eventText, setEventText] = useState('No press event yet.');
    const [longPressText, setLongPressText] = useState('Long press has not fired yet.');
    const [moveText, setMoveText] = useState('Move your finger while pressing.');
    const [hoverText, setHoverText] = useState('Hover has not fired.');
    const [delayedText, setDelayedText] = useState('Press delay has not fired yet.');

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Link href="/" style={styles.backLink}>
                Back Home
            </Link>

            <Text style={styles.pageTitle}>Pressable Component Reference</Text>

            <Text style={styles.introText}>
                Pressable is used to create custom buttons, cards, links, icons,
                tabs, menu items, and any other touchable area. Unlike Button,
                Pressable does not come with default styling. You control how it looks.
            </Text>

            <ExampleCard title="1. Basic Pressable">
                <Pressable
                    style={styles.basicButton}
                    onPress={() => Alert.alert('Pressed', 'Basic Pressable was pressed.')}
                >
                    <Text style={styles.buttonText}>Press Me</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="2. onPress">
                <Text style={styles.explanationText}>
                    onPress runs after the user taps and releases the Pressable.
                </Text>

                <Pressable
                    style={styles.basicButton}
                    onPress={() => setPressCount(pressCount + 1)}
                >
                    <Text style={styles.buttonText}>Increase Count</Text>
                </Pressable>

                <Text style={styles.statusText}>Pressed {pressCount} times.</Text>
            </ExampleCard>

            <ExampleCard title="3. onPressIn and onPressOut">
                <Text style={styles.explanationText}>
                    onPressIn runs when the press starts. onPressOut runs when the
                    press ends.
                </Text>

                <Pressable
                    style={styles.basicButton}
                    onPressIn={() => setEventText('onPressIn fired.')}
                    onPressOut={() => setEventText('onPressOut fired.')}
                    onPress={() => setEventText('onPress fired after release.')}
                >
                    <Text style={styles.buttonText}>Press and Release</Text>
                </Pressable>

                <Text style={styles.statusText}>{eventText}</Text>
            </ExampleCard>

            <ExampleCard title="4. Pressed style">
                <Text style={styles.explanationText}>
                    The style prop can receive a function. That function gives you
                    pressed, which lets you change the appearance while the user is pressing.
                </Text>

                <Pressable
                    style={({ pressed }) => [
                        styles.basicButton,
                        pressed && styles.buttonPressed,
                    ]}
                    onPress={() => Alert.alert('Pressed style', 'The pressed style was active while pressing.')}
                >
                    <Text style={styles.buttonText}>Hold Me</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="5. Children as a function">
                <Text style={styles.explanationText}>
                    The children can also be a function. This lets the displayed text
                    change while pressing.
                </Text>

                <Pressable style={styles.basicButton}>
                    {({ pressed }) => (
                        <Text style={styles.buttonText}>
                            {pressed ? 'Pressed' : 'Not Pressed'}
                        </Text>
                    )}
                </Pressable>
            </ExampleCard>

            <ExampleCard title="6. Disabled Pressable">
                <Text style={styles.explanationText}>
                    disabled prevents the Pressable from responding.
                </Text>

                <Pressable
                    disabled
                    style={[styles.basicButton, styles.disabledButton]}
                    onPress={() => Alert.alert('This should not run.')}
                >
                    <Text style={styles.disabledButtonText}>Disabled Button</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="7. disabled with accessibilityState">
                <Text style={styles.explanationText}>
                    accessibilityState helps assistive technology understand that this
                    button is disabled.
                </Text>

                <Pressable
                    disabled
                    accessibilityRole="button"
                    accessibilityState={{ disabled: true }}
                    style={[styles.basicButton, styles.disabledButton]}
                >
                    <Text style={styles.disabledButtonText}>Accessible Disabled Button</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="8. onLongPress">
                <Text style={styles.explanationText}>
                    onLongPress runs when the user holds the Pressable.
                </Text>

                <Pressable
                    style={styles.basicButton}
                    onLongPress={() => setLongPressText('onLongPress fired.')}
                >
                    <Text style={styles.buttonText}>Long Press Me</Text>
                </Pressable>

                <Text style={styles.statusText}>{longPressText}</Text>
            </ExampleCard>

            <ExampleCard title="9. delayLongPress">
                <Text style={styles.explanationText}>
                    delayLongPress changes how long the user must hold before
                    onLongPress fires.
                </Text>

                <Pressable
                    style={styles.basicButton}
                    delayLongPress={1000}
                    onLongPress={() => Alert.alert('Long Press', 'Held for about one second.')}
                >
                    <Text style={styles.buttonText}>Hold for 1 Second</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="10. hitSlop">
                <Text style={styles.explanationText}>
                    hitSlop expands the touchable area outside the visible button.
                    The button looks small, but it is easier to tap.
                </Text>

                <View style={styles.hitSlopDemoArea}>
                    <Pressable
                        hitSlop={20}
                        style={styles.smallButton}
                        onPress={() => Alert.alert('hitSlop', 'You hit the expanded touch area.')}
                    >
                        <Text style={styles.smallButtonText}>Tap</Text>
                    </Pressable>
                </View>
            </ExampleCard>

            <ExampleCard title="11. pressRetentionOffset">
                <Text style={styles.explanationText}>
                    pressRetentionOffset lets the press stay active even if the finger
                    moves slightly outside the Pressable.
                </Text>

                <Pressable
                    style={styles.basicButton}
                    pressRetentionOffset={{
                        top: 40,
                        bottom: 40,
                        left: 40,
                        right: 40,
                    }}
                    onPress={() => Alert.alert('Press retained', 'The press stayed active.')}
                >
                    <Text style={styles.buttonText}>Press and Slightly Move</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="12. onPressMove">
                <Text style={styles.explanationText}>
                    onPressMove runs when the press position moves.
                </Text>

                <Pressable
                    style={styles.basicButton}
                    onPressMove={() => setMoveText('onPressMove fired.')}
                    onPressOut={() => setMoveText('Press ended.')}
                >
                    <Text style={styles.buttonText}>Press and Move Finger</Text>
                </Pressable>

                <Text style={styles.statusText}>{moveText}</Text>
            </ExampleCard>

            <ExampleCard title="13. unstable_pressDelay">
                <Text style={styles.explanationText}>
                    unstable_pressDelay waits before calling onPressIn. This is useful
                    only in specific interaction cases.
                </Text>

                <Pressable
                    style={styles.basicButton}
                    unstable_pressDelay={500}
                    onPressIn={() => setDelayedText('onPressIn fired after delay.')}
                    onPressOut={() => setDelayedText('Press ended.')}
                >
                    <Text style={styles.buttonText}>Delayed Press In</Text>
                </Pressable>

                <Text style={styles.statusText}>{delayedText}</Text>
            </ExampleCard>

            <ExampleCard title="14. Android ripple">
                <Text style={styles.explanationText}>
                    android_ripple adds the native Android ripple effect.
                </Text>

                <Pressable
                    style={styles.rippleButton}
                    android_ripple={{
                        color: '#99cfff',
                        borderless: false,
                    }}
                    onPress={() => Alert.alert('Ripple', 'Android ripple example.')}
                >
                    <Text style={styles.rippleButtonText}>Android Ripple</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="15. android_disableSound">
                <Text style={styles.explanationText}>
                    android_disableSound prevents the Android system press sound.
                </Text>

                <Pressable
                    android_disableSound
                    style={styles.basicButton}
                    onPress={() => Alert.alert('Silent', 'Android sound disabled.')}
                >
                    <Text style={styles.buttonText}>No Android Sound</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="16. onHoverIn and onHoverOut">
                <Text style={styles.explanationText}>
                    Hover events are useful on platforms that support mouse or pointer hover.
                </Text>

                <Pressable
                    style={styles.basicButton}
                    onHoverIn={() => setHoverText('Hover started.')}
                    onHoverOut={() => setHoverText('Hover ended.')}
                >
                    <Text style={styles.buttonText}>Hover Over Me</Text>
                </Pressable>

                <Text style={styles.statusText}>{hoverText}</Text>
            </ExampleCard>

            <ExampleCard title="17. Pressable as a card">
                <Text style={styles.explanationText}>
                    Pressable can wrap a whole card, not just a button.
                </Text>

                <Pressable
                    style={({ pressed }) => [
                        styles.pressableCard,
                        pressed && styles.pressableCardPressed,
                    ]}
                    onPress={() => Alert.alert('Card Pressed', 'The whole card is pressable.')}
                >
                    <Text style={styles.cardItemTitle}>Reference Card</Text>
                    <Text style={styles.cardItemText}>
                        This entire card responds to touch.
                    </Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="18. Pressable as a text link">
                <Text style={styles.explanationText}>
                    Pressable can be used to create custom link style behavior.
                </Text>

                <Pressable onPress={() => Alert.alert('Link Pressed', 'Custom link was pressed.')}>
                    {({ pressed }) => (
                        <Text style={[styles.textLink, pressed && styles.textLinkPressed]}>
                            Pressable Text Link
                        </Text>
                    )}
                </Pressable>
            </ExampleCard>

            <ExampleCard title="19. Pressable with icon style layout">
                <Text style={styles.explanationText}>
                    This pattern is useful for icon buttons, tab buttons, and menu actions.
                </Text>

                <Pressable
                    style={({ pressed }) => [
                        styles.iconButton,
                        pressed && styles.iconButtonPressed,
                    ]}
                    onPress={() => Alert.alert('Icon Button', 'Icon style button pressed.')}
                    accessibilityRole="button"
                    accessibilityLabel="Star item"
                >
                    <Text style={styles.iconText}>★</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="20. accessibilityRole">
                <Text style={styles.explanationText}>
                    accessibilityRole tells assistive technology what kind of element this is.
                </Text>

                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Save changes"
                    style={styles.basicButton}
                    onPress={() => Alert.alert('Saved', 'Accessibility button example.')}
                >
                    <Text style={styles.buttonText}>Save</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="21. testID">
                <Text style={styles.explanationText}>
                    testID gives the Pressable an identifier for automated testing.
                    It does not visually change the app.
                </Text>

                <Pressable
                    testID="save-pressable"
                    style={styles.basicButton}
                    onPress={() => Alert.alert('Testing', 'This Pressable has a testID.')}
                >
                    <Text style={styles.buttonText}>Pressable with testID</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="22. testOnly_pressed">
                <Text style={styles.explanationText}>
                    testOnly_pressed is mainly for documentation or tests. It forces
                    the pressed state.
                </Text>

                <Pressable
                    testOnly_pressed
                    style={({ pressed }) => [
                        styles.basicButton,
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Text style={styles.buttonText}>Forced Pressed State</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="23. Common mistake, no visual feedback">
                <Text style={styles.warningText}>
                    Pressable does not automatically look pressed. You need to add a
                    pressed style yourself.
                </Text>

                <Text style={styles.codeText}>
                    Wrong: {'<Pressable><Text>Save</Text></Pressable>'}
                </Text>

                <Text style={styles.codeText}>
                    Better: use style as a function and check pressed.
                </Text>
            </ExampleCard>

            <ExampleCard title="24. Common mistake, using Pressable without Text">
                <Text style={styles.warningText}>
                    If you want words inside Pressable, the words still need to be
                    inside a Text component.
                </Text>

                <Text style={styles.codeText}>
                    Wrong: {'<Pressable>Save</Pressable>'}
                </Text>

                <Text style={styles.codeText}>
                    Correct: {'<Pressable><Text>Save</Text></Pressable>'}
                </Text>
            </ExampleCard>

            <ExampleCard title="25. Common mistake, using Button when you need custom styling">
                <Text style={styles.warningText}>
                    Button is fine for quick examples, but Pressable is better when you
                    need custom layouts, icons, cards, pressed states, or reusable button components.
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

export default PressablePage;

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

    basicButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonPressed: {
        opacity: 0.65,
        transform: [
            { scale: 0.97 },
        ],
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    disabledButton: {
        backgroundColor: '#bbb',
    },

    disabledButtonText: {
        color: '#eee',
        fontSize: 16,
        fontWeight: 'bold',
    },

    statusText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },

    hitSlopDemoArea: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    smallButton: {
        width: 50,
        height: 36,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },

    smallButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    rippleButton: {
        backgroundColor: '#e6f0ff',
        borderWidth: 1,
        borderColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },

    rippleButtonText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    pressableCard: {
        backgroundColor: '#f8fbff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#cfe4ff',
    },

    pressableCardPressed: {
        backgroundColor: '#e6f0ff',
        transform: [
            { scale: 0.98 },
        ],
    },

    cardItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 6,
    },

    cardItemText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },

    textLink: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    textLinkPressed: {
        opacity: 0.5,
    },

    iconButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconButtonPressed: {
        opacity: 0.7,
        transform: [
            { scale: 0.9 },
        ],
    },

    iconText: {
        color: '#fff',
        fontSize: 26,
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