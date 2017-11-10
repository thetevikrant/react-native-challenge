import * as React from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Thumbnail,
  Card,
  CardItem,
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  data: any;
}
export interface State {}
class DetailsMarkup extends React.Component<Props, State> {
  render() {
    const { data, navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.navigate("Home")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Details</Title>
          </Body>
          <Right />
        </Header>
        <Card style={styles.detailsCard}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: "https://cdn3.iconfinder.com/data/icons/business-bundle/512/news-512.png"}} />
              <Body>
                <Text>{data.title}</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image style={styles.detailsImage} source={{uri: data.img}} />
              <Text style={styles.detailsImageText}>{data.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

export default DetailsMarkup;
