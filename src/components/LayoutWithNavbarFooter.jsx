import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWithNavbarFooter = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutWithNavbarFooter;