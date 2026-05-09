import { twMerge } from "tailwind-merge";

const BarPercentage = ({
  percentage,
  className,
}: {
  percentage: Number;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        `bg-foreground relative w-full rounded-full h-3 mt-2`,
        className,
      )}
    >
      <div
        className={twMerge(`h-3  bg-primary-600 rounded-full`, className)}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default BarPercentage;
