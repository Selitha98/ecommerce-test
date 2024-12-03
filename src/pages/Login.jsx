import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import BgImage from "../assets/images/bg.webp";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    rememberMe: !!localStorage.getItem("rememberedEmail"),
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const loginResult = await login(values.email, values.password);

      localStorage.setItem('user', JSON.stringify(loginResult.user));

      if (values.rememberMe) {
        localStorage.setItem("rememberedEmail", values.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      toast.success("Login Successful!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Invalid credentials. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Image */}
      <div className="hidden md:block md:w-1/2 bg-primary-50 md:flex items-center justify-center p-10">
        <img
          src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
          alt="Designer lifestyle illustration"
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen p-6 md:p-10 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">Sign in to your account</h1>

          <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Your email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Field type="checkbox" name="rememberMe" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-primary-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Don't have an account?{" "}
                  <Link to="/register" className="font-medium text-primary-600 hover:underline">
                    Sign up
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

export default Login;
