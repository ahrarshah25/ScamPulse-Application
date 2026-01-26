import React, { useState } from "react";
import Form from "../components/Auth/Form";
import Swal from "sweetalert2";
import emailHandler from "../helpers/emailHandler";
import passwordHandler from "../helpers/passwordHandler";
import {signupHandler} from "../api/auth/signup.api";
import checkUser from "../utils/checkUser";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
  });

  checkUser();

  const showLoading = () => {
    Swal.fire({
      toast: true,
      position: "top-end",
      title: "Processing...",
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        popup: "swal-margin-top",
      },
    });
  };

  const signupUser = async (e) => {
    e.preventDefault();

    const { firstName, lastName, userEmail, userPassword, confirmPassword } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !userEmail ||
      !userPassword ||
      !confirmPassword
    ) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Empty Input.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({
        userEmail: "",
        userPassword: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
      });
      return;
    }

    if (!emailHandler(userEmail)) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title:
          "Pleasde Enter Correct Email WIth Correct Syntax.\nFor Example: scampulse.io@gmail.com",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({
        userEmail: "",
        userPassword: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
      });
      return;
    }

    if (!passwordHandler(userPassword)) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Please Enter Password That Contain 8 Characters.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({
        userEmail: "",
        userPassword: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
      });
      return;
    }

    if (userPassword !== confirmPassword) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Please Enter Same Password In Confirm Password Section.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      return;
    }

    try {
      showLoading();

      const res = await signupHandler(
        userEmail,
        userPassword,
        confirmPassword,
        lastName,
        firstName,
      );

      if (res.status === 200 || res.data?.success) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `Signup Successfully!`,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        });

        checkUser();

      }
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Error: " + (error.response?.data?.message || error.message),
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
    }
  };

  return (
    <div>
      <Form
        title="Create Account"
        subtitle="Start protecting yourself with ScamPulse"
        buttonText="Sign Up"
        showForgot={false}
        bottomText="Already have an account?"
        bottomLinkText="Login"
        bottomHref="/login"
        func={signupUser}
        inputs={[
          {
            label: "First Name",
            type: "text",
            placeholder: "Scam",
            value: formData.firstName,
            func: (e) => {
              setFormData({ ...formData, firstName: e.target.value });
            },
          },
          {
            label: "Last Name",
            type: "text",
            placeholder: "Pulse",
            value: formData.lastName,
            func: (e) => {
              setFormData({ ...formData, lastName: e.target.value });
            },
          },
          {
            label: "Email",
            type: "email",
            placeholder: "you@scampulse.io",
            value: formData.userEmail,
            func: (e) => {
              setFormData({ ...formData, userEmail: e.target.value });
            },
          },
          {
            label: "Password",
            type: "password",
            placeholder: "••••••••",
            value: formData.userPassword,
            func: (e) => {
              setFormData({ ...formData, userPassword: e.target.value });
            },
          },
          {
            label: "Confirm Password",
            type: "password",
            placeholder: "••••••••",
            value: formData.confirmPassword,
            func: (e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
            },
          },
        ]}
      />
    </div>
  );
};

export default Signup;
