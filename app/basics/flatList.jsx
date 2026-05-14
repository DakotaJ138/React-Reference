import React, { useRef, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Link } from 'expo-router';

const BASIC_DATA = [
    { id: '1', title: 'Apples' },
    { id: '2', title: 'Bananas' },
    { id: '3', title: 'Oranges' },
];

const LONG_DATA = Array.from({ length: 30 }, (_, index) => ({
    id: String(index + 1),
    title: `List Item ${index + 1}`,
}));

const GRID_DATA = [
    { id: '1', title: 'One' },
    { id: '2', title: 'Two' },
    { id: '3', title: 'Three' },
    { id: '4', title: 'Four' },
    { id: '5', title: 'Five' },
    { id: '6', title: 'Six' },
];

const HORIZONTAL_DATA = [
    { id: '1', title: 'Card 1' },
    { id: '2', title: 'Card 2' },
    { id: '3', title: 'Card 3' },
    { id: '4', title: 'Card 4' },
    { id: '5', title: 'Card 5' },
];

const ITEM_HEIGHT = 64;

const FlatListPage = () => {
    const scrollListRef = useRef(null);

    const [selectedId, setSelectedId] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [footerLoading, setFooterLoading] = useState(false);
    const [pagedData, setPagedData] = useState(LONG_DATA.slice(0, 8));
    const [viewableText, setViewableText] = useState('No viewable item event yet.');

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    const handleRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            Alert.alert('Refresh complete', 'The FlatList refreshed.');
        }, 1000);
    };

    const handleLoadMore = () => {
        if (footerLoading || pagedData.length >= LONG_DATA.length) {
            return;
        }

        setFooterLoading(true);

        setTimeout(() => {
            const nextItems = LONG_DATA.slice(pagedData.length, pagedData.length + 5);
            setPagedData([...pagedData, ...nextItems]);
            setFooterLoading(false);
        }, 700);
    };

    const renderExample = ({ item }) => {
        return item.component;
    };

    const examples = [
        {
            id: 'basic-flatlist',
            component: (
                <ExampleCard title="1. Basic FlatList">
                    <Text style={styles.explanationText}>
                        The three main props are data, renderItem, and keyExtractor.
                    </Text>

                    <FlatList
                        data={BASIC_DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'data-prop',
            component: (
                <ExampleCard title="2. data">
                    <Text style={styles.explanationText}>
                        data is the array of objects that FlatList renders.
                    </Text>

                    <Text style={styles.codeText}>
                        {'data={BASIC_DATA}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'render-item',
            component: (
                <ExampleCard title="3. renderItem">
                    <Text style={styles.explanationText}>
                        renderItem receives each item and returns the component that should
                        appear on the screen.
                    </Text>

                    <Text style={styles.codeText}>
                        {'renderItem={({ item }) => <Text>{item.title}</Text>}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'key-extractor',
            component: (
                <ExampleCard title="4. keyExtractor">
                    <Text style={styles.explanationText}>
                        keyExtractor gives every row a stable unique key. Do not use the
                        array index if items can be reordered, inserted, or deleted.
                    </Text>

                    <Text style={styles.codeText}>
                        {'keyExtractor={(item) => item.id}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'index',
            component: (
                <ExampleCard title="5. Using index">
                    <Text style={styles.explanationText}>
                        renderItem also gives you the index of the item.
                    </Text>

                    <FlatList
                        data={BASIC_DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>
                                    {index + 1}. {item.title}
                                </Text>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'item-separator',
            component: (
                <ExampleCard title="6. ItemSeparatorComponent">
                    <Text style={styles.explanationText}>
                        ItemSeparatorComponent renders between items, not above the first
                        item or below the last item.
                    </Text>

                    <FlatList
                        data={BASIC_DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        scrollEnabled={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'header',
            component: (
                <ExampleCard title="7. ListHeaderComponent">
                    <Text style={styles.explanationText}>
                        ListHeaderComponent renders above all list items.
                    </Text>

                    <FlatList
                        data={BASIC_DATA}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={() => (
                            <View style={styles.listHeader}>
                                <Text style={styles.listHeaderText}>Fruit List Header</Text>
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'footer',
            component: (
                <ExampleCard title="8. ListFooterComponent">
                    <Text style={styles.explanationText}>
                        ListFooterComponent renders below all list items.
                    </Text>

                    <FlatList
                        data={BASIC_DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        )}
                        ListFooterComponent={() => (
                            <View style={styles.listFooter}>
                                <Text style={styles.listFooterText}>End of list</Text>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'empty',
            component: (
                <ExampleCard title="9. ListEmptyComponent">
                    <Text style={styles.explanationText}>
                        ListEmptyComponent renders when data is an empty array.
                    </Text>

                    <FlatList
                        data={[]}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Text>{item.title}</Text>
                        )}
                        ListEmptyComponent={() => (
                            <View style={styles.emptyBox}>
                                <Text style={styles.emptyText}>No items found.</Text>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'horizontal',
            component: (
                <ExampleCard title="10. horizontal">
                    <Text style={styles.explanationText}>
                        horizontal makes the list scroll sideways instead of vertically.
                    </Text>

                    <FlatList
                        horizontal
                        data={HORIZONTAL_DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.horizontalItem}>
                                <Text style={styles.horizontalItemText}>{item.title}</Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => <View style={styles.horizontalSeparator} />}
                        showsHorizontalScrollIndicator={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'num-columns',
            component: (
                <ExampleCard title="11. numColumns">
                    <Text style={styles.explanationText}>
                        numColumns creates a grid style layout. React Native recommends
                        using numColumns instead of flexWrap for FlatList grids.
                    </Text>

                    <FlatList
                        data={GRID_DATA}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        columnWrapperStyle={styles.columnWrapper}
                        renderItem={({ item }) => (
                            <View style={styles.gridItem}>
                                <Text style={styles.gridItemText}>{item.title}</Text>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'column-wrapper',
            component: (
                <ExampleCard title="12. columnWrapperStyle">
                    <Text style={styles.explanationText}>
                        columnWrapperStyle styles each row when numColumns is greater than one.
                    </Text>

                    <Text style={styles.codeText}>
                        {'columnWrapperStyle={styles.columnWrapper}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'content-container',
            component: (
                <ExampleCard title="13. contentContainerStyle">
                    <Text style={styles.explanationText}>
                        contentContainerStyle styles the content inside the FlatList.
                        Use it for padding and spacing around the list items.
                    </Text>

                    <FlatList
                        data={BASIC_DATA}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.innerListContent}
                        renderItem={({ item }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'style',
            component: (
                <ExampleCard title="14. style">
                    <Text style={styles.explanationText}>
                        style controls the FlatList container itself. contentContainerStyle
                        controls the content inside it.
                    </Text>

                    <Text style={styles.codeText}>
                        {'style={styles.listBox}'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'contentContainerStyle={styles.listContent}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'extra-data',
            component: (
                <ExampleCard title="15. extraData">
                    <Text style={styles.explanationText}>
                        FlatList is optimized and may not re render when external state changes.
                        Pass external state through extraData when renderItem depends on it.
                    </Text>

                    <FlatList
                        data={BASIC_DATA}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                        renderItem={({ item }) => {
                            const isSelected = item.id === selectedId;

                            return (
                                <Pressable
                                    style={[
                                        styles.selectableItem,
                                        isSelected && styles.selectedItem,
                                    ]}
                                    onPress={() => setSelectedId(item.id)}
                                >
                                    <Text
                                        style={[
                                            styles.itemText,
                                            isSelected && styles.selectedItemText,
                                        ]}
                                    >
                                        {item.title}
                                    </Text>
                                </Pressable>
                            );
                        }}
                        scrollEnabled={false}
                    />

                    <Text style={styles.statusText}>
                        Selected ID: {selectedId || 'None'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'refresh',
            component: (
                <ExampleCard title="16. refreshing and onRefresh">
                    <Text style={styles.explanationText}>
                        refreshing and onRefresh create pull to refresh behavior.
                    </Text>

                    <FlatList
                        data={BASIC_DATA}
                        keyExtractor={(item) => item.id}
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        renderItem={({ item }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        )}
                        style={styles.smallListBox}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'on-end-reached',
            component: (
                <ExampleCard title="17. onEndReached and onEndReachedThreshold">
                    <Text style={styles.explanationText}>
                        onEndReached is commonly used for infinite scrolling. This example
                        uses a button to load more so it is easier to test inside a reference page.
                    </Text>

                    <FlatList
                        data={pagedData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        )}
                        ListFooterComponent={() => (
                            <View style={styles.loadMoreFooter}>
                                {footerLoading ? (
                                    <ActivityIndicator />
                                ) : (
                                    <Pressable style={styles.secondaryButton} onPress={handleLoadMore}>
                                        <Text style={styles.secondaryButtonText}>Load More</Text>
                                    </Pressable>
                                )}
                            </View>
                        )}
                        scrollEnabled={false}
                    />

                    <Text style={styles.codeText}>
                        {'onEndReached={handleLoadMore}'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'onEndReachedThreshold={0.5}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'initial-num',
            component: (
                <ExampleCard title="18. initialNumToRender">
                    <Text style={styles.explanationText}>
                        initialNumToRender controls how many items render in the first batch.
                        The default is 10.
                    </Text>

                    <Text style={styles.codeText}>
                        {'initialNumToRender={10}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'initial-index',
            component: (
                <ExampleCard title="19. initialScrollIndex">
                    <Text style={styles.explanationText}>
                        initialScrollIndex starts the list at a specific item. It requires
                        getItemLayout.
                    </Text>

                    <Text style={styles.codeText}>
                        {'initialScrollIndex={10}'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'get-item-layout',
            component: (
                <ExampleCard title="20. getItemLayout">
                    <Text style={styles.explanationText}>
                        getItemLayout improves performance when every row has a known height.
                        It also helps scrollToIndex work reliably.
                    </Text>

                    <Text style={styles.codeText}>
                        {'getItemLayout={(data, index) => ({ length: 64, offset: 64 * index, index })}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'scroll-to-index',
            component: (
                <ExampleCard title="21. scrollToIndex with ref">
                    <Text style={styles.explanationText}>
                        A ref lets you control the list from code.
                    </Text>

                    <View style={styles.scrollToWrapper}>
                        <FlatList
                            ref={scrollListRef}
                            data={LONG_DATA}
                            keyExtractor={(item) => item.id}
                            getItemLayout={(data, index) => ({
                                length: ITEM_HEIGHT,
                                offset: ITEM_HEIGHT * index,
                                index,
                            })}
                            renderItem={({ item }) => (
                                <View style={styles.fixedHeightItem}>
                                    <Text style={styles.itemText}>{item.title}</Text>
                                </View>
                            )}
                        />
                    </View>

                    <View style={styles.buttonRow}>
                        <Pressable
                            style={styles.smallButton}
                            onPress={() => {
                                scrollListRef.current?.scrollToIndex({
                                    index: 10,
                                    animated: true,
                                    viewPosition: 0.5,
                                });
                            }}
                        >
                            <Text style={styles.buttonText}>Go To 11</Text>
                        </Pressable>

                        <Pressable
                            style={styles.smallButton}
                            onPress={() => {
                                scrollListRef.current?.scrollToOffset({
                                    offset: 0,
                                    animated: true,
                                });
                            }}
                        >
                            <Text style={styles.buttonText}>Top</Text>
                        </Pressable>
                    </View>
                </ExampleCard>
            ),
        },
        {
            id: 'inverted',
            component: (
                <ExampleCard title="22. inverted">
                    <Text style={styles.explanationText}>
                        inverted reverses the scroll direction. It is commonly used for
                        chat style lists.
                    </Text>

                    <FlatList
                        data={BASIC_DATA}
                        keyExtractor={(item) => item.id}
                        inverted
                        renderItem={({ item }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </ExampleCard>
            ),
        },
        {
            id: 'viewability',
            component: (
                <ExampleCard title="23. onViewableItemsChanged">
                    <Text style={styles.explanationText}>
                        onViewableItemsChanged runs when visible items change. The config
                        should be stable and not recreated during render.
                    </Text>

                    <FlatList
                        data={LONG_DATA.slice(0, 8)}
                        keyExtractor={(item) => item.id}
                        style={styles.smallListBox}
                        viewabilityConfig={viewabilityConfig}
                        onViewableItemsChanged={({ viewableItems }) => {
                            const firstVisible = viewableItems[0]?.item?.title || 'None';
                            setViewableText(`First visible item: ${firstVisible}`);
                        }}
                        renderItem={({ item }) => (
                            <View style={styles.simpleItem}>
                                <Text style={styles.itemText}>{item.title}</Text>
                            </View>
                        )}
                    />

                    <Text style={styles.statusText}>{viewableText}</Text>
                </ExampleCard>
            ),
        },
        {
            id: 'shows-indicators',
            component: (
                <ExampleCard title="24. Scroll indicator props">
                    <Text style={styles.explanationText}>
                        FlatList inherits many ScrollView props, including scroll indicator props.
                    </Text>

                    <Text style={styles.codeText}>
                        {'showsVerticalScrollIndicator={false}'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'showsHorizontalScrollIndicator={false}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'remove-clipped',
            component: (
                <ExampleCard title="25. removeClippedSubviews">
                    <Text style={styles.explanationText}>
                        removeClippedSubviews may improve performance on large lists, but
                        React Native warns that it can cause missing content bugs in some cases.
                    </Text>

                    <Text style={styles.codeText}>
                        {'removeClippedSubviews={true}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'list-header-footer-style',
            component: (
                <ExampleCard title="26. ListHeaderComponentStyle and ListFooterComponentStyle">
                    <Text style={styles.explanationText}>
                        These props style the wrapper View around the header or footer component.
                    </Text>

                    <Text style={styles.codeText}>
                        {'ListHeaderComponentStyle={styles.headerWrapper}'}
                    </Text>

                    <Text style={styles.codeText}>
                        {'ListFooterComponentStyle={styles.footerWrapper}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'common-map-mistake',
            component: (
                <ExampleCard title="27. Common mistake, using map for long lists">
                    <Text style={styles.warningText}>
                        Do not render a large list by mapping items inside ScrollView.
                        Use FlatList instead.
                    </Text>

                    <Text style={styles.codeText}>
                        Wrong: {'items.map((item) => <Item item={item} />)'}
                    </Text>

                    <Text style={styles.codeText}>
                        Better: {'<FlatList data={items} renderItem={renderItem} />'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'common-key-mistake',
            component: (
                <ExampleCard title="28. Common mistake, unstable keys">
                    <Text style={styles.warningText}>
                        Avoid using the array index as the key when items can move,
                        be inserted, or be deleted.
                    </Text>

                    <Text style={styles.codeText}>
                        Wrong: {'keyExtractor={(item, index) => String(index)}'}
                    </Text>

                    <Text style={styles.codeText}>
                        Better: {'keyExtractor={(item) => item.id}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'common-extra-data',
            component: (
                <ExampleCard title="29. Common mistake, missing extraData">
                    <Text style={styles.warningText}>
                        If the list row depends on selected state, theme state, filter state,
                        or another value outside data, pass it through extraData.
                    </Text>

                    <Text style={styles.codeText}>
                        {'extraData={selectedId}'}
                    </Text>
                </ExampleCard>
            ),
        },
        {
            id: 'common-scrollview',
            component: (
                <ExampleCard title="30. Common mistake, nesting inside ScrollView">
                    <Text style={styles.warningText}>
                        Avoid placing a vertical FlatList inside a vertical ScrollView.
                        This can break virtualization and cause warnings.
                    </Text>

                    <Text style={styles.codeText}>
                        Better: make FlatList the main page container.
                    </Text>
                </ExampleCard>
            ),
        },
    ];

    return (
        <FlatList
            data={examples}
            keyExtractor={(item) => item.id}
            renderItem={renderExample}
            contentContainerStyle={styles.screen}
            ListHeaderComponent={() => (
                <View>
                    <Link href="/" style={styles.backLink}>
                        Back Home
                    </Link>

                    <Text style={styles.pageTitle}>FlatList Component Reference</Text>

                    <Text style={styles.introText}>
                        FlatList is used for efficient repeated data rendering. It should
                        be your default choice for lists that can grow large, lists from
                        APIs, searchable results, messages, tasks, cards, products, and
                        other repeated content.
                    </Text>
                </View>
            )}
        />
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

export default FlatListPage;

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

    simpleItem: {
        backgroundColor: '#d9ecff',
        padding: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#99cfff',
        marginBottom: 8,
    },

    itemText: {
        fontSize: 16,
        color: '#222',
    },

    separator: {
        height: 8,
    },

    listHeader: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },

    listHeaderText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    listFooter: {
        backgroundColor: '#eee',
        padding: 12,
        borderRadius: 8,
        marginTop: 8,
    },

    listFooterText: {
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    emptyBox: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
    },

    emptyText: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold',
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

    horizontalSeparator: {
        width: 10,
    },

    columnWrapper: {
        gap: 10,
        marginBottom: 10,
    },

    gridItem: {
        flex: 1,
        height: 80,
        backgroundColor: '#d9ecff',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    gridItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },

    innerListContent: {
        backgroundColor: '#eee',
        padding: 12,
        borderRadius: 8,
    },

    selectableItem: {
        backgroundColor: '#d9ecff',
        padding: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#99cfff',
        marginBottom: 8,
    },

    selectedItem: {
        backgroundColor: '#007AFF',
        borderColor: '#005BBB',
    },

    selectedItemText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    statusText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },

    smallListBox: {
        height: 180,
        backgroundColor: '#eee',
        borderRadius: 8,
        padding: 8,
    },

    loadMoreFooter: {
        paddingVertical: 12,
        alignItems: 'center',
    },

    secondaryButton: {
        backgroundColor: '#e6f0ff',
        borderWidth: 1,
        borderColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    secondaryButtonText: {
        color: '#007AFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    scrollToWrapper: {
        height: 230,
        backgroundColor: '#eee',
        borderRadius: 8,
        padding: 8,
    },

    fixedHeightItem: {
        height: 56,
        backgroundColor: '#d9ecff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#99cfff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
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