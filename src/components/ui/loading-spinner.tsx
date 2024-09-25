import * as React from "react";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const spinnerVariants =
  "mx-auto w-16 h-16 rounded-full animate-spin text-black/30";

interface LoadingSpinnerProps extends React.HTMLAttributes<SVGSVGElement> {
  className?: string;
}

const LoadingSpinner = React.forwardRef<SVGSVGElement, LoadingSpinnerProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <LoaderCircle
        ref={ref}
        className={cn(spinnerVariants, className)}
        {...rest}
      />
    );
  }
);

LoadingSpinner.displayName = "LoadingSpinner";

export { LoadingSpinner };
