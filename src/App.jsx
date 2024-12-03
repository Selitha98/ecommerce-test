import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Cart = lazy(() => import("./pages/Cart"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Profile = lazy(() => import("./pages/Profile"));
const LayoutWithNavbarFooter = lazy(() => import("./components/LayoutWithNavbarFooter"));
const ProtectedRoute = lazy(() => import("./auth/ProtectedRoute"));

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartProvider";
import Spinner from "./components/Spinner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<Spinner />}>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Router>
                <Suspense fallback={<Spinner />}>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route element={<LayoutWithNavbarFooter />}>
                      <Route path="/" element={<Home />} />
                      <Route element={<ProtectedRoute />}>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/profile" element={<Profile />} />
                      </Route>
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:productId" element={<ProductDetails />} />

                      <Route path="/about-us" element={<AboutUs />} />
                      <Route path="/contact" element={<ContactUs />} />
                    </Route>
                  </Routes>
                </Suspense>
              </Router>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
              />
            </div>
          </CartProvider>
        </AuthProvider>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
