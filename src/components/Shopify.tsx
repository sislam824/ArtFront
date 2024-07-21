import { Award, Check, CreditCard, Truck } from "lucide-react";

export const Shopify = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      <div className="flex flex-col justify-center items-center gap-2">
        <Truck strokeWidth={0.5} />
        <h3 className="text-xl font-semibold">Free Shipping</h3>
        <p>on all orders</p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-2">
        <CreditCard strokeWidth={0.5} />
        <h1 className="text-xl font-semibold">Faster Delivery</h1>
        <p>on prepaid orders</p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-2">
        <Award strokeWidth={0.5} />
        <h1 className="text-xl font-semibold">Trusted by</h1>
        <p>2500+ customers</p>
      </div>
      <div className="flex flex-col justify-center items-center  gap-2">
        <Check strokeWidth={1.25} />
        <h1 className="text-xl mt-2 font-semibold">Delivery within</h1>
        <p>5-7 days</p>
      </div>
    </div>
  );
};
