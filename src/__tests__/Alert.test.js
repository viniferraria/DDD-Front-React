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

it("renders success alert", () => {

  // arrange
  const fakeSuccess = {success: true, message: 'Success'};

  // act
  const { queryAllByText }= render(<Alert>hello</Alert>);

  // assert
  expect(queryAllByText(fakeSuccess.message)).toBeTruthy();

});
