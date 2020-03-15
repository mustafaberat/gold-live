import * as React from 'react';
import { Text } from 'react-native'

import Box from '../components/box'
import BoxCenter from '../components/box-center'

export default function GoldPriceView() {
    return (
        <BoxCenter>
            <Text>gold-price!</Text>
            <Box size={20} bg="blue" />
        </BoxCenter>
    );
}