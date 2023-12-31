import React from "react";
import { useState } from "react";
import "@/app/globals.css";
import MoneyBar from "./MoneyBar";
import MoneyBarRight from "./MoneyBarRight";
import AnalyticsBar from "./AnalyticsBar";
import Transactions from "./Transacations";
import Image from "next/image";
import image from "@/app/user.png";
import Link from "next/link";
import {Menu} from "lucide-react"
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const data = [
  {
    title: "image1.jpg",
    image: "Adobe After Effects",
    date: "03 Mar 2023",
    amount: "500",
    status: "Paid",
  },
  {
    title: "image2.jpg",
    image: "Photoshop",
    date: "03 Mar 2023",
    amount: "300",
    status: "Pending",
  },
  {
    title: "image3.jpg",
    image: "Illustrator",
    date: "03 Mar 2023",
    amount: "450",
    status: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
          fill="#5E5F60"
        />
        <path
          d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
          fill="#5E5F60"
        />
        <path
          d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
          fill="#5E5F60"
        />
      </svg>
    ),
  },
  // Add more data items as needed
];

const RightSide = () => {
  const [verified, setVerified] = useState(false);
  return (
    <main className="flex w-full h-full">
      <div className="lg:w-[320px] w-0 lg:mr-10"></div>
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-between items-center sm:px-0 px-4 lg:px-10 py-4 text-sm bg-[#F5F7FA] sm:w-full w-screen">
          <div className="sm:block hidden">
            <h1 className="mx-4 font-bold text-2xl">HOME</h1>
          </div>
          <div className="sm:hidden block">
            <Menu size={`${30}px`} />
          </div>
          <div className="flex items-center">
            <div className="sm:mx-5 flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.44043V9.77043"
                  stroke="#0A0A0B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
                  stroke="#0A0A0B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203"
                  stroke="#0A0A0B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
            <div className="w-14 h-14 flex items-center sm:justify-center rounded-full justify-end ">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="mx-2 sm:flex gap-2 items-center hidden">
              <h1>Emmanuel Appah</h1>
            </div>
          </div>
        </div>

        {verified ? (
          <div className="p-5 sm:mx-16 sm:mt-10 mx-4 mt-4 rounded-lg bg-gradient-to-br from-[#EBFFE8] to-[#D5FFCE] flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#079C15"
                stroke-width="1.5"
              />
              <path
                d="M8.5 12.5L10.5 14.5L15.5 9.5"
                stroke="#079C15"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="px-3 text-[#079C15]">
              Congratulations! Your KYC application has been approved
            </p>
          </div>
        ) : (
          <div className="p-5 sm:mx-16 mx-4 sm:mt-10 mt-4 rounded-lg bg-gradient-to-br from-[#FFF4E8] to-[#FFECCE] flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#9C4E07"
                stroke-width="1.5"
              />
              <path
                d="M8.5 12.5L10.5 14.5L15.5 9.5"
                stroke="#9C4E07"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="px-1 md:px-3 text-[#9C4E07]">
              In order to start using your account, you are required to complete
              your{" "}
              <Link href={"/user/kyc"} className="font-bold underline">
                compliance check
              </Link>
            </p>
          </div>
        )}

        <div className="sm:mx-16 sm:mt-10 mt-4 mx-4 rounded-lg flex flex-col md:flex-row items-center justify-between ">
          <MoneyBar />
          {/* <MoneyBarRight /> */}
        </div>

        <div className="sm:mx-16 sm:mt-10 mx-4 mt-4 rounded-lg flex items-center justify-between overflow-x-scroll gap-2">
          <Link
            href={"/user/financing"}
            className="border border-gray-400/10p-4 md:min-w-[330px] min-w-[150px] sm:py-10 py-5 sm:px-4 px-2 rounded-xl flex flex-col text-xl"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.5415 19.4378L42.3748 17.3545C41.604 16.9795 40.6457 17.2712 40.2707 18.042C39.8748 18.8337 40.1873 19.7712 40.9582 20.1462L44.2707 21.792V31.7712L36.4582 31.792V10.417C36.4582 6.25033 33.6665 4.16699 30.2082 4.16699H13.5415C10.0832 4.16699 7.2915 6.25033 7.2915 10.417V44.2712H4.1665C3.31234 44.2712 2.604 44.9795 2.604 45.8337C2.604 46.6878 3.31234 47.3962 4.1665 47.3962H39.5832C40.4373 47.3962 41.1457 46.6878 41.1457 45.8337C41.1457 44.9795 40.4373 44.2712 39.5832 44.2712H36.4582V34.917L45.8332 34.8962C46.7082 34.8962 47.3957 34.1878 47.3957 33.3337V20.8337C47.3957 20.2503 47.0623 19.7087 46.5415 19.4378ZM12.4998 14.3545C12.4998 11.4587 14.2707 10.417 16.4373 10.417H27.3332C29.479 10.417 31.2498 11.4587 31.2498 14.3545V16.917C31.2498 19.792 29.479 20.8337 27.3123 20.8337H16.4373C14.2707 20.8337 12.4998 19.792 12.4998 16.8962V14.3545ZM13.5415 25.5212H19.7915C20.6457 25.5212 21.354 26.2295 21.354 27.0837C21.354 27.9378 20.6457 28.6462 19.7915 28.6462H13.5415C12.6873 28.6462 11.979 27.9378 11.979 27.0837C11.979 26.2295 12.6873 25.5212 13.5415 25.5212Z"
                fill="#0A0A0B"
              />
            </svg>
            <div className="text-sm lg:text-2xl font-normal flex items-center gap-10 relative">
              <p className="sm:w-auto w-[100px] ">Auto Gas Financing</p>
              <svg
                width="32"
                height="32"
                className="absolute right-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z"
                  fill="#292D32"
                />
                <path
                  d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </Link>
          <div className="border border-gray-400/10p-4 md:min-w-[330px] min-w-[150px] sm:py-10 py-5 sm:px-4 px-2 rounded-xl flex flex-col text-xl">
            <div className="flex flex-col">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.4165 8.33301H14.5832C8.33317 8.33301 4.1665 11.458 4.1665 18.7497V26.1663C4.1665 26.9372 4.95817 27.4163 5.64567 27.1038C7.68734 26.1663 10.0415 25.8122 12.5207 26.2497C17.9998 27.2288 22.0207 32.3122 21.8748 37.8747C21.854 38.7497 21.729 39.6038 21.4998 40.4372C21.3332 41.083 21.854 41.6872 22.5207 41.6872H35.4165C41.6665 41.6872 45.8332 38.5622 45.8332 31.2705V18.7497C45.8332 11.458 41.6665 8.33301 35.4165 8.33301ZM24.9998 30.208C22.1248 30.208 19.7915 27.8747 19.7915 24.9997C19.7915 22.1247 22.1248 19.7913 24.9998 19.7913C27.8748 19.7913 30.2082 22.1247 30.2082 24.9997C30.2082 27.8747 27.8748 30.208 24.9998 30.208ZM40.104 29.1663C40.104 30.0205 39.3957 30.7288 38.5415 30.7288C37.6873 30.7288 36.979 30.0205 36.979 29.1663V20.833C36.979 19.9788 37.6873 19.2705 38.5415 19.2705C39.3957 19.2705 40.104 19.9788 40.104 20.833V29.1663Z"
                  fill="#0A0A0B"
                />
                <path
                  d="M10.4168 29.167C5.81266 29.167 2.0835 32.8962 2.0835 37.5003C2.0835 39.0628 2.521 40.542 3.29183 41.792C4.72933 44.2087 7.37516 45.8337 10.4168 45.8337C13.4585 45.8337 16.1043 44.2087 17.5418 41.792C18.3127 40.542 18.7502 39.0628 18.7502 37.5003C18.7502 32.8962 15.021 29.167 10.4168 29.167ZM13.521 39.0212H11.9793V40.6462C11.9793 41.5003 11.271 42.2087 10.4168 42.2087C9.56266 42.2087 8.85433 41.5003 8.85433 40.6462V39.0212H7.31266C6.4585 39.0212 5.75016 38.3128 5.75016 37.4587C5.75016 36.6045 6.4585 35.8962 7.31266 35.8962H8.85433V34.417C8.85433 33.5628 9.56266 32.8545 10.4168 32.8545C11.271 32.8545 11.9793 33.5628 11.9793 34.417V35.8962H13.521C14.3752 35.8962 15.0835 36.6045 15.0835 37.4587C15.0835 38.3128 14.396 39.0212 13.521 39.0212Z"
                  fill="#0A0A0B"
                />
              </svg>
              <div className="text-sm lg:text-2xl font-normal flex items-center gap-10 relative">
                <p className="sm:w-auto w-[100px]">Inventory Financing</p>
                <svg
                  width="32"
                  height="32"
                  className="absolute right-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z"
                    fill="#292D32"
                  />
                  <path
                    d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
                    fill="#292D32"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="border border-gray-400/10p-4 md:min-w-[330px] min-w-[150px] sm:py-10 py-5 sm:px-4 px-2 rounded-xl flex flex-col text-xl">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.8335 4.16699H16.1668C10.4168 4.16699 8.3335 6.25033 8.3335 12.1045V37.8962C8.3335 43.7503 10.4168 45.8337 16.1668 45.8337H33.8127C39.5835 45.8337 41.6668 43.7503 41.6668 37.8962V12.1045C41.6668 6.25033 39.5835 4.16699 33.8335 4.16699ZM25.0002 40.2087C23.0002 40.2087 21.3543 38.5628 21.3543 36.5628C21.3543 34.5628 23.0002 32.917 25.0002 32.917C27.0002 32.917 28.646 34.5628 28.646 36.5628C28.646 38.5628 27.0002 40.2087 25.0002 40.2087ZM29.1668 13.0212H20.8335C19.9793 13.0212 19.271 12.3128 19.271 11.4587C19.271 10.6045 19.9793 9.89616 20.8335 9.89616H29.1668C30.021 9.89616 30.7293 10.6045 30.7293 11.4587C30.7293 12.3128 30.021 13.0212 29.1668 13.0212Z"
                fill="#0A0A0B"
              />
            </svg>
            <div className="text-sm lg:text-2xl font-normal flex items-center gap-10 relative">
              <p className="sm:w-auto w-[100px]">Airtime Purchase</p>
              <svg
                width="32"
                height="32"
                className="absolute right-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z"
                  fill="#292D32"
                />
                <path
                  d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </div>
          <div className="border border-gray-400/10p-4 md:min-w-[330px] min-w-[150px] sm:py-10 py-5 sm:px-4 px-2 rounded-xl flex flex-col text-xl">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.3125 16.6663C45.3125 17.5205 44.6042 18.2288 43.75 18.2288H6.25C5.39583 18.2288 4.6875 17.5205 4.6875 16.6663C4.6875 15.8122 5.39583 15.1038 6.25 15.1038H8.375L9.16667 11.333C9.91667 7.68717 11.4792 4.33301 17.6875 4.33301H32.3125C38.5208 4.33301 40.0833 7.68717 40.8333 11.333L41.625 15.1038H43.75C44.6042 15.1038 45.3125 15.8122 45.3125 16.6663Z"
                fill="#0A0A0B"
              />
              <path
                d="M46.2085 28.4587C45.896 25.0212 44.9793 21.3545 38.2918 21.3545H11.7085C5.02097 21.3545 4.12514 25.0212 3.7918 28.4587L2.62514 41.1462C2.4793 42.7295 3.00014 44.3128 4.08347 45.5003C5.18764 46.7087 6.75014 47.3962 8.4168 47.3962H12.3335C15.7085 47.3962 16.3543 45.4587 16.771 44.1878L17.1876 42.9378C17.6668 41.5003 17.7918 41.1462 19.6668 41.1462H30.3335C32.2085 41.1462 32.271 41.3545 32.8126 42.9378L33.2293 44.1878C33.646 45.4587 34.2918 47.3962 37.6668 47.3962H41.5835C43.2293 47.3962 44.8126 46.7087 45.9168 45.5003C47.0001 44.3128 47.521 42.7295 47.3751 41.1462L46.2085 28.4587ZM18.7501 32.8128H12.5001C11.646 32.8128 10.9376 32.1045 10.9376 31.2503C10.9376 30.3962 11.646 29.6878 12.5001 29.6878H18.7501C19.6043 29.6878 20.3126 30.3962 20.3126 31.2503C20.3126 32.1045 19.6043 32.8128 18.7501 32.8128ZM37.5001 32.8128H31.2501C30.396 32.8128 29.6876 32.1045 29.6876 31.2503C29.6876 30.3962 30.396 29.6878 31.2501 29.6878H37.5001C38.3543 29.6878 39.0626 30.3962 39.0626 31.2503C39.0626 32.1045 38.3543 32.8128 37.5001 32.8128Z"
                fill="#0A0A0B"
              />
            </svg>
            <div className="text-sm lg:text-2xl font-normal flex items-center gap-10 relative">
              <p className="sm:w-auto w-[50px]">Uber VIP</p>
              <svg
                width="32"
                height="32"
                className="absolute right-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z"
                  fill="#292D32"
                />
                <path
                  d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* <div className="lg:flex mb-16 lg:flex-row flex-col hidden">
          <Transactions data={data} />
          <AnalyticsBar />
        </div> */}

        <div className="flex mb-16 lg:flex-row flex-col items-center justify-center">
          <AnalyticsBar />
          <Transactions data={data} />
        </div>
      </div>
    </main>
  );
};

export default RightSide;
