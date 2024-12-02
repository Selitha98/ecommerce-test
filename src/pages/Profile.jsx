import React from "react";
import { useUserById } from "../hooks/useUsers";
import Spinner from "../components/Spinner";
import { Calendar, Edit, Mail, MapPin, Phone, User } from "lucide-react";

function Profile() {
  const { data: userData, isLoading, isError } = useUserById();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen mt-16">
        <Spinner size={70} />
      </div>
    );
  }

  return (
    <section className="py-10 dark:bg-gray-900 mt-16">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl max-w-2xl mx-auto">
          {/* Profile Header */}
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl" />
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 bg-white dark:bg-gray-700 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 pb-10 px-6 text-center">
            <h1 className="text-2xl font-bold dark:text-white capitalize">
              {userData.name.firstname} {userData.name.lastname}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">@{userData.username}</p>

            {/* Profile Details */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex items-center">
                <Mail className="mr-4 text-blue-500" />
                <div>
                  <h3 className="font-semibold dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">{userData.email}</p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex items-center">
                <Phone className="mr-4 text-green-500" />
                <div>
                  <h3 className="font-semibold dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">{userData.phone}</p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex items-center">
                <MapPin className="mr-4 text-red-500" />
                <div>
                  <h3 className="font-semibold dark:text-white">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {userData.address.street} {userData.address.number},{userData.address.city} {userData.address.zipcode}
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex items-center">
                <Calendar className="mr-4 text-purple-500" />
                <div>
                  <h3 className="font-semibold dark:text-white">Geolocation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lat: {userData.address.geolocation.lat}, Long: {userData.address.geolocation.long}
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
