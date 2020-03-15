import styled from 'styled-components'
import { View } from 'react-native'
import { compose, color, size, flexbox } from 'styled-system'

const Box = styled(View)(
    compose(color, size, flexbox));

export default Box;