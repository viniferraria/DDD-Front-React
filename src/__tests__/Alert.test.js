import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Flag from "../Views/Alert/Flag";

afterEach(cleanup);

it("renders success alert", () => {

  // arrange
  const fakeSuccess = {success: true, message: 'Success'};

  // act
  const { queryByRole, debug } = render(
    <Flag message={fakeSuccess.message} success={fakeSuccess.success} />
  );

  const alert = queryByRole("alert");

  // assert
  expect(alert.className).toBe("alert alert-success fade");

});


it("renders error alert", () => {

  // arrange
  const fakeError = {success: false, message: 'Error'};

  // act
  const { queryByRole, debug } = render(
    <Flag message={fakeError.message} success={fakeError.success} />
  );

  const alert = queryByRole("alert");

  // assert
  expect(alert.className).toBe("alert alert-danger fade");

});
