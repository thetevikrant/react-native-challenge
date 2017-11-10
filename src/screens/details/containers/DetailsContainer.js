// @flow
import * as React from "react";
import { connect } from "react-redux";
import DetailsMarkup from "../components/DetailsMarkup";

export interface Props {}
export interface State {}
class DetailsContainer extends React.Component<Props, State> {
  render() {
    const param = this.props.navigation.state.params;
    return <DetailsMarkup navigation={this.props.navigation} data={param.data.item}/>;
  }
}
export default connect()(DetailsContainer);
