import React from "react";
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

function Setting() {
  const [button_clicked, setButtonClicked] = useState(false);
  if (button_clicked) {
    return(
      <View>
      <Timer>
      </Timer>
      </View>
          )
  }
  else {
    return(
      <View>
      <Button
      title="Login"
      onPress={() => {setButtonClicked(true)}}
    />
      </View>
    )
  }
}
