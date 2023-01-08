"use client";

import "../../styles/globals.css";
import date from "date-and-time";
import React from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";

export default function Receive() {
  const [job, setJob] = React.useState("");
  const [receiver, setReceiver] = React.useState("");
  const [receiverId, setReceiverId] = React.useState("");
  const [data, setData] = React.useState("No result");
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = () => {
    // console.log(job, receiverId, receiver);
  };

  const handleSearch = (e) => {
    console.log(job);
  };
  return (
    <div className="bg-gray-100">
      <div className="container xl:max-w-12xl mx-auto px-4 py-2 lg:px-8 lg:py-2">
        {/* Box */}
        <div className="flex flex-col rounded-xl shadow-sm bg-white overflow-hidden">
          <div className="p-5 lg:p-6 grow w-full md:w-3/4 lg:w-3/5 xl:w-2/5 mx-auto">
            {/* Heading */}
            <div className="text-center mt-2">
              <h1 className="text-2xl font-bold mb-1 text-purple-700">
                Receipt Confirmation
              </h1>
              <p className="text-sm text-green-700 font-medium mb-5">
                Scan Receiver Id and Enter Name
              </p>
            </div>
            {/* END Heading */}

            {/* Checkout Form */}

            <div className="space-y-6">
              <div className="space-y-6 p-4 rounded border bg-gray-50">
                <div className="space-y-1">
                  <label htmlFor="job_number" className="font-medium">
                    Job Information
                  </label>
                  <div className="space-y-6 sm:space-y-0 sm:flex sm:space-x-3">
                    <div className="space-y-1 grow">
                      <input
                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                        type="number"
                        id="job_number"
                        name="job_number"
                        placeholder="Enter Job Number"
                        value={job}
                        onChange={(e) => {
                          setJob(e.currentTarget.value);
                        }}
                      />
                    </div>
                    <div className="space-y-1 sm:w-40">
                      <button
                        className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-purple-700 bg-purple-700 text-white hover:text-white hover:bg-purple-800 hover:border-purple-800 focus:ring focus:ring-purple-500 focus:ring-opacity-50 active:bg-purple-600 active:border-purple-700"
                        onClick={handleSearch}
                      >
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                  <p className="leading-relaxed text-gray-600 mt-1">
                    --- job description will appear here --
                  </p>
                </div>
              </div>
              <div className="space-y-2 p-4 rounded border bg-gray-50">
                <div className="space-y-1">
                  <button
                    className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-2 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200"
                    onClick={() => setShowModal(true)}
                  >
                    <span>Scan Receiver Id</span>
                  </button>
                </div>
                <div className="space-y-1">
                  <label htmlFor="receiver_name" className="font-medium">
                    Receiver Name
                  </label>
                  <input
                    className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                    type="text"
                    id="receiver_name"
                    name="receiver_name"
                    value={receiver}
                    onChange={(e) => {
                      setReceiver(e.currentTarget.value);
                    }}
                  />
                </div>
              </div>
              <div className="rounded border p-4 text-sm text-gray-600 font-medium text-center">
                Date & Time Received:{"  "}
                <h2 className="text-lg font-bold ">
                  {date.format(new Date(), "ddd, MMM DD YYYY h:mm A")}
                </h2>
              </div>
              <button
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-purple-700 bg-purple-700 text-white hover:text-white hover:bg-purple-800 hover:border-purple-800 focus:ring focus:ring-purple-500 focus:ring-opacity-50 active:bg-purple-600 active:border-purple-700"
                onClick={handleSubmit}
              >
                <span>Submit</span>
              </button>

              {showModal ? (
                <>
                  <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                          <h3 className="text-xl font=semibold">
                            Scan Barcode
                          </h3>
                        </div>
                        <div className="relative p-6 flex-auto">
                          <QrScanner
                            onDecode={(result) => setReceiverId(result)}
                            onError={(error) => setReceiverId(error)}
                            ViewFinder={false}
                          />
                          <label htmlFor="receiverId" className="font-medium">
                            {receiverId}
                          </label>
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="text-white bg-purple-800 active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            {/* END Checkout Form */}
          </div>
        </div>
        {/* END Box */}
      </div>
    </div>
  );
}
