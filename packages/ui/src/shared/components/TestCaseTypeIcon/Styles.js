import styled from 'styled-components';

import { testCaseTypeIcons } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const TypeIcon = styled(Icon)`
  type: ${props => testCaseTypeIcons[props.color]};
`;
