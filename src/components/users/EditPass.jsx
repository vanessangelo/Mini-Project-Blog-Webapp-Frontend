import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ChangePass from "../../api/changepass";
import { VscEye } from 'react-icons/vsc';
import { useNavigate } from "react-router-dom";

export default function EditPass (props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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

    //toggle show password
    const togglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
      };

    // yup validation
    const validationSchema = Yup.object().shape({
        currentPassword: Yup.string().required('Current Password is required'),
        password: Yup.string().matches(/^(?=.*[A-Z])(?=.*\W)(?=.*\d)[a-zA-Z0-9\W]{6,}$/,
        'At least 6 characters, 1 symbol, and 1 capital letter'
        ).required('New Password is required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    });

    const initialValues = {
        currentPassword : "",
        password : "",
        confirmPassword : "",
      }
      
    const handleSubmit = async (values) => {
      try { 
        await ChangePass(token, {            
          currentPassword: values.currentPassword,
          password: values.password,
          confirmPassword: values.confirmPassword});
          setSuccessMessage('Password updated successfully.');
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
                Password:
            </div>
            <div className="content font-fira pl-8 text-lg">
                <div className="w-fit bg-olive px-2 rounded-lg text-ivory">
                    * * * * *
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
                Password
              </h3>
            <div>
                <div className="mb-2 block">
                    <span>Change your password here!</span>
                </div>
                <div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form>
                        <div className='grid grid-flow-row gap-1 justify-center'>
                            <div className='grid grid-flow-row gap-3 w-60'>
                              <div>
                                <label htmlFor="currentPassword" className="font-fira text-sm">Current Password:</label>
                                <Field type={showPassword ? "text" : "password"} id="currentPassword" name="currentPassword" className='border-none h-6' placeholder='Enter your current password here.'/>
                                <ErrorMessage name="currentPassword" component="div" className="text-red-500" />
                              </div>
                              <div>
                                <label htmlFor="password" className="font-fira text-sm">New Password:</label>
                                <Field type={showPassword ? "text" : "password"} id="password" name="password" className='border-none h-6' placeholder='Enter your new password here.'/>
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                              </div>
                              <div>
                                <label htmlFor="confirmPassword" className="font-fira text-sm">Confirm Password:</label>
                                <Field type={showPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" className='border-none h-6'placeholder='Re-enter your new password here.'/>
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                              </div>
                            </div>
                            <div className='grid grid-flow-col justify-start'>
                                <button onClick={togglePassword} className='m-1'><span className='flex content-center h-5'><VscEye className='m-1'/>Show Password</span></button>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
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
