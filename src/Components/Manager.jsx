import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }

  }, [])

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
    navigator.clipboard.writeText(text)
  }

  const showPassword = () => {
    passwordRef.current.type = "text"
    console.log(ref.current.src)
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png"
      passwordRef.current.type = "password"
    }
    else {
      passwordRef.current.type = "text"
      ref.current.src = "icons/eyecross.png"
    }
  }

  const savePassword = () => {
    setpasswordArray([...passwordArray, {...form, id:uuidv4()}])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
    console.log([...passwordArray, form])
  }

  const deletePassword = (id) => {
    console.log ("Deleting password with ID", id)
    // setpasswordArray([...passwordArray, {...form, id:uuidv4}])
    // localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
    // console.log([...passwordArray, form])
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

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
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,244,123,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          Lock<span className="text-green-500"> Magic/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">Your Trusted Guardian in the Digital World</p>

        <div className="text-black flex flex-col p-4 text-black gap-8 items-center">
          <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="site" id="" />

          <div className="flex w-full justify-between gap-8">

            <input value={form.username} onChange={handleChange} placeholder="Enter UserName" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="username" id="" />

            <div className="relative">
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border border-green-500 w-full p-4 py-1" type="password" name="password" id="" />


              <span className="absolute right-[3px] top-[4px] cursor-pointer " onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
              </span>
            </div>

          </div>
          <button onClick={savePassword} className="text-black flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover" >
            </lord-icon>
            Save Password</button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div> No Passwords to show </div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index) => {

                return <tr key={index}>
                  <td className=" py-2 border-white text-center">
                    <div className="flex items-center justify-center">
                      <a href={item.site} target="_blank">{item.site}</a>
                      <div className="iconcopy size-7 cursor-pointer" onClick={() => copyText(item.site)}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>


                  <td className="py-2 border-white text-center">
                    <div className="flex items-center justify-center">
                      <span>{item.username}</span>
                      <div className="iconcopy size-7 cursor-pointer" onClick={() => copyText(item.username)}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>

                  <td className="py-2 border-white text-center">
                    <div className="flex items-center justify-center">
                      <span>{item.password}</span>
                      <div className="iconcopy size-7 cursor-pointer" onClick={() => copyText(item.password)}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>

                  <td className="justify-center py-2 border-white text-center">
                    <span className="cursor-pointer mx-1" onClick={()=>editPassword(item.id)}><lord-icon
                      style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                      src="https://cdn.lordicon.com/gwlusjdu.json"
                      trigger="hover" >
                    </lord-icon></span>
                    <span className="cursor-pointer mx-1" onClick={()=>deletePassword(item.id)}><lord-icon
                      style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                      src="https://cdn.lordicon.com/skkahier.json"
                      trigger="hover" >
                    </lord-icon></span>
                  </td>
                </tr>
              })}

            </tbody>
          </table>}
        </div>

      </div>
    </>
  );
};

export default Manager;

