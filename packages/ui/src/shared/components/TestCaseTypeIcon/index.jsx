import React from 'react';
import PropTypes from 'prop-types';

import { TypeIcon } from './Styles';
import { testCaseTypeColors } from 'shared/utils/styles';

const propTypes = {
    type: PropTypes.string.isRequired,
};

const TestCaseTypeIcon = ({ type, ...otherProps }) => (
    <TypeIcon size={18} {...otherProps}>
        {' '}
        {type}
    </TypeIcon>
);

TestCaseTypeIcon.propTypes = propTypes;

export default TestCaseTypeIcon;
