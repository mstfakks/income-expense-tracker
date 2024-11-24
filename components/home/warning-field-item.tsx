import Image from "next/image";

interface WarningFieldItemProps {
    message: string
}

const WarningFieldItem = ({ message }: WarningFieldItemProps) => {
  return (
    <div className="flex items-center gap-2 p-2 border bg-yellow-200 rounded-xl">
      <Image
        src={"/warning.svg"}
        alt="warning"
        priority
        width={60}
        height={60}
      />
      <p className="font-semibold text-lg">
        {message}
      </p>
    </div>
  );
};

export default WarningFieldItem
