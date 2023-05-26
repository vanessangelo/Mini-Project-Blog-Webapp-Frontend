import React, { useEffect, useState } from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import { useSelector } from "react-redux";

// should recheck on the state and the API application
export default function EditUsername(props) {
//   const [newName, setNewName] = useState(null); // change
    const [modalOpen, setModalOpen] = useState(false);
//   const [username, setUsername] = useState() // account

//   const token = useSelector((state) => state.auth.token)

//   //export Username
//   useEffect(() => {
//     if(!token) {
//         return;
//     }
//     profile(token)
//     .then(resp => {
//         setUsername(resp.data)
//     }) 
//     }, [token])

    const handleToggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setNewPic(file);
//   };

//   const handleSave = () => {
//     if (newName) {
//       const formData = new FormData();
//       formData.append("file", newPic);

//       axios
//         .post("https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded", formData, { headers: {Authorization: `Bearer ${token}`}})
//         .then((response) => {
//           console.log(`Profile picture updated successfully. ${response}`);
//           setProfPic(newPic)
//         })
//         .catch((error) => {
//           console.error("Error updating profile picture:", error);
//         })
//         .finally(() => {
//           props.onSaveImg()
//           handleCloseModal();
//         });
//     }
//   };

  return (
    <>
    <div className="flex justify-around w-[48.5rem]">
      <div className="bg-ivory h-20 img div wrapper w-[30rem] flex flex-col justify-center pl-10">
            <div className="title font-libre text-sm font-semibold">
                Username:
            </div>
            <div className="content font-fira pl-8 text-lg">
                <div className="w-fit bg-olive px-2 rounded-lg text-ivory">
                    {props.oldProfile}
                </div>
            </div>
      </div>
      <div>
        <div className="h-20 grid content-center">
            <Button onClick={handleToggleModal} className="bg-gray-400 hover:bg-olive">
            <i className="bx bxs-pencil m-0" style={{ color: "#ffffff" }}></i>
            </Button>
        </div>
        <Modal show={modalOpen} size="md" popup={true} onClose={handleCloseModal}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-monts font-medium text-gray-900 dark:text-white">
                Profile Picture
              </h3>
            <div>
                <div className="mb-2 block">
                    <span>Upload your new profile picture here!</span>
                </div>
                {/* onChange={handleFileChange} */}
                <input type="file" className="text-sm" />
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                <button onClick={true} className="bg-sage hover:bg-olive text-black hover:text-white hover:font-bold w-14 mr-2 text-center rounded">Save</button>
                <button onClick={handleCloseModal} className="bg-sage hover:bg-olive text-black hover:text-white hover:font-bold w-14 text-center rounded">Cancel</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
    </>
  );
}
