import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, FlatList, Text } from "native-base";
import SubScreen from "./SubScreen";
import Photos from "./Photos";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Main() {
  const [dog, setDog] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState("");
  const [showModalPhoto, setShowModalPhoto] = useState(false);
  const [itemPhoto, setItemPhoto] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((json) => setDog(json.message));
  }, []);

  const doggy = Object.keys(dog);

  const handleModal = (item) => {
    setItem([]);
    setShowModal(true);
    setItem(item);
  };

  const handleModalPhoto = (items) => {
    setItemPhoto([]);
    setShowModalPhoto(true);
    setItemPhoto(items);
  };

  return (
    <ScrollView>
      <Box px="7" borderTopLeftRadius="20" borderTopRightRadius="20" mt={-6}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt={4}
          mb={5}
        >
          <Text fontSize={23} fontWeight="bold">
            Welcome To Dogs Worlds
          </Text>
        </Box>
        <Box>
          <Text fontSize={23} fontWeight="bold" color="grey">
            In This Application, There are Several Types of Dogs Around The
            World
          </Text>
        </Box>
        <FlatList
          data={doggy?.filter((items) => {
            if (value == "") {
              return items;
            } else if (items?.toLowerCase().includes(value.toLowerCase())) {
              return items;
            }
          })}
          renderItem={({ item }) => (
            <Box
              px={4}
              py={3}
              mt={2}
              my={1}
              bg="light.200"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <TouchableOpacity onPress={() => handleModal(item)}>
                <Text fontSize={17} fontWeight="bold" marginLeft={3}>
                  {item.toUpperCase()}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleModalPhoto(item)}>
                <Text fontSize={12} fontWeight="bold" marginLeft={5}>
                  Picture :
                </Text>
                <FontAwesome5 name="dog" size={40} color="red" />
              </TouchableOpacity>
            </Box>
          )}
        />
      </Box>
      <SubScreen
        showModal={showModal}
        onHide={() => setShowModal(false)}
        endPoint={item}
      />
      <Photos
        showModalPhoto={showModalPhoto}
        onHidden={() => setShowModalPhoto(false)}
        endPointImage={itemPhoto}
      />
    </ScrollView>
  );
}
