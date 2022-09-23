import React from 'react';
import PropTypes from 'prop-types';

import { TestCasePriority } from 'shared/constants/testCases';

import { PriorityIcon } from './Styles';

const propTypes = {
    priority: PropTypes.string.isRequired,
};

const TestCasePriorityIcon = ({ priority, ...otherProps }) => {
    const iconType = [TestCasePriority.LOW, TestCasePriority.LOWEST].includes(
        priority
    )
        ? 'arrow-down'
        : 'arrow-up';

    return (
        <PriorityIcon
            type={iconType}
            color={priority}
            size={18}
            {...otherProps}
        />
    );
};

TestCasePriorityIcon.propTypes = propTypes;

export default TestCasePriorityIcon;
