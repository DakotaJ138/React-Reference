import React, { useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Link } from 'expo-router';

const remoteImage = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
};

const largeRemoteImage = {
    uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
};

const brokenImage = {
    uri: 'https://example.com/this-image-does-not-exist.png',
};

const dataUriImage = {
    uri:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAKElEQVR42u3OMQEAAAgDINc/9K3hHBQgq2Z3AQAAAAAAAAAAAAAA4GkCpgAAAfJKoCwAAAAASUVORK5CYII=',
};

const ImagesPage = () => {
    const [loadStatus, setLoadStatus] = useState('Image has not started loading.');
    const [errorStatus, setErrorStatus] = useState('Broken image has not loaded yet.');
    const [imageSizeText, setImageSizeText] = useState('Image size has not been measured yet.');

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Link href="/" style={styles.backLink}>
                Back Home
            </Link>

            <Text style={styles.pageTitle}>Image Component Reference</Text>

            <Text style={styles.introText}>
                The Image component displays local images, network images, and data URI
                images. This page demonstrates common Image props, style attributes,
                resize behavior, loading events, accessibility props, and common mistakes.
            </Text>

            <ExampleCard title="1. Basic network image">
                <Text style={styles.explanationText}>
                    Network images use source with a uri. Width and height must be provided.
                </Text>

                <Image source={remoteImage} style={styles.basicImage} />
            </ExampleCard>

            <ExampleCard title="2. Local image example">
                <Text style={styles.explanationText}>
                    Local images use require. The path must point to a real image file in
                    your project.
                </Text>

                <Text style={styles.codeText}>
                    {'<Image source={require("../assets/images/icon.png")} style={styles.image} />'}
                </Text>
            </ExampleCard>

            <ExampleCard title="3. Data URI image">
                <Text style={styles.explanationText}>
                    Data URI images can be displayed with source uri, but still need width
                    and height.
                </Text>

                <Image source={dataUriImage} style={styles.basicImage} />
            </ExampleCard>

            <ExampleCard title="4. width and height">
                <Text style={styles.explanationText}>
                    Image size is usually controlled with width and height.
                </Text>

                <Image source={remoteImage} style={styles.smallImage} />
                <Image source={remoteImage} style={styles.mediumImage} />
                <Image source={remoteImage} style={styles.largeImage} />
            </ExampleCard>

            <ExampleCard title="5. resizeMode cover">
                <Text style={styles.explanationText}>
                    cover fills the frame while keeping the image ratio. Some image may be cropped.
                </Text>

                <Image source={largeRemoteImage} style={styles.resizeBoxCover} />
            </ExampleCard>

            <ExampleCard title="6. resizeMode contain">
                <Text style={styles.explanationText}>
                    contain fits the full image inside the frame. Empty space may remain.
                </Text>

                <Image source={largeRemoteImage} style={styles.resizeBoxContain} />
            </ExampleCard>

            <ExampleCard title="7. resizeMode stretch">
                <Text style={styles.explanationText}>
                    stretch fills the frame by changing width and height independently.
                    This can distort the image.
                </Text>

                <Image source={largeRemoteImage} style={styles.resizeBoxStretch} />
            </ExampleCard>

            <ExampleCard title="8. resizeMode center">
                <Text style={styles.explanationText}>
                    center places the image in the middle of the frame.
                </Text>

                <Image source={largeRemoteImage} style={styles.resizeBoxCenter} />
            </ExampleCard>

            <ExampleCard title="9. resizeMode repeat">
                <Text style={styles.explanationText}>
                    repeat repeats the image to fill the frame where supported.
                </Text>

                <Image source={remoteImage} style={styles.resizeBoxRepeat} />
            </ExampleCard>

            <ExampleCard title="10. objectFit cover">
                <Text style={styles.explanationText}>
                    objectFit is another way to control how the image fits the frame.
                </Text>

                <Image source={largeRemoteImage} style={styles.objectFitCover} />
            </ExampleCard>

            <ExampleCard title="11. borderRadius">
                <Text style={styles.explanationText}>
                    borderRadius rounds image corners.
                </Text>

                <Image source={largeRemoteImage} style={styles.roundedImage} />
            </ExampleCard>

            <ExampleCard title="12. Circle image">
                <Text style={styles.explanationText}>
                    A circle image uses equal width and height, then borderRadius set to
                    half the size.
                </Text>

                <Image source={largeRemoteImage} style={styles.circleImage} />
            </ExampleCard>

            <ExampleCard title="13. borderWidth and borderColor">
                <Image source={largeRemoteImage} style={styles.borderedImage} />
            </ExampleCard>

            <ExampleCard title="14. opacity">
                <Image source={largeRemoteImage} style={styles.opacityImage} />
            </ExampleCard>

            <ExampleCard title="15. tintColor">
                <Text style={styles.explanationText}>
                    tintColor changes non transparent pixels. It works best with simple
                    icon style images.
                </Text>

                <Image source={remoteImage} style={styles.tintedImage} />
            </ExampleCard>

            <ExampleCard title="16. blurRadius">
                <Text style={styles.explanationText}>
                    blurRadius applies blur to the image.
                </Text>

                <Image source={largeRemoteImage} style={styles.blurredImage} blurRadius={5} />
            </ExampleCard>

            <ExampleCard title="17. backgroundColor behind image">
                <Text style={styles.explanationText}>
                    backgroundColor is useful when using contain because empty space may show.
                </Text>

                <Image source={largeRemoteImage} style={styles.imageWithBackground} />
            </ExampleCard>

            <ExampleCard title="18. ImageBackground">
                <Text style={styles.explanationText}>
                    ImageBackground lets you place content on top of an image.
                </Text>

                <ImageBackground
                    source={largeRemoteImage}
                    style={styles.imageBackground}
                    imageStyle={styles.imageBackgroundImage}
                >
                    <Text style={styles.imageBackgroundText}>Text on image</Text>
                </ImageBackground>
            </ExampleCard>

            <ExampleCard title="19. onLoadStart, onLoad, and onLoadEnd">
                <Text style={styles.explanationText}>
                    These events help track image loading.
                </Text>

                <Image
                    source={largeRemoteImage}
                    style={styles.eventImage}
                    onLoadStart={() => setLoadStatus('Image started loading.')}
                    onLoad={() => setLoadStatus('Image loaded successfully.')}
                    onLoadEnd={() => setLoadStatus('Image finished loading process.')}
                />

                <Text style={styles.statusText}>{loadStatus}</Text>
            </ExampleCard>

            <ExampleCard title="20. onError">
                <Text style={styles.explanationText}>
                    onError runs when the image cannot load.
                </Text>

                <Image
                    source={brokenImage}
                    style={styles.eventImage}
                    onError={() => setErrorStatus('Image failed to load.')}
                />

                <Text style={styles.statusText}>{errorStatus}</Text>
            </ExampleCard>

            <ExampleCard title="21. ActivityIndicator while loading">
                <Text style={styles.explanationText}>
                    This shows the concept of using state to display a loading spinner.
                </Text>

                <LoadingImage />
            </ExampleCard>

            <ExampleCard title="22. Image.getSize">
                <Text style={styles.explanationText}>
                    Image.getSize can read the natural width and height of a remote image.
                </Text>

                <Text
                    style={styles.clickableText}
                    onPress={() => {
                        Image.getSize(
                            largeRemoteImage.uri,
                            (width, height) => {
                                setImageSizeText(`Natural size: ${width} x ${height}`);
                            },
                            () => {
                                setImageSizeText('Could not measure image size.');
                            }
                        );
                    }}
                >
                    Press to measure remote image
                </Text>

                <Text style={styles.statusText}>{imageSizeText}</Text>
            </ExampleCard>

            <ExampleCard title="23. accessibilityLabel">
                <Text style={styles.explanationText}>
                    accessibilityLabel describes the image for screen readers.
                </Text>

                <Image
                    source={largeRemoteImage}
                    style={styles.basicWideImage}
                    accessible
                    accessibilityLabel="Landscape photo example"
                />
            </ExampleCard>

            <ExampleCard title="24. testID">
                <Text style={styles.explanationText}>
                    testID identifies the image during automated testing. It does not
                    visually change the app.
                </Text>

                <Image
                    testID="example-image"
                    source={largeRemoteImage}
                    style={styles.basicWideImage}
                />
            </ExampleCard>

            <ExampleCard title="25. pointerEvents">
                <Text style={styles.explanationText}>
                    pointerEvents can control whether the image receives touch events.
                </Text>

                <Image
                    pointerEvents="none"
                    source={largeRemoteImage}
                    style={styles.basicWideImage}
                />
            </ExampleCard>

            <ExampleCard title="26. overlayColor Android">
                <Text style={styles.explanationText}>
                    overlayColor is Android specific and can help fill rounded corner
                    artifacts in certain image situations.
                </Text>

                <Image source={largeRemoteImage} style={styles.overlayColorImage} />
            </ExampleCard>

            <ExampleCard title="27. defaultSource example">
                <Text style={styles.explanationText}>
                    defaultSource can show a placeholder image while the real image loads.
                    It needs a real local asset.
                </Text>

                <Text style={styles.codeText}>
                    {'<Image defaultSource={require("../assets/images/placeholder.png")} source={remoteImage} style={styles.image} />'}
                </Text>
            </ExampleCard>

            <ExampleCard title="28. loadingIndicatorSource example">
                <Text style={styles.explanationText}>
                    loadingIndicatorSource can show a loading image while the main image loads.
                    It also needs a real local asset.
                </Text>

                <Text style={styles.codeText}>
                    {'<Image loadingIndicatorSource={require("../assets/images/loading.png")} source={remoteImage} style={styles.image} />'}
                </Text>
            </ExampleCard>

            <ExampleCard title="29. fadeDuration Android">
                <Text style={styles.explanationText}>
                    fadeDuration controls the image fade animation duration on Android.
                </Text>

                <Image source={largeRemoteImage} style={styles.basicWideImage} fadeDuration={1000} />
            </ExampleCard>

            <ExampleCard title="30. progressiveRenderingEnabled Android">
                <Text style={styles.explanationText}>
                    progressiveRenderingEnabled can progressively render JPEG images on Android.
                </Text>

                <Image
                    source={largeRemoteImage}
                    style={styles.basicWideImage}
                    progressiveRenderingEnabled
                />
            </ExampleCard>

            <ExampleCard title="31. Common mistake, missing size">
                <Text style={styles.warningText}>
                    A network image may not appear if width and height are not provided.
                </Text>

                <Text style={styles.codeText}>
                    Wrong: {'<Image source={{ uri: "https://example.com/image.png" }} />'}
                </Text>

                <Text style={styles.codeText}>
                    Correct: {'<Image source={{ uri: "https://example.com/image.png" }} style={{ width: 100, height: 100 }} />'}
                </Text>
            </ExampleCard>

            <ExampleCard title="32. Common mistake, wrong source format">
                <Text style={styles.warningText}>
                    Local images and network images use different source formats.
                </Text>

                <Text style={styles.codeText}>
                    Local: {'source={require("../assets/images/icon.png")}'}
                </Text>

                <Text style={styles.codeText}>
                    Network: {'source={{ uri: "https://example.com/image.png" }}'}
                </Text>
            </ExampleCard>
        </ScrollView>
    );
};

const LoadingImage = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={styles.loadingWrapper}>
            {isLoading && <ActivityIndicator size="large" />}

            <Image
                source={largeRemoteImage}
                style={styles.loadingImage}
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
            />
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

export default ImagesPage;

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

    basicImage: {
        width: 100,
        height: 100,
    },

    smallImage: {
        width: 50,
        height: 50,
    },

    mediumImage: {
        width: 100,
        height: 100,
    },

    largeImage: {
        width: 150,
        height: 150,
    },

    basicWideImage: {
        width: '100%',
        height: 160,
        borderRadius: 12,
        resizeMode: 'cover',
    },

    resizeBoxCover: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    resizeBoxContain: {
        width: '100%',
        height: 140,
        resizeMode: 'contain',
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    resizeBoxStretch: {
        width: '100%',
        height: 140,
        resizeMode: 'stretch',
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    resizeBoxCenter: {
        width: '100%',
        height: 140,
        resizeMode: 'center',
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    resizeBoxRepeat: {
        width: '100%',
        height: 140,
        resizeMode: 'repeat',
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    objectFitCover: {
        width: '100%',
        height: 140,
        objectFit: 'cover',
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    roundedImage: {
        width: '100%',
        height: 160,
        borderRadius: 24,
        resizeMode: 'cover',
    },

    circleImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        resizeMode: 'cover',
    },

    borderedImage: {
        width: '100%',
        height: 160,
        borderWidth: 4,
        borderColor: '#007AFF',
        borderRadius: 12,
        resizeMode: 'cover',
    },

    opacityImage: {
        width: '100%',
        height: 160,
        opacity: 0.45,
        borderRadius: 12,
        resizeMode: 'cover',
    },

    tintedImage: {
        width: 100,
        height: 100,
        tintColor: '#007AFF',
    },

    blurredImage: {
        width: '100%',
        height: 160,
        borderRadius: 12,
        resizeMode: 'cover',
    },

    imageWithBackground: {
        width: '100%',
        height: 160,
        resizeMode: 'contain',
        backgroundColor: '#d9ecff',
        borderRadius: 12,
    },

    imageBackground: {
        width: '100%',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageBackgroundImage: {
        borderRadius: 12,
    },

    imageBackgroundText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },

    eventImage: {
        width: '100%',
        height: 120,
        borderRadius: 12,
        resizeMode: 'cover',
        backgroundColor: '#eee',
    },

    statusText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },

    clickableText: {
        color: '#007AFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 16,
    },

    loadingWrapper: {
        minHeight: 180,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },

    loadingImage: {
        width: '100%',
        height: 140,
        borderRadius: 12,
        resizeMode: 'cover',
        backgroundColor: '#eee',
    },

    overlayColorImage: {
        width: '100%',
        height: 160,
        resizeMode: 'contain',
        backgroundColor: '#f5f5f5',
        borderRadius: 24,
        overlayColor: '#f5f5f5',
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