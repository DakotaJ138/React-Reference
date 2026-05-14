import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const ViewPage = () => {
    const [layoutText, setLayoutText] = useState('Tap layout example to measure it.');
    const [touchText, setTouchText] = useState('Touch responder has not fired yet.');

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Link href="/" style={styles.backLink}>
                Back Home
            </Link>

            <Text style={styles.pageTitle}>View Component Reference</Text>

            <Text style={styles.introText}>
                View is the main layout container in React Native. It is used for
                grouping components, creating rows and columns, adding spacing,
                creating cards, controlling alignment, positioning elements, and
                building reusable layout patterns.
            </Text>

            <ExampleCard title="1. Basic View">
                <View style={styles.basicBox}>
                    <Text>Basic View container</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="2. flex">
                <Text style={styles.explanationText}>
                    flex controls how much available space a View takes.
                </Text>

                <View style={styles.flexDemoContainer}>
                    <View style={styles.flexOneBox}>
                        <Text>flex: 1</Text>
                    </View>

                    <View style={styles.flexTwoBox}>
                        <Text>flex: 2</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="3. flexDirection">
                <Text style={styles.explanationText}>
                    React Native uses column layout by default. flexDirection row
                    places children beside each other.
                </Text>

                <View style={styles.rowExample}>
                    <SmallBox label="1" />
                    <SmallBox label="2" />
                    <SmallBox label="3" />
                </View>

                <View style={styles.columnExample}>
                    <SmallBox label="1" />
                    <SmallBox label="2" />
                    <SmallBox label="3" />
                </View>
            </ExampleCard>

            <ExampleCard title="4. justifyContent">
                <Text style={styles.explanationText}>
                    justifyContent controls alignment on the main axis.
                </Text>

                <Text style={styles.smallLabel}>center</Text>
                <View style={styles.justifyCenter}>
                    <SmallBox label="A" />
                    <SmallBox label="B" />
                </View>

                <Text style={styles.smallLabel}>space-between</Text>
                <View style={styles.justifySpaceBetween}>
                    <SmallBox label="A" />
                    <SmallBox label="B" />
                </View>

                <Text style={styles.smallLabel}>space-around</Text>
                <View style={styles.justifySpaceAround}>
                    <SmallBox label="A" />
                    <SmallBox label="B" />
                </View>
            </ExampleCard>

            <ExampleCard title="5. alignItems">
                <Text style={styles.explanationText}>
                    alignItems controls alignment on the cross axis.
                </Text>

                <Text style={styles.smallLabel}>flex-start</Text>
                <View style={styles.alignStart}>
                    <WideBox label="Start" />
                </View>

                <Text style={styles.smallLabel}>center</Text>
                <View style={styles.alignCenter}>
                    <WideBox label="Center" />
                </View>

                <Text style={styles.smallLabel}>flex-end</Text>
                <View style={styles.alignEnd}>
                    <WideBox label="End" />
                </View>
            </ExampleCard>

            <ExampleCard title="6. alignSelf">
                <Text style={styles.explanationText}>
                    alignSelf overrides alignItems for one child.
                </Text>

                <View style={styles.alignSelfContainer}>
                    <SmallBox label="Normal" />
                    <View style={[styles.smallBox, styles.alignSelfEnd]}>
                        <Text>alignSelf</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="7. flexWrap">
                <Text style={styles.explanationText}>
                    flexWrap allows children to move onto a new line when they do
                    not fit.
                </Text>

                <View style={styles.wrapContainer}>
                    <SmallBox label="1" />
                    <SmallBox label="2" />
                    <SmallBox label="3" />
                    <SmallBox label="4" />
                    <SmallBox label="5" />
                    <SmallBox label="6" />
                </View>
            </ExampleCard>

            <ExampleCard title="8. gap, rowGap, and columnGap">
                <Text style={styles.explanationText}>
                    gap adds spacing between child components without adding margin
                    to every child.
                </Text>

                <View style={styles.gapContainer}>
                    <SmallBox label="1" />
                    <SmallBox label="2" />
                    <SmallBox label="3" />
                    <SmallBox label="4" />
                </View>
            </ExampleCard>

            <ExampleCard title="9. width and height">
                <View style={styles.fixedSizeBox}>
                    <Text>150 x 80</Text>
                </View>

                <View style={styles.percentWidthBox}>
                    <Text>width: 100%</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="10. minWidth, maxWidth, minHeight, and maxHeight">
                <View style={styles.minMaxBox}>
                    <Text>This box has min and max size limits.</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="11. aspectRatio">
                <Text style={styles.explanationText}>
                    aspectRatio keeps width and height proportional.
                </Text>

                <View style={styles.aspectRatioBox}>
                    <Text>aspectRatio: 1</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="12. margin">
                <Text style={styles.explanationText}>
                    margin creates space outside the View.
                </Text>

                <View style={styles.marginOuter}>
                    <View style={styles.marginInner}>
                        <Text>Margin example</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="13. padding">
                <Text style={styles.explanationText}>
                    padding creates space inside the View.
                </Text>

                <View style={styles.paddingBox}>
                    <Text>Padding keeps content away from the edge.</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="14. backgroundColor">
                <View style={styles.backgroundBox}>
                    <Text>Background color</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="15. borderWidth, borderColor, and borderRadius">
                <View style={styles.borderBox}>
                    <Text>Border example</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="16. borderStyle">
                <View style={styles.solidBorderBox}>
                    <Text>solid</Text>
                </View>

                <View style={styles.dashedBorderBox}>
                    <Text>dashed</Text>
                </View>

                <View style={styles.dottedBorderBox}>
                    <Text>dotted</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="17. opacity">
                <View style={styles.opacityBox}>
                    <Text>opacity: 0.5</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="18. overflow">
                <Text style={styles.explanationText}>
                    overflow hidden clips child content that goes outside the parent.
                </Text>

                <View style={styles.overflowHiddenBox}>
                    <View style={styles.overflowChildBox}>
                        <Text>Clipped</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="19. position relative">
                <Text style={styles.explanationText}>
                    relative positioning keeps the View in normal layout but offsets it.
                </Text>

                <View style={styles.positionDemoBox}>
                    <View style={styles.relativeBox}>
                        <Text>relative</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="20. position absolute">
                <Text style={styles.explanationText}>
                    absolute positioning places a child relative to its nearest
                    positioned parent.
                </Text>

                <View style={styles.absoluteParent}>
                    <Text>Parent View</Text>

                    <View style={styles.absoluteChild}>
                        <Text>absolute</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="21. zIndex">
                <Text style={styles.explanationText}>
                    zIndex controls which overlapping View appears on top.
                </Text>

                <View style={styles.zIndexParent}>
                    <View style={styles.zBoxOne}>
                        <Text>1</Text>
                    </View>

                    <View style={styles.zBoxTwo}>
                        <Text>2</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="22. shadow and elevation">
                <Text style={styles.explanationText}>
                    iOS uses shadow properties. Android commonly uses elevation.
                </Text>

                <View style={styles.shadowBox}>
                    <Text>Shadow card</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="23. transform scale">
                <View style={styles.transformScaleBox}>
                    <Text>scale</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="24. transform rotate">
                <View style={styles.transformRotateBox}>
                    <Text>rotate</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="25. transform translate">
                <View style={styles.transformTranslateContainer}>
                    <View style={styles.transformTranslateBox}>
                        <Text>translate</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="26. display">
                <Text style={styles.explanationText}>
                    display none hides the View from the layout.
                </Text>

                <View style={styles.displayFlexBox}>
                    <Text>display: flex</Text>
                </View>

                <View style={styles.displayNoneBox}>
                    <Text>You should not see this.</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="27. onLayout">
                <Text style={styles.explanationText}>
                    onLayout runs when the View is measured on the screen.
                </Text>

                <View
                    style={styles.onLayoutBox}
                    onLayout={(event) => {
                        const { width, height } = event.nativeEvent.layout;
                        setLayoutText(`Measured width: ${Math.round(width)}, height: ${Math.round(height)}`);
                    }}
                >
                    <Text>{layoutText}</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="28. pointerEvents">
                <Text style={styles.explanationText}>
                    pointerEvents controls whether the View can be the target of touch events.
                </Text>

                <View pointerEvents="none" style={styles.pointerEventsBox}>
                    <Text>This View ignores touch events.</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="29. Touch responder props">
                <Text style={styles.explanationText}>
                    View can handle low level touch responder events. For normal buttons,
                    Pressable is usually the better choice.
                </Text>

                <View
                    style={styles.touchResponderBox}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={() => {
                        setTouchText('View responder fired.');
                    }}
                >
                    <Text>{touchText}</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="30. accessibility props">
                <Text style={styles.explanationText}>
                    accessible and accessibilityLabel help screen readers understand
                    what the View represents.
                </Text>

                <View
                    accessible
                    accessibilityLabel="Example accessibility container"
                    style={styles.accessibilityBox}
                >
                    <Text>Accessible View</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="31. testID">
                <Text style={styles.explanationText}>
                    testID gives the View an identifier for automated testing.
                    It does not visually change the app.
                </Text>

                <View testID="view-example-card" style={styles.testIdBox}>
                    <Text>View with testID</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="32. Nested Views">
                <Text style={styles.explanationText}>
                    Most real layouts are built by nesting Views inside Views.
                </Text>

                <View style={styles.profileCard}>
                    <View style={styles.avatarPlaceholder}>
                        <Text>IMG</Text>
                    </View>

                    <View style={styles.profileTextArea}>
                        <Text style={styles.profileName}>UserName</Text>
                        <Text style={styles.profileSubtitle}>React Native learner</Text>
                    </View>
                </View>
            </ExampleCard>

            <ExampleCard title="33. Common mistake">
                <Text style={styles.warningText}>
                    Plain text cannot be placed directly inside a View. Use Text inside View.
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

const SmallBox = ({ label }) => {
    return (
        <View style={styles.smallBox}>
            <Text>{label}</Text>
        </View>
    );
};

const WideBox = ({ label }) => {
    return (
        <View style={styles.wideBox}>
            <Text>{label}</Text>
        </View>
    );
};

export default ViewPage;

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

    smallLabel: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#555',
        marginTop: 6,
    },

    basicBox: {
        backgroundColor: '#e6f0ff',
        padding: 16,
        borderRadius: 8,
    },

    flexDemoContainer: {
        height: 90,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
    },

    flexOneBox: {
        flex: 1,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    flexTwoBox: {
        flex: 2,
        backgroundColor: '#b8dcff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    rowExample: {
        flexDirection: 'row',
        gap: 8,
        backgroundColor: '#eee',
        padding: 8,
    },

    columnExample: {
        flexDirection: 'column',
        gap: 8,
        backgroundColor: '#eee',
        padding: 8,
    },

    smallBox: {
        width: 60,
        height: 45,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    wideBox: {
        width: 120,
        height: 45,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    justifyCenter: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#eee',
        padding: 8,
    },

    justifySpaceBetween: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 8,
    },

    justifySpaceAround: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 8,
    },

    alignStart: {
        height: 70,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#eee',
        padding: 8,
    },

    alignCenter: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        padding: 8,
    },

    alignEnd: {
        height: 70,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#eee',
        padding: 8,
    },

    alignSelfContainer: {
        height: 120,
        backgroundColor: '#eee',
        padding: 8,
        gap: 8,
        alignItems: 'flex-start',
    },

    alignSelfEnd: {
        alignSelf: 'flex-end',
    },

    wrapContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        backgroundColor: '#eee',
        padding: 8,
    },

    gapContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        backgroundColor: '#eee',
        padding: 8,
    },

    fixedSizeBox: {
        width: 150,
        height: 80,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    percentWidthBox: {
        width: '100%',
        height: 55,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    minMaxBox: {
        minWidth: 120,
        maxWidth: 240,
        minHeight: 60,
        maxHeight: 100,
        backgroundColor: '#d9ecff',
        padding: 12,
        borderRadius: 8,
    },

    aspectRatioBox: {
        width: 120,
        aspectRatio: 1,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    marginOuter: {
        backgroundColor: '#eee',
        padding: 4,
    },

    marginInner: {
        margin: 20,
        backgroundColor: '#d9ecff',
        padding: 12,
        borderRadius: 8,
    },

    paddingBox: {
        backgroundColor: '#d9ecff',
        padding: 24,
        borderRadius: 8,
    },

    backgroundBox: {
        backgroundColor: '#d9ecff',
        padding: 16,
        borderRadius: 8,
    },

    borderBox: {
        borderWidth: 2,
        borderColor: '#007AFF',
        borderRadius: 12,
        padding: 16,
    },

    solidBorderBox: {
        borderWidth: 2,
        borderColor: '#007AFF',
        borderStyle: 'solid',
        padding: 12,
        borderRadius: 8,
    },

    dashedBorderBox: {
        borderWidth: 2,
        borderColor: '#007AFF',
        borderStyle: 'dashed',
        padding: 12,
        borderRadius: 8,
    },

    dottedBorderBox: {
        borderWidth: 2,
        borderColor: '#007AFF',
        borderStyle: 'dotted',
        padding: 12,
        borderRadius: 8,
    },

    opacityBox: {
        opacity: 0.5,
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
    },

    overflowHiddenBox: {
        width: 150,
        height: 70,
        overflow: 'hidden',
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    overflowChildBox: {
        width: 120,
        height: 80,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        marginTop: 20,
    },

    positionDemoBox: {
        height: 90,
        backgroundColor: '#eee',
        padding: 8,
    },

    relativeBox: {
        position: 'relative',
        top: 15,
        left: 30,
        width: 100,
        height: 45,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    absoluteParent: {
        height: 130,
        backgroundColor: '#eee',
        padding: 12,
        borderRadius: 8,
    },

    absoluteChild: {
        position: 'absolute',
        right: 12,
        bottom: 12,
        backgroundColor: '#d9ecff',
        padding: 12,
        borderRadius: 8,
    },

    zIndexParent: {
        height: 120,
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    zBoxOne: {
        position: 'absolute',
        left: 40,
        top: 20,
        width: 90,
        height: 70,
        backgroundColor: '#b8dcff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        zIndex: 1,
    },

    zBoxTwo: {
        position: 'absolute',
        left: 90,
        top: 40,
        width: 90,
        height: 70,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        zIndex: 2,
    },

    shadowBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        elevation: 5,
    },

    transformScaleBox: {
        width: 120,
        height: 55,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        transform: [
            { scale: 1.1 },
        ],
    },

    transformRotateBox: {
        width: 120,
        height: 55,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        transform: [
            { rotate: '5deg' },
        ],
    },

    transformTranslateContainer: {
        height: 90,
        backgroundColor: '#eee',
        borderRadius: 8,
        padding: 8,
    },

    transformTranslateBox: {
        width: 120,
        height: 55,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        transform: [
            { translateX: 40 },
            { translateY: 15 },
        ],
    },

    displayFlexBox: {
        display: 'flex',
        backgroundColor: '#d9ecff',
        padding: 12,
        borderRadius: 8,
    },

    displayNoneBox: {
        display: 'none',
        backgroundColor: '#ffcccc',
        padding: 12,
        borderRadius: 8,
    },

    onLayoutBox: {
        backgroundColor: '#d9ecff',
        padding: 16,
        borderRadius: 8,
    },

    pointerEventsBox: {
        backgroundColor: '#eee',
        padding: 16,
        borderRadius: 8,
    },

    touchResponderBox: {
        backgroundColor: '#d9ecff',
        padding: 18,
        borderRadius: 8,
        alignItems: 'center',
    },

    accessibilityBox: {
        backgroundColor: '#d9ecff',
        padding: 16,
        borderRadius: 8,
    },

    testIdBox: {
        backgroundColor: '#d9ecff',
        padding: 16,
        borderRadius: 8,
    },

    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    avatarPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileTextArea: {
        flex: 1,
    },

    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },

    profileSubtitle: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
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