import { FaGoogle } from "react-icons/fa";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaFacebookF } from "react-icons/fa";
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("*Required"),
  password: Yup.string().required("*Required"),
});

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("*Required"),
  email: Yup.string().email("*Invalid email").required("*Required"),
  password: Yup.string().required("*Required"),
});

const Loginform = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (values) => {
    console.log("Login Values:", values);
    // Handle login logic here
  };

  const handleSignupSubmit = (values) => {
    console.log("Signup Values:", values);
    // Handle signup logic here
  };

  return (
    <div className="p-2">
      <h1 className="text-center font-bold text-3xl text-primary ">
        Welcome to Magnis
      </h1>

      <div className="flex justify-around p-1 gap-2 rounded mt-5 bg-gray-100">
        <button
          className={`rounded p-1 w-full ${
            isLogin ? "bg-white text-accent" : "bg-transparent"
          }`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`rounded p-1 w-full ${
            !isLogin ? "bg-white text-accent" : "bg-transparent"
          }`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      {isLogin ? (
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLoginSubmit}
        >
          {() => (
            <Form>
              <div className="my-2">
                <label className="text-sm font-medium text-accent">Email</label>{" "}
                <br />
                <Field
                  className="border p-2 rounded w-full border-gray-300 text-sm text-gray-500"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="email"
                  component="div"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-accent">
                  Password
                </label>{" "}
                <br />
                <Field
                  className="border p-2 rounded w-full border-gray-300 text-sm text-gray-500"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="password"
                  component="div"
                />
              </div>
              <button
                className="w-full p-2 bg-primary rounded mt-5 text-white font-semibold active:bg-background active:text-accent"
                type="submit"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{ fullName: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={handleSignupSubmit}
        >
          {() => (
            <Form>
              <div>
                <label className="text-sm font-medium text-accent">
                  Full Name
                </label>
                <br />
                <Field
                  className="border p-2 rounded w-full border-gray-300 text-sm text-gray-500"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="fullName"
                  component="div"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-accent">Email</label>
                <br />
                <Field
                  className="border p-2 rounded w-full border-gray-300 text-sm text-gray-500"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="email"
                  component="div"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-accent">
                  Password
                </label>
                <br />
                <Field
                  className="border p-2 rounded w-full border-gray-300 text-sm text-gray-500"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="password"
                  component="div"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-primary rounded  mt-5 text-white font-semibold active:bg-background active:text-accent"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      )}

      <div>
        <div className="flex items-center mt-3">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 font-semibold text-[0.8rem] text-gray-500">
            OR CONTINUE WITH
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex mt-2 justify-around items-center gap-5">
        <button className="flex items-center rounded p-2 text-primary font-bold gap-1 justify-center border w-full">
          <FaFacebookF/>Facebook</button>
        <button className="flex items-center rounded p-2 text-primary font-bold gap-1 justify-center border w-full">
          <FaGoogle />
          Google
        </button>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
