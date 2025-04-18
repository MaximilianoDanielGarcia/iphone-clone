import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store </span>
            or <span className="underline text-blue">other retailer </span>
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call (123) 0800-040-2025
          </p>
        </div>

        <div className="w-full bg-neutral-700 my-5 h-[1px]" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
            <p className="font-semibold text-gray text-xs">Copyright &copy; {(new Date()).getFullYear()} Apple Inc. Powered by Max.</p>

            <div className="flex gap-4">
                {footerLinks.map((footerLink) => (
                    <p key={footerLink} className="font-semibold text-gray text-xs">{footerLink}</p> 
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
