import styled from 'styled-components'

import Box from './box'

const BoxCenter = styled(Box)({});

BoxCenter.defaultProps = {
    backgroundColor: 'red',
    flex: 1,
    justifyContert: 'center',
    alignItems: 'center'
}
export default BoxCenter;