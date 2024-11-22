import { getUser } from "@/app/data/users/actions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

async function DreamId() {
  const user = await getUser();

  return (
    <span>
      {user.dreamId || (
        <Link
          href="/claim/choose"
          className="cursor-pointer underline hover:no-underline"
        >
          &lt;get your Dream ID&gt;
        </Link>
      )}
    </span>
  );
}

export function StatusBar() {
  return (
    <div className="absolute left-4 right-4 top-5 z-20 flex h-[29px] flex-row items-center justify-between rounded-lg bg-white px-5 font-mono shadow backdrop-blur-[48px]">
      <div className="flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <div className="mr-2 flex cursor-pointer items-center justify-start rounded-md border border-black/10 bg-white">
              <div className="flex h-[21px] w-[21px] items-center justify-center rounded-l-md">
                <img
                  className="h-[21px] w-[21px]"
                  src="/images/avatar21_21.svg"
                  alt="User"
                />
              </div>
              <div className="px-3 py-[3px]">
                <div className="text-[10px] font-semibold leading-none text-black">
                  <Suspense
                    fallback={
                      <span>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin text-gray-500" />
                      </span>
                    }
                  >
                    <DreamId />
                  </Suspense>
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[395px]">
            <div className="flex gap-[18px]">
              <div className="space-y-1">
                <h4 className="text-[28px] font-semibold leading-none">
                  <DreamId />
                </h4>
                <p className="text-sm lowercase text-muted-foreground">
                  {`@`}
                  <DreamId />
                </p>
                <p className="py-2 text-md font-medium text-black">
                  For peace world.
                </p>
                <p className="pb-2 text-md font-medium text-black">
                  Dream bigger big dreamer. Building{" "}
                  <span className="text-[#007AFF]">@dreamos</span>
                </p>
                <div className="flex justify-between">
                  <p className="text-black">
                    <span className="font-bold text-black">5,712</span>
                    <span> Followers</span>
                  </p>
                  <p className="text-black">
                    <span className="font-bold text-black">123</span>
                    <span> Following</span>
                  </p>
                </div>
              </div>
              <div className="">
                <img
                  className="no-max-width w-[94px]"
                  src="/images/avatar_popup.svg"
                  alt="User"
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="text-center text-[10px] font-medium leading-none text-black opacity-60">
            SOL/USD
          </div>
          <div className="text-[10px] font-semibold leading-none text-black">
            $60.31
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-center text-[10px] font-medium leading-none text-black opacity-60">
            Gas
          </div>
          <div className="flex items-center">
            <div className="text-[10px] font-semibold leading-none text-black">
              $0.0003
            </div>
            <div className="relative ml-1 h-4 w-4">
              <div className="absolute left-[6px] top-[6px] h-1 w-1 rounded-full bg-[#00a369]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="text-right text-[10px] font-semibold leading-none text-black">
          Dec 1, 4:16 PM
        </div>
      </div>
    </div>
  );
}

