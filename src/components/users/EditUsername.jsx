import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditUsername(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token)

  // handle open modal
  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // handle close modal
  const handleCloseModal = () => {
    setModalOpen(false);

  };

  // yup validation
  const validationSchema = Yup.object().shape({
    currentUsername: Yup.string().required("fill this in"),
    newUsername: Yup.string().required("fill this in").min(3).max(20),
  });

  const initialValues = {
    currentUsername: "",
    newUsername: "",
  }

  const handleSubmit = async (values) => {
    try {
      await axios.patch(`https://minpro-blog.purwadhikabootcamp.com/api/auth/changeUsername`, { currentUsername: values.currentUsername, newUsername: values.newUsername }, { headers: { Authorization: `Bearer : ${token}` } })
      setSuccessMessage('Username updated successfully.');
      setErrorMessage('');

      setTimeout(() => {
        navigate("/login")
      }, 3000)
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
      setSuccessMessage('');
    }
  };

  return (
    <>
      <div className="flex justify-around w-[48.5rem]">
        <div className="bg-ivory h-20 img div wrapper w-[30rem] flex flex-col justify-center pl-10 rounded-b-lg">
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
                  Username
                </h3>
                <div>
                  <div className="mb-2 block">
                    <span>Change your username here!</span>
                  </div>
                  <div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                      <Form>
                        <div className='grid grid-flow-row gap-1 justify-center'>
                          <div className='grid grid-flow-row gap-3 w-60'>
                            <div>
                              <label className="font-fira text-sm">Current Username:</label>
                              <Field type="text" id="currentUsername" name="currentUsername" className='border-none h-6' placeholder='Enter your current username here.' />
                              <ErrorMessage name="currentUsername" component="div" className="text-red-500" />
                            </div>
                            <div>
                              <label className="font-fira text-sm">New Username:</label>
                              <Field type="text" id="newUsername" name="newUsername" className='border-none h-6' placeholder='Enter your new new username here.' />
                              <ErrorMessage name="newUsername" component="div" className="text-red-500" />
                            </div>
                          </div>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 pt-4">
                            <button
                              type="submit"
                              className="bg-sage hover:bg-olive text-black hover:text-white hover:font-bold w-14 mr-2 text-center rounded"
                            >
                              Update
                            </button>
                            {successMessage && <div className="text-green-500 mt-2">{successMessage}</div>}
                            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
                            <button onClick={handleCloseModal} className="bg-sage hover:bg-olive text-black hover:text-white hover:font-bold w-14 text-center rounded">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}
