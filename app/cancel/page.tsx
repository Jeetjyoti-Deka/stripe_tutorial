import Image from "next/image";

const Cancel = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 flex items-center flex-col gap-4">
      <div className="relative w-[50px] h-[50px]">
        <Image
          src="/icons/cancel-img.svg"
          fill
          alt="cancel-icon"
          className="object-contain"
        />
      </div>
      <h1 className="text-xl px-6 text-center">
        We regret to inform you that your payment transaction has been canceled.
        We apologize for any inconvenience this may have caused and appreciate
        your understanding.
      </h1>
    </div>
  );
};
export default Cancel;
