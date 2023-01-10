import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
} from "react-native";
import { useState, FC } from "react";
import Brick from "./Brick";

const App: FC = () => {
  const initialPressed = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [turn, setTurn] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [pressed, setPressed] = useState(initialPressed);

  const checkIfGameOver = (pressed: number[]) => {
    if (
      pressed[0] === pressed[1] &&
      pressed[1] === pressed[2] &&
      pressed[1] !== 0
    ) {
      setGameOver(true);
      return true;
    }
    if (
      pressed[3] === pressed[4] &&
      pressed[4] === pressed[5] &&
      pressed[4] !== 0
    ) {
      setGameOver(true);
      return true;
    }
    if (
      pressed[6] === pressed[7] &&
      pressed[7] === pressed[8] &&
      pressed[7] !== 0
    ) {
      setGameOver(true);
      return true;
    }
    if (
      pressed[0] === pressed[3] &&
      pressed[3] === pressed[6] &&
      pressed[3] !== 0
    ) {
      setGameOver(true);
      return true;
    }
    if (
      pressed[1] === pressed[4] &&
      pressed[4] === pressed[7] &&
      pressed[7] !== 0
    ) {
      setGameOver(true);
      return true;
    }
    if (
      pressed[2] === pressed[5] &&
      pressed[5] === pressed[8] &&
      pressed[5] !== 0
    ) {
      setGameOver(true);
      return true;
    }
    if (
      pressed[0] === pressed[4] &&
      pressed[4] === pressed[8] &&
      pressed[4] !== 0
    ) {
      setGameOver(true);
      return true;
    }
    if (
      pressed[2] === pressed[4] &&
      pressed[4] === pressed[6] &&
      pressed[6] !== 0
    ) {
      setGameOver(true);
      return true;
    }
  };

  const onBrickClick = (updatedPressed: number[]) => {
    const isGameOver = checkIfGameOver(updatedPressed);
    setPressed(updatedPressed);
    if (!isGameOver) {
      turn === 1 ? setTurn(2) : setTurn(1);
    }
  };

  const clearButton = () => {
    setPressed(initialPressed);
    setGameOver(false);
    setTurn(1);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.clearBtn} onPress={clearButton}>
        <Text style={styles.textBtn}>New Game</Text>
      </Pressable>
      <Text style={styles.text}>Player {turn}</Text>
      <View style={styles.row}>
        <Brick
          pressed={pressed}
          turn={turn}
          index={0}
          onBrickClick={onBrickClick}
          gameOver={gameOver}
        ></Brick>
        <Brick
          pressed={pressed}
          turn={turn}
          index={1}
          onBrickClick={onBrickClick}
          gameOver={gameOver}
        ></Brick>
        <Brick
          pressed={pressed}
          turn={turn}
          index={2}
          onBrickClick={onBrickClick}
          gameOver={gameOver}
        ></Brick>
      </View>
      <View style={styles.row}>
        <Brick
          pressed={pressed}
          turn={turn}
          index={3}
          onBrickClick={onBrickClick}
          gameOver={gameOver}
        ></Brick>
        <Brick
          pressed={pressed}
          turn={turn}
          index={4}
          onBrickClick={onBrickClick}
          gameOver={gameOver}
        ></Brick>
        <Brick
          pressed={pressed}
          turn={turn}
          index={5}
          onBrickClick={onBrickClick}
          gameOver={gameOver}
        ></Brick>
      </View>
      <View style={styles.row}>
        <Brick
          pressed={pressed}
          turn={turn}
          index={6}
          onBrickClick={onBrickClick}
          gameOver={gameOver}
        ></Brick>
        <Brick
          pressed={pressed}
          turn={turn}
          index={7}
          onBrickClick={onBrickClick}
          gameOver={gameOver}
        ></Brick>
        <Brick
          pressed={pressed}
          turn={turn}
          index={8}
          onBrickClick={onBrickClick}
          gameOver={gameOver}
        ></Brick>
      </View>
      <Text style={styles.title}>
        {gameOver ? `Game Over! Player ${turn} Win!` : "Let's Start!"}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#EFF5F5",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  row: {
    flexDirection: "row",
  },
  text: {
    fontSize: 28,
    textAlign: "center",
    marginVertical: 16,
    color:"#A2B5BB"
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 40,
    // fontWeight: "400",
    color: "#A2B5BB",
  },
  clearBtn: {
    backgroundColor: "black",
    width: 130,
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
});
