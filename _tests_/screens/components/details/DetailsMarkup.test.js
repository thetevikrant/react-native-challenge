import React from "react";
import DetailsMarkup from "../../../../src/screens/details/components/DetailsMarkup";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const data = { map: jest.fn() };

it("renders correctly", () => {
  const tree = renderer.create(<DetailsMarkup navigation={navigation} data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});