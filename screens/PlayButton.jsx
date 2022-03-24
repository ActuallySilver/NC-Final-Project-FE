import React from "react";
import { Pressable, StyleSheet, ImageBackground, Image, View } from "react-native";
import splashMainBackground from "../assets/background.png";
import playButton from "../assets/playButton.png";


const PlayButton = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.splashBackground} resizeMode="cover" source={splashMainBackground}>
        <Pressable
          onPress={() => {
            navigation.navigate("Route Logic");
          }}
        >
          <Image source={playButton} style={styles.playButton}></Image>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashBackground: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  playButton: {
    height: 200,
    width: 200,
    marginRight: 100,
  },
});
export default PlayButton;
