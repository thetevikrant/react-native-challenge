import * as React from "react";
import {
  Text,
  Body,
  List,
  ListItem,
  Thumbnail,
} from "native-base";

import styles from "../styles";
export interface Props {
  navigation: any;
  list: Object;
}
export interface State {}
class ListViewMarkup extends React.Component<Props, State> {
  render() {
    const { list, navigation } = this.props;
    return (
          <List>
            {list.map((item, index) => (
            <ListItem
              key={index}
              onPress={() =>
                navigation.navigate("Details", {
                  data: { item }
                })}
            >
              <Thumbnail square size={80} source={{ uri: item.img }} />
              <Body>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description} note numberOfLines={2}>{item.description}</Text>
                <Text note>{item.publish_date}</Text>
              </Body>
            </ListItem>
            ))}
          </List>
    );
  }
}

export default ListViewMarkup;
