import React, { useEffect, useState } from "react";
import { addUser } from "./functiions";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const formFields = [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Username", name: "username", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    setIsShow(true);
    if (formData.password === formData.confirmPassword) {
      setIsPasswordMatched(true);
    } else {
      setIsPasswordMatched(false);
    }
  }, [formData.confirmPassword, formData.password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic with the formData
    addUser(formData, setIsLoading);
  };

  return (
    <>
      <div
        className={`fixed inset-0 flex justify-center items-center bg-black/50 ${
          isLoading ? "block" : "hidden"
        }`}
        role="status"
      >
        <div>
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  mx-auto h-[calc(100vh-80px)]">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white py-3">
              Sign Up
            </h1>
            <form
              className="space-y-4 md:space-y-6 flex flex-col"
              onSubmit={handleSubmit}
            >
              {formFields.map((field) => (
                <div key={field.name}>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {field.label}:
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </label>
                </div>
              ))}
              {/* <div>
                <label htmlFor="role">User Role: </label>
                <select name="role" id="role" onChange={handleChange}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
              </div> */}
              {isShow && (
                <p
                  className={
                    isPasswordMatched
                      ? "text-xs text-green-500"
                      : "text-xs text-red-500"
                  }
                >
                  {isPasswordMatched
                    ? "Passwords are matched!"
                    : "Passwords are not matched!"}
                </p>
              )}
              <button
                type="submit"
                disabled={!isPasswordMatched}
                className="py-2 bg-blue-500 text-white rounded-md "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
