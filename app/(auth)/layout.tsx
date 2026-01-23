import Link from "next/link";
import { ROUTES } from "@/constants/routes";

function LayoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 bg-white">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href={ROUTES.PUBLIC.HOME}
            className="flex items-center gap-3 font-medium"
          >
            <img src="/icons/logo.svg" alt="Logo" className="w-8" />
            <span className="font-heading text-lg font-semibold uppercase">
              Shape Your Days
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/images/quote.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default LayoutAuth;
