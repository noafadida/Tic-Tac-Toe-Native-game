import { Alert, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { FC } from "react";

const Brick: FC<{
  turn: number;
  index: number;
  onBrickClick: (updatedPressed: number[]) => void;
  pressed: number[];
  gameOver: boolean;
}> = (props) => {
  const { index, onBrickClick, turn, pressed, gameOver } = props;
  const updatedPressed: number[] = [...pressed];

  const onClick = () => {
    if (gameOver) {
      Alert.alert("Please Reset the game");
      return;
    } else if (pressed[index] !== 0) {
      Alert.alert("Cannot press this one");
      return;
    }
    updatedPressed[index] = turn === 1 ? 1 : 2;
    onBrickClick(updatedPressed);
  };

  const getBackground = () => {
    if (pressed[index] === 1) {
      return "#D6E4E5";
    } else if (pressed[index] === 2) {
      return "#DFF6FF";
    } else {
      return "white";
    }
  };

  return (
    <View style={styles.brick}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: getBackground() }]}
        onPress={onClick}
      >
        {/* <Image style={styles.img} source={require(`./assets/x.png`)}></Image> */}
        {pressed[index] === 1 && (
          <Image style={styles.img} source={require(`./assets/x.png`)}></Image>
        )}
        {pressed[index] === 2 && (
          <Image
            style={styles.img}
            source={require(`./assets/circle.png`)}
          ></Image>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Brick;

const styles = StyleSheet.create({
  brick: {
    flex: 1,
    backgroundColor: "white",
    margin: 5,
    aspectRatio: 1,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 75,
    height: 75,
  },
});
