import React from "react";
import Header from "./Header";
import Link from "next/link";

const KycCompleteRightSide = () => {
  return (
    <main className="flex w-full h-full">
      <div className="lg:w-[320px] w-0 lg:mr-10"></div>
      <div className="flex flex-col w-full h-full">
        <Header />

        <div className="p-5 mx-16 mt-10 rounded-lg flex flex-col justify-center relative items-center bg-[#f5f2f2] h-[300px] md:min-h-[600px]">
          <h1 className="mb-3 text-4xl font-bold">Submitted</h1>
          <p className="text-medium md:text-lg font-semibold text-[#6A6A6A] mb-10 text-center">
            Your KYC application has been submitted and is under review
          </p>
          <svg
            width="167"
            height="134"
            viewBox="0 0 167 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M66.8333 0.333008H100.167C131.594 0.333008 147.307 0.333008 157.07 10.0961C166.833 19.8592 166.833 35.5727 166.833 66.9997C166.833 98.4267 166.833 114.14 157.07 123.903C147.307 133.666 131.594 133.666 100.167 133.666H66.8333C35.4064 133.666 19.6929 133.666 9.92976 123.903C0.166656 114.14 0.166656 98.4267 0.166656 66.9997C0.166656 35.5727 0.166656 19.8592 9.92976 10.0961C19.6929 0.333008 35.4064 0.333008 66.8333 0.333008ZM93.9167 41.9997C93.9167 38.5479 96.7149 35.7497 100.167 35.7497H141.833C145.285 35.7497 148.083 38.5479 148.083 41.9997C148.083 45.4515 145.285 48.2497 141.833 48.2497H100.167C96.7149 48.2497 93.9167 45.4515 93.9167 41.9997ZM102.25 66.9997C102.25 63.5479 105.048 60.7497 108.5 60.7497H141.833C145.285 60.7497 148.083 63.5479 148.083 66.9997C148.083 70.4515 145.285 73.2497 141.833 73.2497H108.5C105.048 73.2497 102.25 70.4515 102.25 66.9997ZM110.583 91.9997C110.583 88.5479 113.382 85.7497 116.833 85.7497H141.833C145.285 85.7497 148.083 88.5479 148.083 91.9997C148.083 95.4515 145.285 98.2497 141.833 98.2497H116.833C113.382 98.2497 110.583 95.4515 110.583 91.9997ZM75.1667 41.9997C75.1667 51.2044 67.7047 58.6663 58.5 58.6663C49.2952 58.6663 41.8333 51.2044 41.8333 41.9997C41.8333 32.7949 49.2952 25.333 58.5 25.333C67.7047 25.333 75.1667 32.7949 75.1667 41.9997ZM58.5 108.666C91.8333 108.666 91.8333 101.204 91.8333 91.9997C91.8333 82.7949 76.9095 75.333 58.5 75.333C40.0905 75.333 25.1667 82.7949 25.1667 91.9997C25.1667 101.204 25.1667 108.666 58.5 108.666Z"
              fill="#E4E4E4"
            />
          </svg>
          <Link
            href={"/user/dashboard"}
            className="p-4 bg-blue-600 rounded-lg mt-6 text-white font-semibold"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default KycCompleteRightSide;
