import { Modal } from "native-base";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";

export default function SubScreen(props) {
  const { showModal, onHide, endPoint } = props;
  const [dog, setDog] = useState([]);

  useEffect(() => {
    endPoint === ""
      ? null
      : fetch(`https://dog.ceo/api/breed/${endPoint}/list`)
          .then((response) => response.json())
          .then((json) => setDog(json.message));
  }, [endPoint]);

  console.log(dog);

  return (
    <Modal isOpen={showModal} onClose={() => onHide()}>
      <Modal.Content maxWidth="3000px">
        <Modal.CloseButton />
        <Modal.Header>
          <Text
            style={{
              fontSize: 30,
            }}
          >
            {endPoint}
          </Text>
        </Modal.Header>
        <Modal.Body>{dog}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
