import React, { Fragment } from 'react';
import TestCaseCreate from '../components/test-cases';
import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Toast from './Toast';

import './index.css';

const App = () => (
    <Fragment>
        <NormalizeStyles />
        <BaseStyles />
        <Toast />
        <TestCaseCreate />
    </Fragment>
);

export default App;
