import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const TextPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Link href="/" style={styles.backLink}>
                Back Home
            </Link>

            <Text style={styles.pageTitle}>Text Component Reference</Text>

            <Text style={styles.introText}>
                The Text component is used to display words, labels, titles, paragraphs,
                clickable text, and nested text. This page shows common Text props and
                styling attributes.
            </Text>

            <ExampleCard title="1. Basic Text">
                <Text>This is basic text.</Text>
            </ExampleCard>

            <ExampleCard title="2. fontSize">
                <Text style={styles.fontSmall}>Small text, fontSize 12</Text>
                <Text style={styles.fontMedium}>Medium text, fontSize 18</Text>
                <Text style={styles.fontLarge}>Large text, fontSize 28</Text>
            </ExampleCard>

            <ExampleCard title="3. color">
                <Text style={styles.blueText}>Blue text</Text>
                <Text style={styles.redText}>Red text</Text>
                <Text style={styles.greenText}>Green text</Text>
            </ExampleCard>

            <ExampleCard title="4. fontWeight">
                <Text style={styles.normalWeight}>Normal weight</Text>
                <Text style={styles.boldWeight}>Bold weight</Text>
                <Text style={styles.extraBoldWeight}>Extra bold weight</Text>
            </ExampleCard>

            <ExampleCard title="5. fontStyle">
                <Text style={styles.normalStyle}>Normal font style</Text>
                <Text style={styles.italicStyle}>Italic font style</Text>
            </ExampleCard>

            <ExampleCard title="6. textAlign">
                <Text style={styles.alignLeft}>Left aligned text</Text>
                <Text style={styles.alignCenter}>Center aligned text</Text>
                <Text style={styles.alignRight}>Right aligned text</Text>
            </ExampleCard>

            <ExampleCard title="7. lineHeight">
                <Text style={styles.lineHeightText}>
                    This paragraph uses lineHeight. Line height controls the vertical
                    spacing between lines of text. It is useful for longer paragraphs
                    because it improves readability.
                </Text>
            </ExampleCard>

            <ExampleCard title="8. letterSpacing">
                <Text style={styles.letterSpacingText}>
                    Spaced out letters
                </Text>
            </ExampleCard>

            <ExampleCard title="9. textDecorationLine">
                <Text style={styles.underlineText}>Underlined text</Text>
                <Text style={styles.lineThroughText}>Line through text</Text>
                <Text style={styles.underlineLineThroughText}>
                    Underline and line through
                </Text>
            </ExampleCard>

            <ExampleCard title="10. textTransform">
                <Text style={styles.uppercaseText}>this becomes uppercase</Text>
                <Text style={styles.lowercaseText}>THIS BECOMES LOWERCASE</Text>
                <Text style={styles.capitalizeText}>this becomes capitalized</Text>
            </ExampleCard>

            <ExampleCard title="11. numberOfLines">
                <Text numberOfLines={1} style={styles.paragraphText}>
                    This is a long sentence that will be limited to one line. If the text
                    is too long, React Native will cut it off with an ellipsis.
                </Text>
            </ExampleCard>

            <ExampleCard title="12. ellipsizeMode">
                <Text numberOfLines={1} ellipsizeMode="head" style={styles.paragraphText}>
                    Head ellipsis cuts text from the beginning of the sentence.
                </Text>

                <Text numberOfLines={1} ellipsizeMode="middle" style={styles.paragraphText}>
                    Middle ellipsis cuts text from the middle of the sentence.
                </Text>

                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.paragraphText}>
                    Tail ellipsis cuts text from the end of the sentence.
                </Text>
            </ExampleCard>

            <ExampleCard title="13. selectable">
                <Text selectable style={styles.paragraphText}>
                    This text can be selected and copied by the user.
                </Text>
            </ExampleCard>

            <ExampleCard title="14. onPress">
                <Text
                    style={styles.clickableText}
                    onPress={() => Alert.alert('Text Pressed', 'You pressed the Text component.')}
                >
                    Press this text
                </Text>
            </ExampleCard>

            <ExampleCard title="15. Nested Text">
                <Text style={styles.paragraphText}>
                    This is normal text, but this part is{' '}
                    <Text style={styles.boldWeight}>bold</Text>, this part is{' '}
                    <Text style={styles.blueText}>blue</Text>, and this part is{' '}
                    <Text style={styles.italicStyle}>italic</Text>.
                </Text>
            </ExampleCard>

            <ExampleCard title="16. adjustsFontSizeToFit">
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.bigLimitedText}
                >
                    This text shrinks to fit one line.
                </Text>
            </ExampleCard>

            <ExampleCard title="17. minimumFontScale">
                <Text
                    adjustsFontSizeToFit
                    minimumFontScale={0.5}
                    numberOfLines={1}
                    style={styles.bigLimitedText}
                >
                    This text can shrink down to half size if needed.
                </Text>
            </ExampleCard>

            <ExampleCard title="18. allowFontScaling">
                <Text allowFontScaling={true} style={styles.paragraphText}>
                    This text allows accessibility font scaling.
                </Text>

                <Text allowFontScaling={false} style={styles.paragraphText}>
                    This text does not allow accessibility font scaling.
                </Text>
            </ExampleCard>

            <ExampleCard title="19. textShadow">
                <Text style={styles.shadowText}>
                    Text with shadow
                </Text>
            </ExampleCard>

            <ExampleCard title="20. Common mistake">
                <Text style={styles.warningText}>
                    Plain words cannot be placed directly inside a View. Text must be
                    wrapped in a Text component.
                </Text>

                <Text style={styles.codeText}>
                    Wrong: &lt;View&gt;Hello&lt;/View&gt;
                </Text>

                <Text style={styles.codeText}>
                    Correct: &lt;View&gt;&lt;Text&gt;Hello&lt;/Text&gt;&lt;/View&gt;
                </Text>
            </ExampleCard>
        </ScrollView>
    );
};

const ExampleCard = ({ title, children }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={styles.exampleArea}>
                {children}
            </View>
        </View>
    );
};

export default TextPage;

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
        gap: 8,
    },

    fontSmall: {
        fontSize: 12,
    },

    fontMedium: {
        fontSize: 18,
    },

    fontLarge: {
        fontSize: 28,
    },

    blueText: {
        color: '#007AFF',
    },

    redText: {
        color: '#D32F2F',
    },

    greenText: {
        color: '#2E7D32',
    },

    normalWeight: {
        fontWeight: 'normal',
    },

    boldWeight: {
        fontWeight: 'bold',
    },

    extraBoldWeight: {
        fontWeight: '900',
    },

    normalStyle: {
        fontStyle: 'normal',
    },

    italicStyle: {
        fontStyle: 'italic',
    },

    alignLeft: {
        textAlign: 'left',
        backgroundColor: '#eee',
        padding: 6,
    },

    alignCenter: {
        textAlign: 'center',
        backgroundColor: '#eee',
        padding: 6,
    },

    alignRight: {
        textAlign: 'right',
        backgroundColor: '#eee',
        padding: 6,
    },

    lineHeightText: {
        fontSize: 16,
        lineHeight: 30,
        color: '#333',
    },

    letterSpacingText: {
        fontSize: 18,
        letterSpacing: 4,
    },

    underlineText: {
        textDecorationLine: 'underline',
    },

    lineThroughText: {
        textDecorationLine: 'line-through',
    },

    underlineLineThroughText: {
        textDecorationLine: 'underline line-through',
    },

    uppercaseText: {
        textTransform: 'uppercase',
    },

    lowercaseText: {
        textTransform: 'lowercase',
    },

    capitalizeText: {
        textTransform: 'capitalize',
    },

    paragraphText: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },

    clickableText: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    bigLimitedText: {
        fontSize: 36,
        color: '#333',
        backgroundColor: '#eee',
        padding: 8,
    },

    shadowText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222',
        textShadowColor: '#999',
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 3,
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
    },
});