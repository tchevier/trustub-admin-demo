"use client";

import { ArrowPathIcon, ChartPieIcon } from "@heroicons/react/24/solid";
import AdminSideNav from "./components/AdminSideNav";

const people = [
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        phoneNumber: "817-545-3245",
        birthday: "January 1st, 1990",
        gender: "male",
        location: "New York, NY",
    },
    // More people...
];

export default function Main() {
    return (
        <>
            <AdminSideNav />
            <div className="bg-black pt-10 pl-80 ">
                <div className="flex flex-col w-full">
                    <div className="">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="sm:flex sm:items-center justify-between">
                                <div className="flex gap-4">
                                    <h1 className="text-5xl leading-6 text-main-blue ">
                                        {people.length} Contacts
                                    </h1>
                                    <h2 className="text-4xl leading-6 text-white flex gap-0.5">
                                        <ArrowPathIcon className="h-8 w-8 -mt-1.5"/> Refresh
                                    </h2>
                                </div>
                                <div className="sm:ml-16 sm:mt-0 sm:flex-none flex justify-end gap-4">
                                <button
                                        type="button"
                                        className="mb-2 flex gap-1 text-main-blue rounded-md border-main-blue border-2 px-6 py-2 text-center  text-white hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-3xl  font-light "
                                    >
                                        <ChartPieIcon className="h-10 -mt-1 gap-2 "/>
                                        New Slice
                                    </button>
                                <button
                                        type="button"
                                        className="mb-2 block text-main-blue rounded-md border-main-blue border-2 px-6 py-2 text-center  text-white hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-3xl  font-light"
                                    >
                                        Email
                                    </button>
                                <button
                                        type="button"
                                        className="mb-2 block text-main-blue rounded-md border-main-blue border-2 px-6 py-2 text-center  text-white hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-3xl  font-light"
                                    >
                                        SMS
                                    </button>
                                    <button
                                        type="button"
                                        className="mb-2 block rounded-md bg-main-blue px-6 py-2 text-center  text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-3xl  font-light"
                                    >
                                        + Import Contacts
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className=" min-w-full w-full overflow-x-auto sm:px-6 lg:px-8">
                                        <table className="min-w-full divide-y-2 divide-gray-600 border-t-2 border-gray-600 mt-2 ">
                                            <thead>
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="py-3.5 pl-4 pr-3 text-left text-2xl font-light text-white sm:pl-0 flex gap-4"
                                                    >
                                                        <button className="mt-1 w-5 h-5 rounded border-2  border-white" />
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-2xl font-light text-white"
                                                    >
                                                        Email
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-2xl font-light text-white"
                                                    >
                                                        Phone
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-2xl font-light text-white"
                                                    >
                                                        Birthday
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-2xl font-light text-white"
                                                    >
                                                        Gender
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-xl font-light text-white"
                                                    >
                                                        Location
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800">
                                                {people.map((person) => (
                                                    <tr key={person.email}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-white sm:pl-0 flex gap-4 ">
                                                            <button className="mt-0.5 w-5 h-5 rounded border-2  border-white" />
                                                            {person.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-300">
                                                            {person.email}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-300">
                                                            {person.phoneNumber}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-300">
                                                            {person.birthday}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-300">
                                                            {person.gender}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-300">
                                                            {person.location}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
