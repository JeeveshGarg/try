import React, { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import { IoClose } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";


function SendFlowersModal({ setShowFlowersModal,currentFlower }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const auth = useAuth();

  return (
    <div className=" bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
      <main
        style={{ zIndex: "999" }}
        className="z-50 w-90% h-90% rounded-lg shadow-2xl bg-white flex font-DM fixed"
      >
        <IoClose
          onClick={() => setShowFlowersModal(false)}
          size={20}
          color="white"
          className="cursor-pointer absolute -right-10 -top-10"
        />
        <article
          style={{ background: `url(${currentFlower.Link})`, color: "#fff" }}
          className="left w-1/2 flex flex-col items-center py-10 px-10 lg:px-16  md:block rounded-r-lg hidden md:w-65% bg-cover bg-no-repeat"
        ></article>
        <article className="right-side w-full md:w-35% px-12 py-16 md:py-24 md:px-16 flex flex-col">
          <div className="h-full flex flex-col justify-between">
            <div className="h-60%">
              <div className="h-1/2">
                <p className="text-left text-gray-light  text-2xl">
                  Thanks for being here
                </p>
                <p className="text-left  text-2xl">
                  To &lt;jane@gmail.com&gt;
                </p>
              </div>
              <div className="h-1/2">
                <p className="text-left  text-2xl">Hey &lt;Jane&gt;</p>
                <textarea className="resize-none text-left text-gray-light  text-2xl outline-none w-full h-full" maxLength = '250' placeholder = 'How you doing?'></textarea>
              </div>
            </div>
            <div className="h-15%">
              <hr className="w-16 h-0.5"></hr>
              <p className="text-left text-gray-light mt-2 text-xl">with love</p>
              <p className="text-left  text-2xl">&lt;Atul&gt;</p>
              <div className = 'flex justify-between items-center'>
                <p className="text-left  text-2xl">&lt;atul@gmail.com&gt;</p>
                <div
                  onClick={() => setShowFlowersModal(false)}
                  className = 'flex items-center'> 
                  <p className="text-left text-pink text-2xl cursor-pointer" >SEND</p>
                  <BsArrowRight color = '#EB0090' size = {20} className = '-mt-4 ml-1 cursor-pointer' />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default SendFlowersModal;
