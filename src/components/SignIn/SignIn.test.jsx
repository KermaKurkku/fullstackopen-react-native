import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { InputBlock } from './SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
			const onSubmit = jest.fn();
			const { getByTestId } = render(<InputBlock onSubmit={onSubmit} />)

			const usernameField = getByTestId("UsernameField");
			const passwordField = getByTestId("PasswordField");
			const submitButton = getByTestId("SubmitButton");

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
				fireEvent.changeText(usernameField, 'kalle');
				fireEvent.changeText(passwordField, 'password');
				fireEvent.press(submitButton);
				expect(onSubmit).toHaveBeenCalledTimes(1);

      });
			expect(onSubmit.mock.calls[0][0]).toEqual({
				username: 'kalle',
				password: 'password',
			});
    });
  });
});