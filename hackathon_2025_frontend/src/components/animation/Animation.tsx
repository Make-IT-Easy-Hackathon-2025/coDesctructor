import LottieView from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const LoadingScreen = (): React.ReactElement => {
    return (
        <View style={styles.loadingOverlay}>
            <LottieView
                source={require('../../animation/animation.json')}
                autoPlay
                loop
                style={{
                    width: 200,
                    height: 200,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    loadingOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
});

export default LoadingScreen;
