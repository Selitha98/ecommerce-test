import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Validation Schema
const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject cannot exceed 100 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters")
    .required("Message is required")
});

function ContactUs() {
  const navigate = useNavigate();

  // Initial form values
  const initialValues = {
    email: "",
    subject: "",
    message: ""
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    Swal.fire({
      icon: "success",
      title: "Your message was sent",
      text: "Thank you for contacting us!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      resetForm();
      setSubmitting(false);
      navigate("/");
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 mt-12">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </p>
        
        <Formik
          initialValues={initialValues}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-8">
              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@email.com"
                />
                <ErrorMessage 
                  name="email" 
                  component="div" 
                  className="text-red-500 text-sm mt-1" 
                />
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <Field
                  type="text"
                  name="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                />
                <ErrorMessage 
                  name="subject" 
                  component="div" 
                  className="text-red-500 text-sm mt-1" 
                />
              </div>
              
              <div className="sm:col-span-2">
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                />
                <ErrorMessage 
                  name="message" 
                  component="div" 
                  className="text-red-500 text-sm mt-1" 
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default ContactUs;