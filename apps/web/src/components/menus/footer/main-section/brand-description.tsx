import React from "react";
import {cn} from "@/lib/utils";
import {BaseProps} from "@/types/theme";
import BrandIdentity from "@/components/brand/brand-identity";

const BrandDescription = ({className}: BaseProps) => {
  return (
    <section
      className={cn(
        "BrandDescription",
        "flexi w-full flex-col sm:flex-row sm:justify-start",
        className,
      )}
    >
      <BrandIdentity className="flex-col sm:flex-row" inverted />
    </section>
  );
};

export default BrandDescription;