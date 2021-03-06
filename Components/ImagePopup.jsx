import React, { useState } from "react";
import { View, Image, Modal, Pressable, StyleSheet, Dimensions } from "react-native";
import deleteImage from "../firestoreCalls/users/firestore.deleteImage";
import { MaterialCommunityIcons, Fontisto, AntDesign, Feather, Entypo } from "@expo/vector-icons";
import { HStack, useToast, Text } from "native-base";

export const ImagePopup = ({ imageUrl, index, user, animalName, setAnimalUrls }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const toast = useToast();
  return (
    <View key={index} style={styles.box}>
      <Pressable
        style={styles.shadow}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image source={{ uri: imageUrl.imageURL }} style={styles.image}></Image>
      </Pressable>
      <Modal
        style={styles.modalView}
        key={index}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Pressable
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.button}>
              <Text fontFamily="body" fontWeight={600} style={styles.whiteText}>
                Close
              </Text>
            </View>
          </Pressable>

          <Modal
            key={index}
            animationType="fade"
            transparent={true}
            visible={deleteModalVisible}
            onRequestClose={() => {
              setDeleteModalVisible(false);
            }}
          >
            <View style={styles.modalView}>
              <Text fontFamily="body">Are you sure you want to delete this photo?</Text>
              <View style={styles.flexContainer}>
                <HStack space={10} mt="4">
                  <Pressable
                    onPress={() => {
                      deleteImage(user, imageUrl, animalName);
                      setAnimalUrls((animalUrls) => {
                        const copyUrls = [...animalUrls];
                        copyUrls.splice(index, 1);
                        return copyUrls;
                      });
                      setDeleteModalVisible(false);
                      toast.show({
                        title: "Deleted",
                        placement: "bottom",
                      });
                    }}
                  >
                    <Entypo name="check" size={28} color="#339999" />
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      setDeleteModalVisible(false);
                    }}
                  >
                    <Entypo name="cross" size={30} color="#339999" />
                  </Pressable>
                </HStack>
              </View>
            </View>
          </Modal>
          <Image source={{ uri: imageUrl.imageURL }} style={styles.modalImage}></Image>
          <Pressable
            onPress={() => {
              setDeleteModalVisible(true);
            }}
          >
            <AntDesign name="delete" size={24} color="#339999" />
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  image: {
    width: 135,
    height: 135,
    borderRadius: 5,
    margin: 5,
  },
  modalImage: {
    width: Dimensions.get("window").width * 0.75,
    height: Dimensions.get("window").width * 1.3333 * 0.75,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  shadow: {
    marginTop: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  emoji: {
    fontSize: 28,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  flexContainer: { flexDirection: "row" },
  button: {
    textAlign: "center",
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#339999",
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  whiteText: {
    color: "#fff",
  },
});
