import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Body,
  Spinner,
  Item,
  Input,
} from "native-base";

import styles from "./styles";
import ListViewMarkup from "./views/ListViewMarkup";
export interface Props {
  navigation: any;
  list: any;
  fetch: bool;
  preClick: func;
  nextClick: func;
  page: number;
  total: number;
  searchHandler: func;
  text: any;
}
export interface State {}
class HomeMarkup extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={this.props.searchHandler} value={this.props.text} />
            <Icon name="ios-people" />
          </Item>
        </Header>
        <Content>
          {this.props.fetch && <Spinner /> }
          <ListViewMarkup list={this.props.list} navigation={this.props.navigation}/>
          <Body style={styles.paginationWrap}>
            <Button onPress={this.props.preClick} disabled={this.props.page <= 1 ? true : false} iconLeft style={styles.paginationBtn}>
              <Icon name="arrow-back" />
              <Text>Prev</Text>
            </Button>
            <Button onPress={this.props.nextClick} disabled={this.props.page >= this.props.total ? true : false} iconRight style={styles.paginationBtn}>
              <Text>Next</Text>
              <Icon name="arrow-forward" />
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

export default HomeMarkup;
