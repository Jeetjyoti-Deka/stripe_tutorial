import Image from "next/image";

const Success = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 flex items-center justify-center flex-col gap-4">
      <div className="relative w-[50px] h-[50px]">
        <Image
          src="/icons/success.svg"
          fill
          alt="cancel-icon"
          className="object-contain"
        />
      </div>
      <h1 className="text-xl px-6 text-center">
        Thank you for your purchase! We appreciate your business. Feel free to
        explore more items and continue shopping with us.
      </h1>
    </div>
  );
};
export default Success;
