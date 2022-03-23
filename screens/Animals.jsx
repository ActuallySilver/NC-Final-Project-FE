import { Text, View, Image } from "react-native";
import React, { Component, useEffect, useState } from "react";
import AnimalCard from "../Components/AnimalCard";

export default function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    setAnimals([
      {
        name: "frog",
        image_url:
          "https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg",
        fun_fact: "don't lick me",
        what_they_eat: "zombies",
        video_url: "https://www.youtube.com/watch?v=ZOCi4DGiQr4",
      },
      {
        name: "deer",
        image_url:
          "https://www.wildlifeonline.me.uk/assets/ugc/gallery/fallow_buck_resting.jpg",
        fun_fact: "bambi was not a deer",
        what_they_eat: "sharks",
        video_url: "https://www.youtube.com/watch?v=XWE1YHdRoi8",
      },
      {
        name: "robin",
        image_url:
          "https://www.theenglishgarden.co.uk/wp-content/uploads/2019/12/robin.jpg",
        fun_fact: "inspired the rap genre",
        what_they_eat: "sand",
        video_url: "https://www.youtube.com/watch?v=qGz-pO0QTN4",
      },
    ]);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <Text>Animals</Text>
      <View>
        {animals.map((animal) => {
          return <AnimalCard key={animal.name} animal={animal} />;
        })}
      </View>
    </View>
  );
}