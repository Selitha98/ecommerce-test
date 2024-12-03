import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BgImage from "../assets/images/bg.webp";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  address: Yup.object().shape({
    street: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string()
      .matches(/^[0-9]{5}$/, "Zip code must be 5 digits")
      .required("Zip code is required"),
  }),
  termsAccepted: Yup.boolean().oneOf([true], "Please accept the terms and conditions"),
});

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.some((user) => user.email === values.email);

    if (userExists) {
      toast.error("User with this email already exists");
      setSubmitting(false);
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now(), 
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      address: values.address,
      password: values.password,
      createdAt: new Date().toISOString(),
    };

    // Add user to local storage
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    //  redirect
    toast.success("Account created successfully!");
    navigate("/login");
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/*  Image */}
      <div className="hidden md:block md:w-1/2 bg-primary-50 md:flex items-center justify-center p-10">
        <img
          src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
          alt="Designer lifestyle illustration"
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md max-h-[90vh] overflow-y-auto pr-4 scrollbar-hide">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">Create an account</h1>

          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
              address: {
                street: "",
                city: "",
                state: "",
                zipCode: "",
              },
              termsAccepted: false,
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="grid md:grid-cols-2 md:gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="John"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Field
                    type="tel"
                    name="phoneNumber"
                    placeholder="1234567890"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="grid md:grid-cols-2 md:gap-4">
                  <div>
                    <label htmlFor="address.street" className="block mb-2 text-sm font-medium text-gray-700">
                      Street Address
                    </label>
                    <Field
                      type="text"
                      name="address.street"
                      placeholder="123 Main St"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <ErrorMessage name="address.street" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="address.city" className="block mb-2 text-sm font-medium text-gray-700">
                      City
                    </label>
                    <Field
                      type="text"
                      name="address.city"
                      placeholder="New York"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <ErrorMessage name="address.city" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-4">
                  <div>
                    <label htmlFor="address.state" className="block mb-2 text-sm font-medium text-gray-700">
                      State
                    </label>
                    <Field
                      type="text"
                      name="address.state"
                      placeholder="NY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <ErrorMessage name="address.state" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="address.zipCode" className="block mb-2 text-sm font-medium text-gray-700">
                      Zip Code
                    </label>
                    <Field
                      type="text"
                      name="address.zipCode"
                      placeholder="10001"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <ErrorMessage name="address.zipCode" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Field type="checkbox" name="termsAccepted" className="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="termsAccepted" className="font-light text-gray-700">
                      I accept the{" "}
                      <a href="#" className="font-medium text-primary-600 hover:underline">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <ErrorMessage name="termsAccepted" component="div" className="text-red-500 text-sm mt-1" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Creating Account..." : "Create an account"}
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-primary-600 hover:underline">
                    Login here
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;
