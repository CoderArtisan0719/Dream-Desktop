import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function Confirmation({
  handleComplete,
}: {
  handleComplete: () => void;
}) {
  return (
    <div className="flex size-full flex-col items-center justify-between">
      <div className="flex size-full max-w-[220px] flex-col items-center justify-center space-y-5">
        <div className="rounded-full text-[#007AFF] animate-in fade-in-5">
          <Icon name="check" />
        </div>
        <p className="text-center text-xl text-white">
          You bridged 12.15 SOL to 0.53 ETH
        </p>
      </div>
      <Button
        className="h-[43px] w-full"
        variant="plain"
        rounded="sm"
        onClick={handleComplete}
      >
        Done
      </Button>
    </div>
  );
}
