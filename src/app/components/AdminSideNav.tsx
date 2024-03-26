"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    ChartPieIcon,
    XMarkIcon,
    MapPinIcon,
    TicketIcon,
    UserIcon,
    MusicalNoteIcon,
    BuildingOfficeIcon,
    EnvelopeIcon,
    BoltIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const filters = [
    { name: "City", href: "#", icon: MapPinIcon, current: false },
    { name: "Event", href: "#", icon: TicketIcon, current: false },
    { name: "Artist", href: "#", icon: UserIcon, current: false },
    { name: "Slice", href: "#", icon: ChartPieIcon, current: false },
    { name: "Genre", href: "#", icon: MusicalNoteIcon, current: false },
    { name: "Venue", href: "#", icon: BuildingOfficeIcon, current: false },
];
const navigation = [
    { name: "Slices", href: "#", icon: ChartPieIcon, current: false },
    { name: "Send", href: "#", icon: EnvelopeIcon, current: false },
    { name: "Stats", href: "#", icon: BoltIcon, current: false },
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

export default function AdminSideNav() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-50 lg:hidden"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button
                                                type="button"
                                                className="-m-2.5 p-2.5"
                                                onClick={() =>
                                                    setSidebarOpen(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close sidebar
                                                </span>
                                                <XMarkIcon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-x-hidden bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul
                                                role="list"
                                                className="flex flex-1 flex-col gap-y-7"
                                            >
                                                <li>
                                                    <ul
                                                        role="list"
                                                        className="-mx-2 space-y-1"
                                                    >
                                                        {filters.map((item) => (
                                                            <li key={item.name}>
                                                                <a
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className={classNames(
                                                                        item.current
                                                                            ? "bg-gray-800 text-white"
                                                                            : "text-gray-400 hover:text-white hover:bg-gray-800",
                                                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold "
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        className="h-6 w-6 shrink-0"
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul
                                                        role="list"
                                                        className="-mx-2 mt-2 space-y-1"
                                                    >
                                                        {navigation.map(
                                                            (item) => (
                                                                <li
                                                                    key={
                                                                        item.name
                                                                    }
                                                                >
                                                                    <a
                                                                        href={
                                                                            item.href
                                                                        }
                                                                        className={classNames(
                                                                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                                        )}
                                                                    >
                                                                        <span className="truncate">
                                                                            
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 bg-gray-900">
                        <div className="flex h-16 shrink-0 items-center justify-center">
                            <Image
                                width={500}
                                height={100}
                                src="/images/logo.webp"
                                alt=""
                                className="p-5 pt-10"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <div className="pt-6 pb-6 bg-sub-blue flex items-center justify-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="rgb(63,104,209)"
                                    className="w-10 h-10"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h1 className="text-main-blue text-4xl -mb-2">
                                    CONTACTS
                                </h1>
                            </div>
                            <div className="bg-sub-blue text-main-blue flex items-center justify-start ps-5">
                                <h2>Filter Contacts By...</h2>
                            </div>
                            <ul
                                role="list"
                                className="flex flex-1 flex-col gap-y-7 bg-main-blue"
                            >
                                <li className="bg-white">
                                    <ul
                                        role="list"
                                        className="bg-sub-blue grid grid-cols-2 gap-x-2 gap-y-1 pb-6 p-5 pt-0"
                                    >
                                        {filters.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-400 text-white"
                                                            : "text-gray-400 hover:text-white hover:bg-gray-800",
                                                        "group flex justify-center gap-x-1 rounded-md text-main-blue border-main-blue py-1 text-sm leading-6"
                                                    )}
                                                >
                                                    <item.icon
                                                        className="h-6 w-6 shrink-0"
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <ul
                                        role="list"
                                        className="grid gap-6"
                                    >
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-800 text-white"
                                                            : "text-white hover:text-white hover:bg-gray-800",
                                                        "flex items-center justify-start text-4xl group rounded-md p-2 gap-3 ms-2 me-2"
                                                    )}
                                                >
                                                     
                                                     <item.icon
                                                        className="h-10 w-10 shrink-0 mb-1"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="truncate">
                                                        {item.name}
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="-mx-6 mt-auto">
                                    <a
                                        href="#"
                                        className="flex items-center gap-x-4 ps-6 py-3 text-sm leading-6 text-white hover:bg-gray-800 me-6"
                                    >
                                        <img
                                            className="ms-4 h-8 w-8 rounded-full bg-gray-800"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span className="sr-only">
                                            Your profile
                                        </span>
                                        <span aria-hidden="true" className="text-2xl font-medium">Adam Cook</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-6 text-white">
                        Dashboard
                    </div>
                    <a href="#">
                        <span className="sr-only">Your profile</span>
                        <img
                            className="h-8 w-8 rounded-full bg-gray-800"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </>
    );
}
