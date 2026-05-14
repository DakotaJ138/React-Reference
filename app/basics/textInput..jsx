import React, { useRef, useState } from 'react';
import {
    Alert,
    Keyboard,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Link } from 'expo-router';

const TextInputPage = () => {
    const focusInputRef = useRef(null);

    const [basicText, setBasicText] = useState('');
    const [defaultText, setDefaultText] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [multilineText, setMultilineText] = useState('');
    const [limitedText, setLimitedText] = useState('');
    const [editableText, setEditableText] = useState('This input is disabled.');
    const [focusStatus, setFocusStatus] = useState('Input has not been focused yet.');
    const [submitText, setSubmitText] = useState('');
    const [eventText, setEventText] = useState('No input event yet.');
    const [selectionText, setSelectionText] = useState('Watch selection changes here.');
    const [searchText, setSearchText] = useState('');
    const [autoCapText, setAutoCapText] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.screen} keyboardShouldPersistTaps="handled">
            <Link href="/" style={styles.backLink}>
                Back Home
            </Link>

            <Text style={styles.pageTitle}>TextInput Component Reference</Text>

            <Text style={styles.introText}>
                TextInput is used when the user needs to type into the app. It is used
                for forms, search bars, usernames, passwords, comments, notes, numbers,
                phone numbers, and multiline text areas.
            </Text>

            <ExampleCard title="1. Basic TextInput">
                <Text style={styles.explanationText}>
                    value stores the current text. onChangeText updates the state when
                    the user types.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Type something"
                    value={basicText}
                    onChangeText={setBasicText}
                />

                <Text style={styles.statusText}>Current value: {basicText}</Text>
            </ExampleCard>

            <ExampleCard title="2. placeholder and placeholderTextColor">
                <Text style={styles.explanationText}>
                    placeholder shows hint text when the input is empty.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="This is placeholder text"
                    placeholderTextColor="#888"
                />
            </ExampleCard>

            <ExampleCard title="3. defaultValue">
                <Text style={styles.explanationText}>
                    defaultValue gives the input starting text. Use value and state when
                    you need full control.
                </Text>

                <TextInput
                    style={styles.input}
                    defaultValue="Starting text"
                    value={defaultText}
                    onChangeText={setDefaultText}
                />
            </ExampleCard>

            <ExampleCard title="4. keyboardType default">
                <TextInput
                    style={styles.input}
                    placeholder="Default keyboard"
                    keyboardType="default"
                />
            </ExampleCard>

            <ExampleCard title="5. keyboardType email-address">
                <TextInput
                    style={styles.input}
                    placeholder="Email address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
            </ExampleCard>

            <ExampleCard title="6. keyboardType numeric">
                <TextInput
                    style={styles.input}
                    placeholder="Numbers only"
                    keyboardType="numeric"
                    value={number}
                    onChangeText={setNumber}
                />
            </ExampleCard>

            <ExampleCard title="7. keyboardType phone-pad">
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />
            </ExampleCard>

            <ExampleCard title="8. keyboardType decimal-pad">
                <TextInput
                    style={styles.input}
                    placeholder="Decimal number"
                    keyboardType="decimal-pad"
                />
            </ExampleCard>

            <ExampleCard title="9. keyboardType url">
                <TextInput
                    style={styles.input}
                    placeholder="Website URL"
                    keyboardType="url"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </ExampleCard>

            <ExampleCard title="10. secureTextEntry">
                <Text style={styles.explanationText}>
                    secureTextEntry hides typed characters. Use it for passwords.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!visiblePassword}
                    value={password}
                    onChangeText={setPassword}
                />

                <Pressable
                    style={styles.secondaryButton}
                    onPress={() => setVisiblePassword(!visiblePassword)}
                >
                    <Text style={styles.secondaryButtonText}>
                        {visiblePassword ? 'Hide Password' : 'Show Password'}
                    </Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="11. autoCapitalize">
                <Text style={styles.explanationText}>
                    autoCapitalize controls automatic capitalization.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="autoCapitalize words"
                    autoCapitalize="words"
                    value={autoCapText}
                    onChangeText={setAutoCapText}
                />

                <Text style={styles.codeText}>
                    autoCapitalize values: none, sentences, words, characters
                </Text>
            </ExampleCard>

            <ExampleCard title="12. autoCorrect">
                <TextInput
                    style={styles.input}
                    placeholder="Auto correct disabled"
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Auto correct enabled"
                    autoCorrect={true}
                />
            </ExampleCard>

            <ExampleCard title="13. autoComplete">
                <Text style={styles.explanationText}>
                    autoComplete gives the system a hint for autofill.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email autocomplete"
                    keyboardType="email-address"
                    autoComplete="email"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Username autocomplete"
                    autoComplete="username"
                    autoCapitalize="none"
                />
            </ExampleCard>

            <ExampleCard title="14. multiline">
                <Text style={styles.explanationText}>
                    multiline allows the input to grow into a text area.
                </Text>

                <TextInput
                    style={styles.multilineInput}
                    placeholder="Type a longer note"
                    multiline
                    value={multilineText}
                    onChangeText={setMultilineText}
                />
            </ExampleCard>

            <ExampleCard title="15. numberOfLines">
                <Text style={styles.explanationText}>
                    numberOfLines gives multiline inputs a suggested visible height.
                </Text>

                <TextInput
                    style={styles.multilineInput}
                    placeholder="This starts around four lines tall"
                    multiline
                    numberOfLines={4}
                />
            </ExampleCard>

            <ExampleCard title="16. textAlignVertical">
                <Text style={styles.explanationText}>
                    textAlignVertical controls vertical alignment inside the input.
                    It is especially useful on Android multiline inputs.
                </Text>

                <TextInput
                    style={styles.multilineInput}
                    placeholder="Text starts at the top"
                    multiline
                    textAlignVertical="top"
                />
            </ExampleCard>

            <ExampleCard title="17. maxLength">
                <Text style={styles.explanationText}>
                    maxLength limits how many characters the user can type.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Max 20 characters"
                    maxLength={20}
                    value={limitedText}
                    onChangeText={setLimitedText}
                />

                <Text style={styles.statusText}>{limitedText.length}/20 characters</Text>
            </ExampleCard>

            <ExampleCard title="18. editable">
                <Text style={styles.explanationText}>
                    editable false prevents the user from changing the input.
                </Text>

                <TextInput
                    style={[styles.input, styles.disabledInput]}
                    editable={false}
                    value={editableText}
                    onChangeText={setEditableText}
                />
            </ExampleCard>

            <ExampleCard title="19. selectTextOnFocus">
                <TextInput
                    style={styles.input}
                    defaultValue="This text selects when focused"
                    selectTextOnFocus
                />
            </ExampleCard>

            <ExampleCard title="20. contextMenuHidden">
                <Text style={styles.explanationText}>
                    contextMenuHidden can hide the copy and paste menu.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Copy menu hidden"
                    contextMenuHidden
                />
            </ExampleCard>

            <ExampleCard title="21. clearButtonMode iOS">
                <Text style={styles.explanationText}>
                    clearButtonMode shows a clear button on iOS.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="iOS clear button while editing"
                    clearButtonMode="while-editing"
                />
            </ExampleCard>

            <ExampleCard title="22. underlineColorAndroid">
                <Text style={styles.explanationText}>
                    underlineColorAndroid controls the default Android underline color.
                    Set it to transparent when you want only your custom border.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="No Android underline"
                    underlineColorAndroid="transparent"
                />
            </ExampleCard>

            <ExampleCard title="23. selectionColor and cursorColor">
                <Text style={styles.explanationText}>
                    selectionColor changes the selection highlight. cursorColor controls
                    the cursor color on Android.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Custom selection and cursor color"
                    selectionColor="#007AFF"
                    cursorColor="#007AFF"
                />
            </ExampleCard>

            <ExampleCard title="24. onFocus and onBlur">
                <TextInput
                    style={styles.input}
                    placeholder="Focus and blur me"
                    onFocus={() => setFocusStatus('Input is focused.')}
                    onBlur={() => setFocusStatus('Input lost focus.')}
                />

                <Text style={styles.statusText}>{focusStatus}</Text>
            </ExampleCard>

            <ExampleCard title="25. onSubmitEditing">
                <Text style={styles.explanationText}>
                    onSubmitEditing runs when the user presses the submit key on the keyboard.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Type and press submit"
                    value={submitText}
                    onChangeText={setSubmitText}
                    returnKeyType="done"
                    onSubmitEditing={() => Alert.alert('Submitted', submitText)}
                />
            </ExampleCard>

            <ExampleCard title="26. returnKeyType">
                <Text style={styles.explanationText}>
                    returnKeyType changes the keyboard return key label.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="returnKeyType done"
                    returnKeyType="done"
                />

                <TextInput
                    style={styles.input}
                    placeholder="returnKeyType search"
                    returnKeyType="search"
                />

                <TextInput
                    style={styles.input}
                    placeholder="returnKeyType next"
                    returnKeyType="next"
                />
            </ExampleCard>

            <ExampleCard title="27. blurOnSubmit">
                <Text style={styles.explanationText}>
                    blurOnSubmit controls whether the input loses focus after submit.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Submit will blur"
                    blurOnSubmit
                    returnKeyType="done"
                />
            </ExampleCard>

            <ExampleCard title="28. enablesReturnKeyAutomatically iOS">
                <Text style={styles.explanationText}>
                    enablesReturnKeyAutomatically disables the return key until text is entered on iOS.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Return key waits for text on iOS"
                    enablesReturnKeyAutomatically
                />
            </ExampleCard>

            <ExampleCard title="29. onChange">
                <Text style={styles.explanationText}>
                    onChange gives the full native event. onChangeText gives only the text.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Type to fire onChange"
                    onChange={(event) => {
                        setEventText(`onChange text: ${event.nativeEvent.text}`);
                    }}
                />

                <Text style={styles.statusText}>{eventText}</Text>
            </ExampleCard>

            <ExampleCard title="30. onEndEditing">
                <Text style={styles.explanationText}>
                    onEndEditing runs when editing finishes.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="End editing to trigger event"
                    onEndEditing={(event) => {
                        Alert.alert('Editing ended', event.nativeEvent.text);
                    }}
                />
            </ExampleCard>

            <ExampleCard title="31. onKeyPress">
                <Text style={styles.explanationText}>
                    onKeyPress can detect key presses such as Backspace or Enter.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Press keys here"
                    onKeyPress={(event) => {
                        setEventText(`Last key: ${event.nativeEvent.key}`);
                    }}
                />

                <Text style={styles.statusText}>{eventText}</Text>
            </ExampleCard>

            <ExampleCard title="32. onSelectionChange">
                <Text style={styles.explanationText}>
                    onSelectionChange tracks cursor or selection position.
                </Text>

                <TextInput
                    style={styles.input}
                    defaultValue="Move the cursor in this text"
                    onSelectionChange={(event) => {
                        const { start, end } = event.nativeEvent.selection;
                        setSelectionText(`Selection start: ${start}, end: ${end}`);
                    }}
                />

                <Text style={styles.statusText}>{selectionText}</Text>
            </ExampleCard>

            <ExampleCard title="33. Programmatic focus and blur">
                <Text style={styles.explanationText}>
                    A ref can call focus or blur on the TextInput.
                </Text>

                <TextInput
                    ref={focusInputRef}
                    style={styles.input}
                    placeholder="Controlled by buttons below"
                />

                <View style={styles.buttonRow}>
                    <Pressable
                        style={styles.smallButton}
                        onPress={() => focusInputRef.current?.focus()}
                    >
                        <Text style={styles.buttonText}>Focus</Text>
                    </Pressable>

                    <Pressable
                        style={styles.smallButton}
                        onPress={() => focusInputRef.current?.blur()}
                    >
                        <Text style={styles.buttonText}>Blur</Text>
                    </Pressable>
                </View>
            </ExampleCard>

            <ExampleCard title="34. Keyboard.dismiss">
                <Text style={styles.explanationText}>
                    Keyboard.dismiss closes the keyboard from code.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Open keyboard, then dismiss"
                />

                <Pressable style={styles.secondaryButton} onPress={Keyboard.dismiss}>
                    <Text style={styles.secondaryButtonText}>Dismiss Keyboard</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="35. Search input pattern">
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={setSearchText}
                    returnKeyType="search"
                    keyboardType="web-search"
                    autoCapitalize="none"
                    clearButtonMode="while-editing"
                />

                <Text style={styles.statusText}>Searching for: {searchText}</Text>
            </ExampleCard>

            <ExampleCard title="36. Label plus input pattern">
                <Text style={styles.label}>First Name</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter first name"
                    autoCapitalize="words"
                />
            </ExampleCard>

            <ExampleCard title="37. Input with error message">
                <TextInput
                    style={[styles.input, styles.errorInput]}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.errorText}>Please enter a valid email address.</Text>
            </ExampleCard>

            <ExampleCard title="38. accessibilityLabel">
                <Text style={styles.explanationText}>
                    accessibilityLabel helps screen readers describe the input.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Accessible email input"
                    accessibilityLabel="Email address input"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </ExampleCard>

            <ExampleCard title="39. testID">
                <Text style={styles.explanationText}>
                    testID gives the input an identifier for automated tests.
                </Text>

                <TextInput
                    testID="email-input"
                    style={styles.input}
                    placeholder="Input with testID"
                />
            </ExampleCard>

            <ExampleCard title="40. Common mistake, missing onChangeText">
                <Text style={styles.warningText}>
                    If you use value but do not update it with onChangeText, the input
                    may appear frozen.
                </Text>

                <Text style={styles.codeText}>
                    Wrong: {'<TextInput value={name} />'}
                </Text>

                <Text style={styles.codeText}>
                    Correct: {'<TextInput value={name} onChangeText={setName} />'}
                </Text>
            </ExampleCard>

            <ExampleCard title="41. Common mistake, using number state directly">
                <Text style={styles.warningText}>
                    TextInput values should usually be strings. Convert to a number only
                    when you need to calculate.
                </Text>

                <Text style={styles.codeText}>
                    Better: const numberValue = Number(textValue);
                </Text>
            </ExampleCard>

            <ExampleCard title="42. Common mistake, multiline border issues">
                <Text style={styles.warningText}>
                    Some border styles behave differently with multiline inputs. If a
                    specific border side does not work, wrap the TextInput inside a View.
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

export default TextInputPage;

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

    multilineInput: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        color: '#222',
        minHeight: 120,
        textAlignVertical: 'top',
    },

    disabledInput: {
        backgroundColor: '#eee',
        color: '#777',
    },

    searchInput: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 999,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        color: '#222',
    },

    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },

    errorInput: {
        borderColor: '#D32F2F',
        backgroundColor: '#fff7f7',
    },

    errorText: {
        fontSize: 14,
        color: '#D32F2F',
        fontWeight: 'bold',
    },

    statusText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },

    buttonRow: {
        flexDirection: 'row',
        gap: 10,
    },

    smallButton: {
        flex: 1,
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