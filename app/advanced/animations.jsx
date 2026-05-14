import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Easing,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Link } from 'expo-router';

const AnimationsPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Link href="/" style={styles.backLink}>
                Back Home
            </Link>

            <Text style={styles.pageTitle}>Animations Reference</Text>

            <Text style={styles.introText}>
                Animations are used to make movement, feedback, loading states,
                transitions, and interaction feel smoother. This page uses React Native's
                built in Animated API.
            </Text>

            <ExampleCard title="1. Animated.Value">
                <Text style={styles.explanationText}>
                    Animated.Value stores a number that can change over time. That value
                    can then control opacity, scale, rotation, movement, width, color,
                    or other styles.
                </Text>

                <Text style={styles.codeText}>
                    {'const fadeAnim = useRef(new Animated.Value(0)).current;'}
                </Text>
            </ExampleCard>

            <ExampleCard title="2. Animated.View">
                <Text style={styles.explanationText}>
                    Use Animated.View when you want a View to respond to an animated value.
                </Text>

                <Text style={styles.codeText}>
                    {'<Animated.View style={{ opacity: fadeAnim }} />'}
                </Text>
            </ExampleCard>

            <ExampleCard title="3. Fade animation with Animated.timing">
                <TimingFadeExample />
            </ExampleCard>

            <ExampleCard title="4. Spring scale animation">
                <SpringScaleExample />
            </ExampleCard>

            <ExampleCard title="5. Slide animation with translateX">
                <SlideExample />
            </ExampleCard>

            <ExampleCard title="6. Rotate animation">
                <RotateExample />
            </ExampleCard>

            <ExampleCard title="7. Loop animation">
                <LoopPulseExample />
            </ExampleCard>

            <ExampleCard title="8. Sequence animation">
                <SequenceExample />
            </ExampleCard>

            <ExampleCard title="9. Parallel animation">
                <ParallelExample />
            </ExampleCard>

            <ExampleCard title="10. Delay animation">
                <DelayExample />
            </ExampleCard>

            <ExampleCard title="11. Stagger animation">
                <StaggerExample />
            </ExampleCard>

            <ExampleCard title="12. Interpolation">
                <InterpolationExample />
            </ExampleCard>

            <ExampleCard title="13. Color interpolation">
                <ColorInterpolationExample />
            </ExampleCard>

            <ExampleCard title="14. Progress bar animation">
                <ProgressBarExample />
            </ExampleCard>

            <ExampleCard title="15. Button press animation">
                <PressScaleExample />
            </ExampleCard>

            <ExampleCard title="16. Easing">
                <Text style={styles.explanationText}>
                    Easing changes how the animation moves between the start and end
                    values. For example, it can start slowly, speed up, then slow down.
                </Text>

                <EasingExample />
            </ExampleCard>

            <ExampleCard title="17. start callback">
                <StartCallbackExample />
            </ExampleCard>

            <ExampleCard title="18. stopAnimation">
                <StopAnimationExample />
            </ExampleCard>

            <ExampleCard title="19. setValue">
                <SetValueExample />
            </ExampleCard>

            <ExampleCard title="20. useNativeDriver">
                <Text style={styles.explanationText}>
                    useNativeDriver can improve animation performance by moving supported
                    animations to the native side. It works with opacity and transform
                    animations. It does not work with layout properties like width,
                    height, margin, or backgroundColor.
                </Text>

                <Text style={styles.codeText}>
                    {'useNativeDriver: true'}
                </Text>

                <Text style={styles.codeText}>
                    {'Supported: opacity, transform'}
                </Text>

                <Text style={styles.codeText}>
                    {'Not supported: width, height, backgroundColor'}
                </Text>
            </ExampleCard>

            <ExampleCard title="21. Common mistake, changing Animated.Value directly">
                <Text style={styles.warningText}>
                    Do not manually change the animated value like a normal variable.
                    Use Animated.timing, Animated.spring, setValue, or another Animated method.
                </Text>

                <Text style={styles.codeText}>
                    Wrong: {'fadeAnim = 1'}
                </Text>

                <Text style={styles.codeText}>
                    Better: {'fadeAnim.setValue(1)'}
                </Text>
            </ExampleCard>

            <ExampleCard title="22. Common mistake, forgetting Animated.View">
                <Text style={styles.warningText}>
                    If a style uses an Animated.Value, the component usually needs to be
                    an Animated component.
                </Text>

                <Text style={styles.codeText}>
                    Wrong: {'<View style={{ opacity: fadeAnim }} />'}
                </Text>

                <Text style={styles.codeText}>
                    Correct: {'<Animated.View style={{ opacity: fadeAnim }} />'}
                </Text>
            </ExampleCard>

            <ExampleCard title="23. Common mistake, wrong native driver setting">
                <Text style={styles.warningText}>
                    If you animate width, height, or backgroundColor, useNativeDriver must
                    be false. If you animate opacity or transform, useNativeDriver can
                    usually be true.
                </Text>
            </ExampleCard>
        </ScrollView>
    );
};

const TimingFadeExample = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Animated.timing moves a value from one number to another over time.
            </Text>

            <Animated.View style={[styles.demoBox, { opacity: fadeAnim }]}>
                <Text style={styles.demoBoxText}>Fade</Text>
            </Animated.View>

            <View style={styles.buttonRow}>
                <DemoButton title="Fade In" onPress={fadeIn} />
                <DemoButton title="Fade Out" onPress={fadeOut} />
            </View>
        </View>
    );
};

const SpringScaleExample = () => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const runSpring = () => {
        scaleAnim.setValue(0.6);

        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 3,
            tension: 80,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Animated.spring creates a bouncy physics based animation.
            </Text>

            <Animated.View
                style={[
                    styles.demoBox,
                    {
                        transform: [
                            { scale: scaleAnim },
                        ],
                    },
                ]}
            >
                <Text style={styles.demoBoxText}>Spring</Text>
            </Animated.View>

            <DemoButton title="Run Spring" onPress={runSpring} />
        </View>
    );
};

const SlideExample = () => {
    const slideAnim = useRef(new Animated.Value(0)).current;

    const slideRight = () => {
        Animated.timing(slideAnim, {
            toValue: 120,
            duration: 600,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
        }).start();
    };

    const reset = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 600,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                translateX moves the view left or right.
            </Text>

            <View style={styles.animationTrack}>
                <Animated.View
                    style={[
                        styles.demoBox,
                        {
                            transform: [
                                { translateX: slideAnim },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.demoBoxText}>Slide</Text>
                </Animated.View>
            </View>

            <View style={styles.buttonRow}>
                <DemoButton title="Slide" onPress={slideRight} />
                <DemoButton title="Reset" onPress={reset} />
            </View>
        </View>
    );
};

const RotateExample = () => {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    const rotate = () => {
        rotateAnim.setValue(0);

        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 900,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Rotation usually uses interpolation to convert numbers into degrees.
            </Text>

            <Animated.View
                style={[
                    styles.demoBox,
                    {
                        transform: [
                            { rotate: spin },
                        ],
                    },
                ]}
            >
                <Text style={styles.demoBoxText}>Rotate</Text>
            </Animated.View>

            <DemoButton title="Rotate" onPress={rotate} />
        </View>
    );
};

const LoopPulseExample = () => {
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const loop = Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.15,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        );

        loop.start();

        return () => loop.stop();
    }, [pulseAnim]);

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Animated.loop repeats an animation until it is stopped or the component unmounts.
            </Text>

            <Animated.View
                style={[
                    styles.demoBox,
                    {
                        transform: [
                            { scale: pulseAnim },
                        ],
                    },
                ]}
            >
                <Text style={styles.demoBoxText}>Loop</Text>
            </Animated.View>
        </View>
    );
};

const SequenceExample = () => {
    const moveAnim = useRef(new Animated.Value(0)).current;

    const runSequence = () => {
        moveAnim.setValue(0);

        Animated.sequence([
            Animated.timing(moveAnim, {
                toValue: 80,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(moveAnim, {
                toValue: -40,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(moveAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Animated.sequence runs animations one after another.
            </Text>

            <View style={styles.animationTrack}>
                <Animated.View
                    style={[
                        styles.demoBox,
                        {
                            transform: [
                                { translateX: moveAnim },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.demoBoxText}>Seq</Text>
                </Animated.View>
            </View>

            <DemoButton title="Run Sequence" onPress={runSequence} />
        </View>
    );
};

const ParallelExample = () => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const moveAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const runParallel = () => {
        fadeAnim.setValue(1);
        moveAnim.setValue(0);
        scaleAnim.setValue(1);

        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0.4,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(moveAnim, {
                toValue: 100,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1.25,
                duration: 600,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const reset = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(moveAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Animated.parallel runs multiple animations at the same time.
            </Text>

            <View style={styles.animationTrack}>
                <Animated.View
                    style={[
                        styles.demoBox,
                        {
                            opacity: fadeAnim,
                            transform: [
                                { translateX: moveAnim },
                                { scale: scaleAnim },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.demoBoxText}>All</Text>
                </Animated.View>
            </View>

            <View style={styles.buttonRow}>
                <DemoButton title="Run" onPress={runParallel} />
                <DemoButton title="Reset" onPress={reset} />
            </View>
        </View>
    );
};

const DelayExample = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const runDelay = () => {
        fadeAnim.setValue(0);

        Animated.sequence([
            Animated.delay(700),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Animated.delay waits before the next animation starts.
            </Text>

            <Animated.View style={[styles.demoBox, { opacity: fadeAnim }]}>
                <Text style={styles.demoBoxText}>Delay</Text>
            </Animated.View>

            <DemoButton title="Start After Delay" onPress={runDelay} />
        </View>
    );
};

const StaggerExample = () => {
    const firstAnim = useRef(new Animated.Value(0)).current;
    const secondAnim = useRef(new Animated.Value(0)).current;
    const thirdAnim = useRef(new Animated.Value(0)).current;

    const runStagger = () => {
        firstAnim.setValue(0);
        secondAnim.setValue(0);
        thirdAnim.setValue(0);

        Animated.stagger(200, [
            Animated.timing(firstAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(secondAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(thirdAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Animated.stagger starts each animation with a delay between them.
            </Text>

            <View style={styles.staggerRow}>
                <Animated.View style={[styles.smallDemoBox, { opacity: firstAnim }]}>
                    <Text>1</Text>
                </Animated.View>

                <Animated.View style={[styles.smallDemoBox, { opacity: secondAnim }]}>
                    <Text>2</Text>
                </Animated.View>

                <Animated.View style={[styles.smallDemoBox, { opacity: thirdAnim }]}>
                    <Text>3</Text>
                </Animated.View>
            </View>

            <DemoButton title="Run Stagger" onPress={runStagger} />
        </View>
    );
};

const InterpolationExample = () => {
    const anim = useRef(new Animated.Value(0)).current;

    const runInterpolation = () => {
        anim.setValue(0);

        Animated.timing(anim, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true,
        }).start();
    };

    const translateY = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -50],
    });

    const rotate = anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '20deg'],
    });

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Interpolation maps one animated value into another output range.
            </Text>

            <Animated.View
                style={[
                    styles.demoBox,
                    {
                        transform: [
                            { translateY },
                            { rotate },
                        ],
                    },
                ]}
            >
                <Text style={styles.demoBoxText}>Map</Text>
            </Animated.View>

            <DemoButton title="Run Interpolation" onPress={runInterpolation} />
        </View>
    );
};

const ColorInterpolationExample = () => {
    const colorAnim = useRef(new Animated.Value(0)).current;

    const runColor = () => {
        colorAnim.setValue(0);

        Animated.timing(colorAnim, {
            toValue: 1,
            duration: 900,
            useNativeDriver: false,
        }).start();
    };

    const backgroundColor = colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#d9ecff', '#007AFF'],
    });

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Color interpolation requires useNativeDriver false because color is not
                supported by the native driver.
            </Text>

            <Animated.View style={[styles.demoBox, { backgroundColor }]}>
                <Text style={styles.demoBoxText}>Color</Text>
            </Animated.View>

            <DemoButton title="Animate Color" onPress={runColor} />
        </View>
    );
};

const ProgressBarExample = () => {
    const progressAnim = useRef(new Animated.Value(0)).current;

    const runProgress = () => {
        progressAnim.setValue(0);

        Animated.timing(progressAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: false,
        }).start();
    };

    const width = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                Width animations require useNativeDriver false because width is a layout property.
            </Text>

            <View style={styles.progressTrack}>
                <Animated.View style={[styles.progressFill, { width }]} />
            </View>

            <DemoButton title="Run Progress" onPress={runProgress} />
        </View>
    );
};

const PressScaleExample = () => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const pressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.94,
            useNativeDriver: true,
        }).start();
    };

    const pressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 3,
            tension: 80,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                This pattern gives touch feedback when the user presses a custom button.
            </Text>

            <Pressable onPressIn={pressIn} onPressOut={pressOut}>
                <Animated.View
                    style={[
                        styles.animatedButton,
                        {
                            transform: [
                                { scale: scaleAnim },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.animatedButtonText}>Press Me</Text>
                </Animated.View>
            </Pressable>
        </View>
    );
};

const EasingExample = () => {
    const moveAnim = useRef(new Animated.Value(0)).current;

    const runEase = () => {
        moveAnim.setValue(0);

        Animated.timing(moveAnim, {
            toValue: 130,
            duration: 900,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.exampleArea}>
            <View style={styles.animationTrack}>
                <Animated.View
                    style={[
                        styles.demoBox,
                        {
                            transform: [
                                { translateX: moveAnim },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.demoBoxText}>Ease</Text>
                </Animated.View>
            </View>

            <DemoButton title="Run Bounce Easing" onPress={runEase} />
        </View>
    );
};

const StartCallbackExample = () => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const [statusText, setStatusText] = useState('Animation has not started.');

    const runAnimation = () => {
        setStatusText('Animation is running.');
        fadeAnim.setValue(1);

        Animated.timing(fadeAnim, {
            toValue: 0.2,
            duration: 700,
            useNativeDriver: true,
        }).start(({ finished }) => {
            setStatusText(finished ? 'Animation finished.' : 'Animation was interrupted.');
        });
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                start can receive a callback that tells you whether the animation finished.
            </Text>

            <Animated.View style={[styles.demoBox, { opacity: fadeAnim }]}>
                <Text style={styles.demoBoxText}>Start</Text>
            </Animated.View>

            <DemoButton title="Run With Callback" onPress={runAnimation} />

            <Text style={styles.statusText}>{statusText}</Text>
        </View>
    );
};

const StopAnimationExample = () => {
    const moveAnim = useRef(new Animated.Value(0)).current;
    const [statusText, setStatusText] = useState('Animation is stopped.');

    const startMove = () => {
        setStatusText('Animation is running.');

        Animated.timing(moveAnim, {
            toValue: 160,
            duration: 2500,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(({ finished }) => {
            setStatusText(finished ? 'Animation finished.' : 'Animation stopped.');
        });
    };

    const stopMove = () => {
        moveAnim.stopAnimation();
    };

    const reset = () => {
        moveAnim.setValue(0);
        setStatusText('Animation reset.');
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                stopAnimation stops the current animation before it reaches the end.
            </Text>

            <View style={styles.animationTrack}>
                <Animated.View
                    style={[
                        styles.demoBox,
                        {
                            transform: [
                                { translateX: moveAnim },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.demoBoxText}>Stop</Text>
                </Animated.View>
            </View>

            <View style={styles.buttonRow}>
                <DemoButton title="Start" onPress={startMove} />
                <DemoButton title="Stop" onPress={stopMove} />
                <DemoButton title="Reset" onPress={reset} />
            </View>

            <Text style={styles.statusText}>{statusText}</Text>
        </View>
    );
};

const SetValueExample = () => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const makeSmall = () => {
        scaleAnim.setValue(0.7);
    };

    const makeNormal = () => {
        scaleAnim.setValue(1);
    };

    return (
        <View style={styles.exampleArea}>
            <Text style={styles.explanationText}>
                setValue immediately changes the animated value without animating over time.
            </Text>

            <Animated.View
                style={[
                    styles.demoBox,
                    {
                        transform: [
                            { scale: scaleAnim },
                        ],
                    },
                ]}
            >
                <Text style={styles.demoBoxText}>Set</Text>
            </Animated.View>

            <View style={styles.buttonRow}>
                <DemoButton title="Small" onPress={makeSmall} />
                <DemoButton title="Normal" onPress={makeNormal} />
            </View>
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

export default AnimationsPage;

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
        width: 90,
        height: 90,
        backgroundColor: '#d9ecff',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    demoBoxText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#222',
    },

    smallDemoBox: {
        width: 60,
        height: 60,
        backgroundColor: '#d9ecff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#99cfff',
    },

    animationTrack: {
        width: '100%',
        minHeight: 120,
        backgroundColor: '#eee',
        borderRadius: 12,
        padding: 14,
        justifyContent: 'center',
    },

    staggerRow: {
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
        backgroundColor: '#eee',
        borderRadius: 12,
        padding: 16,
    },

    progressTrack: {
        width: '100%',
        height: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
    },

    progressFill: {
        height: '100%',
        backgroundColor: '#007AFF',
        borderRadius: 10,
    },

    animatedButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    animatedButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonRow: {
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
    },

    demoButton: {
        flexGrow: 1,
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 14,
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
        fontSize: 15,
        fontWeight: 'bold',
    },

    statusText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
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