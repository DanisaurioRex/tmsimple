import React from 'react';
import PropTypes from 'prop-types';

import {
    TestCaseType,
    TestCasePriority,
    TestCaseTypeCopy,
    TestCasePriorityCopy,
} from 'shared/constants/testCases';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form, TestCasePriorityIcon } from 'shared/components';

import {
    FormHeading,
    FormElement,
    SelectItem,
    SelectItemLabel,
    Divider,
    Actions,
    ActionButton,
} from './Styles';

const propTypes = {};

const TestCaseCreate = ({ modalClose }) => {
    const [{ isCreating }, createTestCase] = useApi.post('/testcase');

    return (
        <Form
            enableReinitialize
            initialValues={{
                type: TestCaseType.ACCEPTANCE,
                description: 'w',
                priority: TestCasePriority.MEDIUM,
            }}
            validations={{
                type: Form.is.required(),
                name: [Form.is.required(), Form.is.maxLength(200)],
                priority: Form.is.required(),
            }}
            onSubmit={async (values, form) => {
                try {
                    await createTestCase(values);
                    toast.success('Test Case has been successfully created.');
                } catch (error) {
                    toast.error(error);
                    Form.handleAPIError(error, form);
                }
            }}
        >
            <FormElement>
                <FormHeading>Create Test Case</FormHeading>
                <Form.Field.Input
                    name="name"
                    label="Name"
                    tip="Concisely summarize the test Case in one or two sentences."
                />

                <Form.Field.TextEditor
                    name="description"
                    label="Description"
                    tip="Describe the test case in as much detail as you'd like."
                />

                <Divider />

                <Form.Field.Select
                    name="type"
                    label="Test Case Type"
                    tip="Start typing to get a list of possible matches."
                    options={typeOptions}
                    renderOption={renderType}
                    renderValue={renderType}
                />

                <Form.Field.Select
                    name="priority"
                    label="Priority"
                    options={priorityOptions}
                    renderOption={renderPriority}
                    renderValue={renderPriority}
                />
                <Actions>
                    <ActionButton
                        type="submit"
                        variant="primary"
                        isWorking={isCreating}
                    >
                        Create TestCase
                    </ActionButton>
                    <ActionButton
                        type="button"
                        variant="empty"
                        onClick={modalClose}
                    >
                        Cancel
                    </ActionButton>
                </Actions>
            </FormElement>
        </Form>
    );
};

const typeOptions = Object.values(TestCaseType).map((type) => ({
    value: type,
    label: TestCaseTypeCopy[type],
}));

const priorityOptions = Object.values(TestCasePriority).map((priority) => ({
    value: priority,
    label: TestCasePriorityCopy[priority],
}));

const renderType = ({ value: type }) => (
    <SelectItem>
        <SelectItemLabel>{TestCaseTypeCopy[type]}</SelectItemLabel>
    </SelectItem>
);

const renderPriority = ({ value: priority }) => (
    <SelectItem>
        <TestCasePriorityIcon priority={priority} top={1} />
        <SelectItemLabel>{TestCasePriorityCopy[priority]}</SelectItemLabel>
    </SelectItem>
);

TestCaseCreate.propTypes = propTypes;

export default TestCaseCreate;
