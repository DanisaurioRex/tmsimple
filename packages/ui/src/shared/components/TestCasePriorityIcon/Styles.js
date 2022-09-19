import styled from 'styled-components';

import { testCasePriorityColors } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const PriorityIcon = styled(Icon)`
  color: ${props => testCasePriorityColors[props.color]};
`;
