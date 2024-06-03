import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast('Successfully copied to the clipboard!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    if (passwordRef.current.type === "password") {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      const newPassword = { ...form, id: uuidv4() };
      setPasswordArray([...passwordArray, newPassword]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, newPassword]));
      setForm({ site: "", username: "", password: "" });
      toast('Password Saved!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast('Error: Password not saved Ensure all fields are longer than 3 characters.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  
  const deletePassword = (id) => {
    if (confirm("Do you really want to delete this password?")) {
      const updatedPasswords = passwordArray.filter(item => item.id !== id);
      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      toast('Password Deleted successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const editPassword = (id) => {
    const passwordToEdit = passwordArray.find(item => item.id === id);
    setForm(passwordToEdit);
    const updatedPasswords = passwordArray.filter(item => item.id !== id);
    setPasswordArray(updatedPasswords);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="p-3 md:mycontainer min-h-[88.2vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-blue-500"> &lt;</span>
          Lock<span className="text-blue-500"> Magic/&gt;</span>
        </h1>
        <p className="text-blue-900 text-lg text-center">Your Trusted Guardian in the Digital World</p>

        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-blue-500 w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
          />

          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter UserName"
              className="rounded-full border border-blue-500 w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
            />

            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-blue-500 w-full p-4 py-1"
                type="password"
                name="password"
                id="password"
              />
              <span className="absolute right-[3px] top-[4px] cursor-pointer" onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="text-black flex justify-center items-center gap-2 bg-blue-400 hover:bg-blue-300 rounded-full px-8 py-2 w-fit border border-blue-900"
          >
            <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 ? (
            <div>No Passwords to show</div>
          ) : (
            <table className="table-auto w-full rounded-md overflow-hidden mb-10">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 border-white text-center">
                      <div className="flex items-center justify-center">
                        <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                        <div className="iconcopy size-7 cursor-pointer" onClick={() => copyText(item.site)}>
                          <lord-icon
                            style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 border-white text-center">
                      <div className="flex items-center justify-center">
                        <span>{item.username}</span>
                        <div className="iconcopy size-7 cursor-pointer" onClick={() => copyText(item.username)}>
                          <lord-icon
                            style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 border-white text-center">
                      <div className="flex items-center justify-center">
                        <span>{item.password}</span>
                        <div className="iconcopy size-7 cursor-pointer" onClick={() => copyText(item.password)}>
                          <lord-icon
                            style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="justify-center py-2 border-white text-center">
                      <span className="cursor-pointer mx-1" onClick={() => editPassword(item.id)}>
                        <lord-icon
                          style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "3px" }}
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                        ></lord-icon>
                      </span>
                      <span className="cursor-pointer mx-1" onClick={() => deletePassword(item.id)}>
                        <lord-icon
                          style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "3px" }}
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                        ></lord-icon>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;


