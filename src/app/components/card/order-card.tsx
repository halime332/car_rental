import generateImage from "@/app/utils/generateImage";
import { Order } from "@/types";
import Image from "next/image";


const OrderCard = ({order}:{order:Order}) => {
  return (
    <div className="border p-5 rounded-md shadow flex gap-5 md:gap-14
    items-center hover:bg-zinc-100/10 transition cursor-pointer hover.shadow-lg">
       
       <Image src={generateImage(order.product)} alt={order.product.model}  width={200} height={200}
       unoptimized/>

       <div>
        <h2>
          <span>{order.product.make}</span>
          <span>{order.product.model}</span>
        </h2>
       </div>
    </div>
  );
};

export default OrderCard;
