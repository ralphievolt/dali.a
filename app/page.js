"use client";

import Jobslist from "../components/Jobslist";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="container xl:max-w-7xl mx-auto px-4 py-2 lg:px-8 lg:py-2">
        <Jobslist />
      </div>
    </div>
  );
}
