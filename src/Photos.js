// import { Center, FlatList, Image, Modal } from "native-base";
// import React, { useEffect, useState } from "react";

// export default function Photos(props) {
//   const { showModalPhoto, onHidden, endPointImage } = props;
//   const [photoDog, setPhotoDog] = useState("");

//   useEffect(() => {
//     endPointImage.length < 1
//       ? null
//       : fetch(`https://dog.ceo/api/breed/${endPointImage}/images`)
//           .then((response) => response.json())
//           .then((json) => setPhotoDog(json.message));
//   }, [endPointImage]);

//   return (
//     <Modal isOpen={showModalPhoto} onClose={() => onHidden()}>
//       <Modal.Content maxWidth="3000px">
//         <Modal.CloseButton />
//         <Modal.Header>{endPointImage}</Modal.Header>
//         <FlatList
//           data={photoDog}
//           maxToRenderPerBatch={10}
//           renderItem={({ item }) => (
//             <Center>
//               <Image
//                 source={{
//                   uri: item,
//                 }}
//                 size="96"
//                 mt={2}
//               />
//             </Center>
//           )}
//         />
//       </Modal.Content>
//     </Modal>
//   );
// }
