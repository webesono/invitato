import { navLinks } from "@app/constants";
import Image from "next/image";

const Sidebar = ({ toggleSidebar }) => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      toggleSidebar();
    }
  };
  return (
    <div
      id="sidebar"
      className="absolute h-screen flex z-30 w-full transform transition duration-1000 ease-in-out translate-x-full"
    >
      <div className="w-full bg-primary-bg opacity-70 flex-1"></div>

      <aside
        id="sidebar"
        className=" bg-white w-3/4 md:w-1/2 lg:w-2/6 py-7 px-5"
      >
        {/* <div className="w-full flex justify-end">
          
        </div> */}
        <div className=" font-jos  text-primary-text text-right mx-5 flex flex-col items-end font-semibold relative h-full">
          <Image
            src="/assets/icons/pigeon-sidebar.png"
            alt="sidebar pigeoin"
            width={65}
            height={65}
            className="mb-8"
          />
          <div className="gap-4 flex flex-col">
            {navLinks.map((nl, index) => (
              <div
                key={index}
                className="border-b-2 border-primary-text border-opacity-10 w-full px-5 pb-4"
              >
                <a
                  className="tracking-widest cursor-pointer"
                  onClick={() => scrollToElement(nl.id)}
                >
                  {nl.label}
                </a>
              </div>
            ))}
          </div>
          <footer className=" flex flex-col absolute bottom-0 py-6 text-xs ">
            <h1 className="text-center ">
              <span>
                Created with ♡{" "}
                <a href="#" className="hover:underline">
                  by Invitato
                </a>
              </span>
              <br />
              <span>© 2023 Nailal & Via. All Rights Reserved</span>
            </h1>
          </footer>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
