import React, { useState } from "react";
import Form from "../components/Auth/Form";
import Swal from "sweetalert2";
import emailHandler from "../helpers/emailHandler";
import passwordHandler from "../helpers/passwordHandler";
import { userLogin } from "../api/auth/login.api";
import checkUser from "../utils/checkUser";
// import handleLogin from "../helpers/loginHandler";

const Login = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
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

  const loginUser = async (e) => {
    e.preventDefault();

    const { userEmail, userPassword } = formData;

    if (!userEmail || !userPassword) {
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
      setFormData({userEmail: "" , userPassword: ""})
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
      setFormData({userEmail: "" , userPassword: ""})
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
      setFormData({userEmail: "" , userPassword: ""})
      return;
    }

    try {
      showLoading();

      const { userEmail, userPassword } = formData;

      const res = await userLogin(userEmail, userPassword);
      if (res.data?.success) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `Login Successfully!`,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        });

        checkUser();

        setFormData({userEmail: "" , userPassword: ""})
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
      setFormData({userEmail: "" , userPassword: ""})
    }
  };

  return (
    <div>
      <Form
        title="Welcome Back"
        subtitle="Login to your ScamPulse account"
        buttonText="Login"
        showForgot={true}
        bottomText="Don’t have an account?"
        bottomLinkText="Sign up"
        bottomHref="/signup"
        func={loginUser}
        inputs={[
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
        ]}
      />
    </div>
  );
};

export default Login;
