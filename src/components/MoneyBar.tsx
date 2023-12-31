import React from "react";

const MoneyBar = () => {
  return (
    <div className="lg:min-w-[37vw] lg:max-w-[37vw] lg:min-h-[200px] w-full min-h-[170px] border border-gray-400/25 px-5 py-4 rounded-lg flex flex-col justify-between relative">
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="p-3 rounded-full bg-black hidden lg:flex">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.8331 26.292V30.5837C45.8331 31.7503 44.8748 32.7087 43.6873 32.7087H39.6665C37.4165 32.7087 35.354 31.0628 35.1665 28.8128C35.0415 27.5003 35.5415 26.2712 36.4165 25.417C37.1873 24.6253 38.2498 24.167 39.4165 24.167H43.6873C44.8748 24.167 45.8331 25.1253 45.8331 26.292Z"
              fill="white"
            />
            <path
              d="M32.0415 29.0833C31.854 26.8958 32.6457 24.75 34.229 23.1875C35.5623 21.8333 37.4165 21.0417 39.4165 21.0417H40.604C41.1873 21.0417 41.6665 20.5625 41.5832 19.9792C41.0207 15.9375 37.5207 12.8125 33.3332 12.8125H12.4998C7.89567 12.8125 4.1665 16.5417 4.1665 21.1458V35.7292C4.1665 40.3333 7.89567 44.0625 12.4998 44.0625H33.3332C37.5415 44.0625 41.0207 40.9375 41.5832 36.8958C41.6665 36.3125 41.1873 35.8333 40.604 35.8333H39.6665C35.7082 35.8333 32.3748 32.875 32.0415 29.0833ZM27.0832 24.7917H14.5832C13.729 24.7917 13.0207 24.1042 13.0207 23.2292C13.0207 22.3542 13.729 21.6667 14.5832 21.6667H27.0832C27.9373 21.6667 28.6457 22.375 28.6457 23.2292C28.6457 24.0833 27.9373 24.7917 27.0832 24.7917Z"
              fill="white"
            />
            <path
              d="M29.6042 8.29167C30.1459 8.85417 29.6667 9.6875 28.875 9.6875H12.5625C10.2917 9.6875 8.1667 10.3542 6.39586 11.5C5.58336 12.0208 4.4792 11.4583 4.87503 10.5625C6.0417 7.83333 8.77086 5.9375 11.9167 5.9375H23.625C26.0417 5.9375 28.1875 6.79167 29.6042 8.29167Z"
              fill="white"
            />
          </svg>
        </div>

        <div>
          <h1 className="text-lg font-normal">Wallet Balance</h1>
          <p className="font-semibold text-xl lg:text-5xl text-center">
            <span className="line-through divide-double">N</span> 0.00
          </p>
        </div>
      </div>
      <button
        className="self-center lg:self-end px-2 py-4 md:p-5 bg-[#2A63E2] sm:min-w-[150px] sm:max-w-[150px] w-full rounded-xl text-white text-medium md:text-lg"
        type="button"
      >
        + Add money
      </button>
    </div>
  );
};

export default MoneyBar;
