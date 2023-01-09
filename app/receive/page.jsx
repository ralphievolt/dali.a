"use client";

import "../../styles/globals.css";
import date from "date-and-time";
import React from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { Button, Modal } from "flowbite-react";

export default function Receive() {
  const [job, setJob] = React.useState("");
  const [receiver, setReceiver] = React.useState("");
  const [receiverId, setReceiverId] = React.useState("--------");
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = () => {
    // console.log(job, receiverId, receiver);
  };

  const handleSearch = () => {
    // console.log(job);
  };

  const renderModal = () => {
    return (
      <React.Fragment>
        <Button onClick={() => setShowModal(true)}>Toggle modal</Button>
        <Modal show={showModal} onClick={() => setShowModal(false)} size="lg" c>
          <Modal.Header>
            <div className="text-purple-700">Scan Receiver's Id</div>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-500 ">
                <QrScanner
                  onDecode={(result) => setReceiverId(result)}
                  onError={(error) => setReceiverId("-------")}
                  ViewFinder={false}
                />
              </p>
              <p className="text-base leading-relaxed text-purple-700 ">
                {receiverId}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowModal(false)}>Save</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
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
                  <h2 className="leading-relaxed text-gray-600 mt-1 text-lg font-medium">
                    Delivery Percentage: 100%
                  </h2>
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

              {showModal ? renderModal() : null}
            </div>
            {/* END Checkout Form */}
          </div>
        </div>
        {/* END Box */}
      </div>
    </div>
  );
}
