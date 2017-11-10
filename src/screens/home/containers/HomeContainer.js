// @flow
import * as React from "react";
import { connect } from "react-redux";
import HomeMarkup from "../components/HomeMarkup";
import actions from "../modules/actions";
import _ from "lodash";
export interface Props {
  navigation: any,
  fetchList: Function,
  list: Object,
  fetch: bool,
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 3,
      list: [],
      total: 0,
      text: "",
    };
    this._setList = this._setList.bind(this);
    this._preClick = this._preClick.bind(this);
    this._nextClick = this._nextClick.bind(this);
    this._searchHandler = this._searchHandler.bind(this);
  }
  componentWillMount() {
    this.props.clearList();
  }
  componentDidMount() {
    this.props.fetchList();
  }
  componentWillReceiveProps(newProps) {
    const { perPage } = this.state;
    if (newProps.list.length) {
      this._setList(newProps.list, 0, perPage, 1);
    }
  }
  render() {
    const { page, perPage, list, total, text } = this.state;
    const { fetch, navigation } = this.props;
    return <HomeMarkup
      navigation={navigation}
      list={list}
      fetch={fetch}
      page={page}
      perPage={perPage}
      preClick={this._preClick}
      nextClick={this._nextClick}
      total={total}
      searchHandler={this._searchHandler}
      text={text}
     />;
  }
  _setList(list, start, end, page) {
    this.setState({
      list: list.slice(start, end),
      page,
      total: list.length / this.state.perPage
    });
  }
  _preClick() {
    const { page, perPage } = this.state;
    this._setList(this.props.list, (page - 2) * perPage, (page - 2) * perPage + perPage, page - 1);
  }
  _nextClick() {
    const { page, perPage } = this.state;
    this._setList(this.props.list, page * perPage, page * perPage + perPage, page + 1);
  }
  _searchHandler(text) {
    const list = _.filter(this.props.list,function(item){
      return item.title.indexOf(text) > -1;
    });
    this.setState({text});
    this._setList(list, 0, this.state.perPage, 1);
  }
}

function bindAction(dispatch) {
  const { fetchList, clearList } = actions;
  return {
    fetchList: () => dispatch(fetchList()),
    clearList: () => dispatch(clearList()),
  };
}

const mapStateToProps = state => ({
  list: state.homeReducer.list,
  fetch: state.homeReducer.fetch,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
