import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col space-y-5">
      <div className="text-2xl font-medium">Aradığınız sayfa bulunamadı</div>
      <Link href={"/"}>
        <div className="border-solid border-[1px] border-black py-2 px-4 rounded-lg bg-black text-white">
          Ana Sayfaya Dön
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
