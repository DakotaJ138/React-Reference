import React, { useRef, useState } from 'react';
import {
    Alert,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable,
} from 'react-native';
import { Link } from 'expo-router';

const ScrollViewPage = () => {
    const scrollRef = useRef(null);

    const [refreshing, setRefreshing] = useState(false);
    const [scrollText, setScrollText] = useState('Scroll position has not changed yet.');
    const [dragText, setDragText] = useState('Drag events have not fired yet.');
    const [keyboardText, setKeyboardText] = useState('');

    const handleRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            Alert.alert('Refresh complete', 'The ScrollView refresh finished.');
        }, 1000);
    };

    return (
        <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.screen}
            showsVerticalScrollIndicator={true}
        >
            <Link href="/" style={styles.backLink}>
                Back Home
            </Link>

            <Text style={styles.pageTitle}>ScrollView Component Reference</Text>

            <Text style={styles.introText}>
                ScrollView is a scrollable container. It is useful when a page has
                mixed content, forms, cards, images, text sections, or small sets of
                examples. For long repeated lists, use FlatList instead.
            </Text>

            <ExampleCard title="1. Basic ScrollView">
                <Text style={styles.explanationText}>
                    This whole page is inside a ScrollView. When the content is taller
                    than the screen, the user can scroll vertically.
                </Text>

                <View style={styles.demoBox}>
                    <Text>Basic scrollable content</Text>
                </View>
            </ExampleCard>

            <ExampleCard title="2. contentContainerStyle">
                <Text style={styles.explanationText}>
                    style controls the ScrollView itself. contentContainerStyle controls
                    the content inside the ScrollView.
                </Text>

                <Text style={styles.codeText}>
                    {'<ScrollView contentContainerStyle={styles.screen}>...</ScrollView>'}
                </Text>
            </ExampleCard>

            <ExampleCard title="3. style versus contentContainerStyle">
                <Text style={styles.explanationText}>
                    Use style for the outer scroll container. Use contentContainerStyle
                    for padding, gaps, and layout of the scrollable content.
                </Text>

                <Text style={styles.codeText}>
                    {'style={styles.scrollView}'}
                </Text>

                <Text style={styles.codeText}>
                    {'contentContainerStyle={styles.scrollContent}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="4. Vertical ScrollView">
                <Text style={styles.explanationText}>
                    Vertical scrolling is the default behavior.
                </Text>

                <ScrollView style={styles.miniScrollBox}>
                    <MiniItem label="Vertical item 1" />
                    <MiniItem label="Vertical item 2" />
                    <MiniItem label="Vertical item 3" />
                    <MiniItem label="Vertical item 4" />
                    <MiniItem label="Vertical item 5" />
                    <MiniItem label="Vertical item 6" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="5. horizontal">
                <Text style={styles.explanationText}>
                    horizontal changes the ScrollView from vertical scrolling to sideways scrolling.
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={styles.horizontalContent}
                >
                    <HorizontalItem label="One" />
                    <HorizontalItem label="Two" />
                    <HorizontalItem label="Three" />
                    <HorizontalItem label="Four" />
                    <HorizontalItem label="Five" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="6. showsVerticalScrollIndicator">
                <Text style={styles.explanationText}>
                    showsVerticalScrollIndicator controls whether the vertical scrollbar is visible.
                </Text>

                <ScrollView
                    style={styles.miniScrollBox}
                    showsVerticalScrollIndicator={false}
                >
                    <MiniItem label="No visible scrollbar 1" />
                    <MiniItem label="No visible scrollbar 2" />
                    <MiniItem label="No visible scrollbar 3" />
                    <MiniItem label="No visible scrollbar 4" />
                    <MiniItem label="No visible scrollbar 5" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="7. showsHorizontalScrollIndicator">
                <Text style={styles.explanationText}>
                    showsHorizontalScrollIndicator controls the horizontal scrollbar.
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalContent}
                >
                    <HorizontalItem label="Hidden" />
                    <HorizontalItem label="Scroll" />
                    <HorizontalItem label="Indicator" />
                    <HorizontalItem label="Example" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="8. scrollEnabled">
                <Text style={styles.explanationText}>
                    scrollEnabled can turn scrolling on or off.
                </Text>

                <ScrollView
                    style={styles.miniScrollBox}
                    scrollEnabled={false}
                >
                    <MiniItem label="Scrolling disabled 1" />
                    <MiniItem label="Scrolling disabled 2" />
                    <MiniItem label="Scrolling disabled 3" />
                    <MiniItem label="Scrolling disabled 4" />
                    <MiniItem label="Scrolling disabled 5" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="9. pagingEnabled">
                <Text style={styles.explanationText}>
                    pagingEnabled makes the ScrollView snap page by page while swiping.
                </Text>

                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={styles.pagingContainer}
                >
                    <View style={styles.pageOne}>
                        <Text style={styles.pageText}>Page 1</Text>
                    </View>

                    <View style={styles.pageTwo}>
                        <Text style={styles.pageText}>Page 2</Text>
                    </View>

                    <View style={styles.pageThree}>
                        <Text style={styles.pageText}>Page 3</Text>
                    </View>
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="10. snapToInterval">
                <Text style={styles.explanationText}>
                    snapToInterval makes scrolling stop at set intervals. This is useful
                    for carousels.
                </Text>

                <ScrollView
                    horizontal
                    snapToInterval={140}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalContent}
                >
                    <SnapItem label="A" />
                    <SnapItem label="B" />
                    <SnapItem label="C" />
                    <SnapItem label="D" />
                    <SnapItem label="E" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="11. decelerationRate">
                <Text style={styles.explanationText}>
                    decelerationRate controls how quickly scrolling slows down after release.
                </Text>

                <Text style={styles.codeText}>
                    {'decelerationRate="fast"'}
                </Text>

                <Text style={styles.codeText}>
                    {'decelerationRate="normal"'}
                </Text>
            </ExampleCard>

            <ExampleCard title="12. bounces">
                <Text style={styles.explanationText}>
                    bounces controls the bounce effect on iOS. Android behavior is different.
                </Text>

                <ScrollView
                    style={styles.miniScrollBox}
                    bounces={false}
                >
                    <MiniItem label="Bounce disabled 1" />
                    <MiniItem label="Bounce disabled 2" />
                    <MiniItem label="Bounce disabled 3" />
                    <MiniItem label="Bounce disabled 4" />
                    <MiniItem label="Bounce disabled 5" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="13. RefreshControl">
                <Text style={styles.explanationText}>
                    refreshControl adds pull to refresh behavior.
                </Text>

                <ScrollView
                    style={styles.refreshBox}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                >
                    <MiniItem label="Pull down inside this box" />
                    <MiniItem label="RefreshControl example" />
                    <MiniItem label="Release to refresh" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="14. onScroll">
                <Text style={styles.explanationText}>
                    onScroll runs while the user scrolls. scrollEventThrottle controls
                    how often scroll events are sent.
                </Text>

                <ScrollView
                    style={styles.miniScrollBox}
                    onScroll={(event) => {
                        const y = event.nativeEvent.contentOffset.y;
                        setScrollText(`Vertical scroll Y: ${Math.round(y)}`);
                    }}
                    scrollEventThrottle={16}
                >
                    <MiniItem label="Scroll event 1" />
                    <MiniItem label="Scroll event 2" />
                    <MiniItem label="Scroll event 3" />
                    <MiniItem label="Scroll event 4" />
                    <MiniItem label="Scroll event 5" />
                    <MiniItem label="Scroll event 6" />
                </ScrollView>

                <Text style={styles.statusText}>{scrollText}</Text>
            </ExampleCard>

            <ExampleCard title="15. onScrollBeginDrag and onScrollEndDrag">
                <Text style={styles.explanationText}>
                    These events run when the user starts and ends dragging.
                </Text>

                <ScrollView
                    style={styles.miniScrollBox}
                    onScrollBeginDrag={() => setDragText('User started dragging.')}
                    onScrollEndDrag={() => setDragText('User stopped dragging.')}
                >
                    <MiniItem label="Drag event 1" />
                    <MiniItem label="Drag event 2" />
                    <MiniItem label="Drag event 3" />
                    <MiniItem label="Drag event 4" />
                    <MiniItem label="Drag event 5" />
                </ScrollView>

                <Text style={styles.statusText}>{dragText}</Text>
            </ExampleCard>

            <ExampleCard title="16. scrollTo with ref">
                <Text style={styles.explanationText}>
                    A ref lets you control the ScrollView from code. This button scrolls
                    this full page back to the top.
                </Text>

                <Pressable
                    style={styles.button}
                    onPress={() => {
                        scrollRef.current?.scrollTo({
                            y: 0,
                            animated: true,
                        });
                    }}
                >
                    <Text style={styles.buttonText}>Scroll Page To Top</Text>
                </Pressable>
            </ExampleCard>

            <ExampleCard title="17. keyboardShouldPersistTaps">
                <Text style={styles.explanationText}>
                    keyboardShouldPersistTaps controls whether taps are handled while the
                    keyboard is open. This is useful for forms inside ScrollView.
                </Text>

                <ScrollView
                    style={styles.formBox}
                    keyboardShouldPersistTaps="handled"
                >
                    <TextInput
                        style={styles.input}
                        placeholder="Tap here and type"
                        value={keyboardText}
                        onChangeText={setKeyboardText}
                    />

                    <Pressable
                        style={styles.button}
                        onPress={() => Alert.alert('Button Pressed', 'The button can handle taps while keyboard is open.')}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="18. keyboardDismissMode">
                <Text style={styles.explanationText}>
                    keyboardDismissMode controls whether the keyboard dismisses while scrolling.
                </Text>

                <Text style={styles.codeText}>
                    {'keyboardDismissMode="none"'}
                </Text>

                <Text style={styles.codeText}>
                    {'keyboardDismissMode="on-drag"'}
                </Text>

                <Text style={styles.codeText}>
                    {'keyboardDismissMode="interactive"'}
                </Text>
            </ExampleCard>

            <ExampleCard title="19. Sticky headers">
                <Text style={styles.explanationText}>
                    stickyHeaderIndices keeps selected child views stuck at the top while scrolling.
                </Text>

                <ScrollView
                    style={styles.stickyScrollBox}
                    stickyHeaderIndices={[0]}
                >
                    <View style={styles.stickyHeader}>
                        <Text style={styles.stickyHeaderText}>Sticky Header</Text>
                    </View>

                    <MiniItem label="Sticky item 1" />
                    <MiniItem label="Sticky item 2" />
                    <MiniItem label="Sticky item 3" />
                    <MiniItem label="Sticky item 4" />
                    <MiniItem label="Sticky item 5" />
                    <MiniItem label="Sticky item 6" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="20. nestedScrollEnabled Android">
                <Text style={styles.explanationText}>
                    nestedScrollEnabled allows nested scrolling on Android API 21 and newer.
                    Use it when a ScrollView is inside another scrollable parent.
                </Text>

                <ScrollView
                    nestedScrollEnabled
                    style={styles.miniScrollBox}
                >
                    <MiniItem label="Nested scroll item 1" />
                    <MiniItem label="Nested scroll item 2" />
                    <MiniItem label="Nested scroll item 3" />
                    <MiniItem label="Nested scroll item 4" />
                    <MiniItem label="Nested scroll item 5" />
                </ScrollView>
            </ExampleCard>

            <ExampleCard title="21. overScrollMode Android">
                <Text style={styles.explanationText}>
                    overScrollMode controls Android overscroll behavior.
                </Text>

                <Text style={styles.codeText}>
                    {'overScrollMode="auto"'}
                </Text>

                <Text style={styles.codeText}>
                    {'overScrollMode="always"'}
                </Text>

                <Text style={styles.codeText}>
                    {'overScrollMode="never"'}
                </Text>
            </ExampleCard>

            <ExampleCard title="22. contentInsetAdjustmentBehavior iOS">
                <Text style={styles.explanationText}>
                    contentInsetAdjustmentBehavior controls how iOS adjusts scroll content
                    around safe areas and navigation bars.
                </Text>

                <Text style={styles.codeText}>
                    {'contentInsetAdjustmentBehavior="automatic"'}
                </Text>

                <Text style={styles.codeText}>
                    {'contentInsetAdjustmentBehavior="never"'}
                </Text>
            </ExampleCard>

            <ExampleCard title="23. indicatorStyle iOS">
                <Text style={styles.explanationText}>
                    indicatorStyle controls the scrollbar indicator color style on iOS.
                </Text>

                <Text style={styles.codeText}>
                    {'indicatorStyle="default"'}
                </Text>

                <Text style={styles.codeText}>
                    {'indicatorStyle="black"'}
                </Text>

                <Text style={styles.codeText}>
                    {'indicatorStyle="white"'}
                </Text>
            </ExampleCard>

            <ExampleCard title="24. automaticallyAdjustKeyboardInsets iOS">
                <Text style={styles.explanationText}>
                    automaticallyAdjustKeyboardInsets lets iOS adjust the ScrollView
                    content when the keyboard appears.
                </Text>

                <Text style={styles.codeText}>
                    {'automaticallyAdjustKeyboardInsets={true}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="25. persistentScrollbar Android">
                <Text style={styles.explanationText}>
                    persistentScrollbar keeps the scrollbar visible on Android.
                </Text>

                <Text style={styles.codeText}>
                    {'persistentScrollbar={true}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="26. fadingEdgeLength Android">
                <Text style={styles.explanationText}>
                    fadingEdgeLength adds a fading edge effect on Android.
                </Text>

                <Text style={styles.codeText}>
                    {'fadingEdgeLength={80}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="27. centerContent iOS">
                <Text style={styles.explanationText}>
                    centerContent centers the content when it is smaller than the ScrollView.
                    This is iOS specific.
                </Text>

                <Text style={styles.codeText}>
                    {'centerContent={true}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="28. maintainVisibleContentPosition">
                <Text style={styles.explanationText}>
                    maintainVisibleContentPosition is useful for chat style screens where
                    new content is added while keeping the user near the same visible item.
                </Text>

                <Text style={styles.codeText}>
                    {'maintainVisibleContentPosition={{ minIndexForVisible: 0 }}'}
                </Text>
            </ExampleCard>

            <ExampleCard title="29. Common mistake, using ScrollView for huge lists">
                <Text style={styles.warningText}>
                    ScrollView renders all children at once. For large repeated lists,
                    use FlatList.
                </Text>

                <Text style={styles.codeText}>
                    Better for long lists: {'<FlatList data={items} renderItem={...} />'}
                </Text>
            </ExampleCard>

            <ExampleCard title="30. Common mistake, missing bounded height">
                <Text style={styles.warningText}>
                    ScrollView must have bounded height. If scrolling does not work,
                    check that parent containers use flex: 1 correctly.
                </Text>

                <Text style={styles.codeText}>
                    Parent screen: {'{ flex: 1 }'}
                </Text>
            </ExampleCard>

            <ExampleCard title="31. Common mistake, putting padding in the wrong place">
                <Text style={styles.warningText}>
                    If padding does not behave how you expect, move it from style to
                    contentContainerStyle.
                </Text>

                <Text style={styles.codeText}>
                    Better: {'<ScrollView contentContainerStyle={{ padding: 20 }} />'}
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

const MiniItem = ({ label }) => {
    return (
        <View style={styles.miniItem}>
            <Text style={styles.miniItemText}>{label}</Text>
        </View>
    );
};

const HorizontalItem = ({ label }) => {
    return (
        <View style={styles.horizontalItem}>
            <Text style={styles.horizontalItemText}>{label}</Text>
        </View>
    );
};

const SnapItem = ({ label }) => {
    return (
        <View style={styles.snapItem}>
            <Text style={styles.horizontalItemText}>{label}</Text>
        </View>
    );
};

export default ScrollViewPage;

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

    demoBox: {
        backgroundColor: '#d9ecff',
        padding: 16,
        borderRadius: 8,
    },

    miniScrollBox: {
        height: 170,
        backgroundColor: '#eee',
        borderRadius: 8,
        padding: 8,
    },

    miniItem: {
        backgroundColor: '#d9ecff',
        padding: 14,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    miniItemText: {
        fontSize: 15,
        color: '#222',
    },

    horizontalContent: {
        gap: 10,
        paddingVertical: 8,
    },

    horizontalItem: {
        width: 120,
        height: 90,
        backgroundColor: '#d9ecff',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    horizontalItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },

    pagingContainer: {
        width: '100%',
        height: 150,
        backgroundColor: '#eee',
        borderRadius: 12,
    },

    pageOne: {
        width: 300,
        height: 150,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    pageTwo: {
        width: 300,
        height: 150,
        backgroundColor: '#c8e6c9',
        alignItems: 'center',
        justifyContent: 'center',
    },

    pageThree: {
        width: 300,
        height: 150,
        backgroundColor: '#ffe0b2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    pageText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
    },

    snapItem: {
        width: 130,
        height: 90,
        backgroundColor: '#d9ecff',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#99cfff',
        marginRight: 10,
    },

    refreshBox: {
        height: 170,
        backgroundColor: '#eee',
        borderRadius: 8,
        padding: 8,
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

    formBox: {
        backgroundColor: '#eee',
        borderRadius: 8,
        padding: 10,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 10,
    },

    stickyScrollBox: {
        height: 220,
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    stickyHeader: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    stickyHeaderText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
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