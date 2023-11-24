import Image from "next/image";

const Cancel = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 flex items-center gap-4">
      <div className="relative w-[50px] h-[50px]">
        <Image
          src="/icons/cancel-img.svg"
          fill
          alt="cancel-icon"
          className="object-contain"
        />
      </div>
      <h1 className="text-xl">Sorry to see that you cancelled your payment</h1>
    </div>
  );
};
export default Cancel;
