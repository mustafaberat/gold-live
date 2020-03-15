import * as React from 'react';
import { Text, View } from 'react-native'

import Box from '../components/box'

export default function GoldPriceView() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>gold-price!</Text>
            <Box size={20} bg="blue" />
        </View>
    );
}