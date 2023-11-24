import Image from "next/image";

const Success = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 flex items-center gap-4">
      <div className="relative w-[50px] h-[50px]">
        <Image
          src="/icons/success.svg"
          fill
          alt="cancel-icon"
          className="object-contain"
        />
      </div>
      <h1 className="text-xl">
        Thank you for your purchase. Keep Shopping. Be Happy.
      </h1>
    </div>
  );
};
export default Success;
