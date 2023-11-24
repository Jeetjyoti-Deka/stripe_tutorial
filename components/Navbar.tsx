import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import CartDialog from "./CartDialog";

const Navbar = () => {
  return (
    <div className="w-full px-4">
      <div className="bg-blue-400 w-full flex items-center justify-between px-6 max-w-screen-xl mx-auto rounded-md py-2 mt-2">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          <h1 className="text-white font-semibold text-2xl">Stripe</h1>
        </Link>
        <CartDialog />
      </div>
    </div>
  );
};
export default Navbar;
