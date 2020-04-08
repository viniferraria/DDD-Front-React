import React from 'react';
import { fireEvent, render, queryByDisplayValue} from '@testing-library/react';
import Flag from "../Views/Alert/Flag";
import { Alert } from 'reactstrap';


it("renders success alert", () => {

  // arrange
  const fakeSuccess = {success: true, message: 'Success'};

  // act
  const { queryAllByText } = render(
    <Flag message={fakeSuccess.message} success={fakeSuccess.success} />
  );
  console.log(queryAllByText(fakeSuccess.message).textContext);

  // assert
  expect(queryAllByText(fakeSuccess.message)).toBeTruthy();

});

it("renders error alert", () => {

  // arrange
  const fakeError = {success: false, message: 'Error'};

  // act
  const { queryAllByText } = render(
    <Flag message={fakeError.message} success={fakeError.success} />
  );
  console.log(queryAllByText(fakeError.message).textContext);

  // assert
  expect(queryAllByText(fakeError.message)).toBeTruthy();

});
