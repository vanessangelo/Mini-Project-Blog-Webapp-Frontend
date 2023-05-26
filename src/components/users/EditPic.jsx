import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import { useSelector } from "react-redux";
import foto from "../../assets/Untitled.jpg"

// should recheck on the state and the API application
export default function EditPic(props) {
  const [newPic, setNewPic] = useState(null); // change
  const [modalOpen, setModalOpen] = useState(false);
  const [profPic, setProfPic] = useState() // account 

  const token = useSelector((state) => state.auth.token)

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setNewPic(file);
  };

  const handleSave = (e) => {
    e.preventDefault()
    if (newPic) {
      const formData = new FormData();
      formData.append("file", newPic);

      axios
        .post("https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded", formData, { headers: {Authorization: `Bearer ${token}`}})
        .then((response) => {
          console.log(`Profile picture updated successfully.`);
          setProfPic(newPic)
        })
        .catch((error) => {
          console.error("Error updating profile picture:", error);
        })
        .finally(() => {
          props.onSaveImg()
          handleCloseModal();
          window.location.reload()
        });
    }
  };

  return (
    <>
    <div className="flex justify-around w-[48.5rem]">
      <div className="bg-ivory img div wrapper w-[30rem] grid justify-center py-2 rounded-t-lg">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img className="w-full h-full" src={props.oldProfile ? `https://minpro-blog.purwadhikabootcamp.com/${props.oldProfile}` : foto} alt="img" />
        </div>
      </div>
      <div className="py-2">
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
                <input type="file" className="text-sm" onChange={handleFileChange} />
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                <button onClick={handleSave} className="bg-sage hover:bg-olive text-black hover:text-white hover:font-bold w-14 mr-2 text-center rounded">Save</button>
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
