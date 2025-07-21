"use client";
import { getPaymentUrl } from "@/app/utils/servis";
import { Car } from "@/types";
import { useState } from "react";
import Loader from "../loader";


interface Props{
    car:Car
}

const RentButton = ({car}:Props) => {

    const [isLoading,setIsLoading] =useState<boolean>(false);
    const handleRent =()=>{
        //apia ödeme oturumu oluşturması için araç bilgileri ile istek atılır

        //apia satın alım sayfasının urlini oluşturup döndür
        setIsLoading(true);
      
       
        getPaymentUrl(car)
         //kullanıcıyı satın alım sayfasına yönlendir
         .then((data)=>{
            window.location.href=data.url;
         })
         .finally(()=> setIsLoading(false));

           
        };

  return (
    <button onClick={handleRent} className=" bg-basic-blue py-2 px-6 text-white rounded-md hover:brightness-90 transition min-w-[150px] ">
      {isLoading ? <Loader size="size-6"/>: "Şimdi Kirala"}
    </button>
  );
};

export default RentButton;
