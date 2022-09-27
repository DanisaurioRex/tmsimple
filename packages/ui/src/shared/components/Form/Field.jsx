import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import Input from 'shared/components/Input';
import Select from 'shared/components/Select';
import TextEditor from 'shared/components/TextEditor';

import { StyledField, FieldLabel, FieldTip, FieldError } from './Styles';

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    tip: PropTypes.string,
    error: PropTypes.string,
    name: PropTypes.string,
    dataTest: PropTypes.string,
};

const defaultProps = {
    className: undefined,
    label: undefined,
    tip: undefined,
    error: undefined,
    name: undefined,
    dataTest: undefined,
};

const generateField = (FormComponent) => {
    const FieldComponent = ({
        className,
        label,
        tip,
        error,
        name,
        dataTest,
        ...otherProps
    }) => {
        const fieldId = uniqueId('form-field-');

        return (
            <StyledField className={className} hasLabel={!!label}>
                {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
                <FormComponent
                    id={fieldId}
                    dataTest={dataTest ? dataTest : name}
                    invalid={!!error}
                    name={name}
                    {...otherProps}
                />
                {tip && <FieldTip>{tip}</FieldTip>}
                {error && <FieldError>{error}</FieldError>}
            </StyledField>
        );
    };

    FieldComponent.propTypes = propTypes;
    FieldComponent.defaultProps = defaultProps;

    return FieldComponent;
};

export default {
    Input: generateField(Input),
    Select: generateField(Select),
    TextEditor: generateField(TextEditor),
};
