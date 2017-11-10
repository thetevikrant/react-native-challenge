import React from "react";
import ListViewMarkup from "../../../../../src/screens/home/components/views/ListViewMarkup";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const list = { map: jest.fn() };

it("renders correctly", () => {
  const tree = renderer.create(<ListViewMarkup navigation={navigation} list={list} />).toJSON();
  expect(tree).toMatchSnapshot();
});