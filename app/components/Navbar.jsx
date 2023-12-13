import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default (Navbar) => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 justify-between">
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-medium">
              Sanity <span className="text-teal-500">Next</span>
            </h1>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};
