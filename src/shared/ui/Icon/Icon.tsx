import React from "react";
import { IconEmale } from "./Icons/IconEmale";
import { IconPhone } from "./Icons/IconPhone";
import { IconLogo } from "./Icons/IconLogo";
import { IconCatalog } from "./Icons/IconCatalog";
import { IconSearch } from "./Icons/IconSearch";
import { IconCart } from "./Icons/IconCart";
import { IconDiscont } from "./Icons/IconDiscont";
import { IconChevronLeft } from "./Icons/IconChevronLeft";

export type TIcons =
  | "iconEmail"
  | "iconPhone"
  | "iconLogo"
  | "iconCatalog"
  | "iconSearch"
  | "iconCart"
  | "iconDiscont"
  | "iconChevronLeft";

interface IIconsProps extends React.ComponentProps<"svg"> {
  name: TIcons;

  className?: string;
}

export const Icon = ({ name, className, ...props }: IIconsProps) => {
  const icons = {
    iconEmail: <IconEmale className={className} {...props} />,
    iconPhone: <IconPhone className={className} {...props} />,
    iconLogo: <IconLogo className={className} {...props} />,
    iconCatalog: <IconCatalog className={className} {...props} />,
    iconSearch: <IconSearch className={className} {...props} />,
    iconCart: <IconCart className={className} {...props} />,
    iconDiscont: <IconDiscont className={className} {...props} />,
    iconChevronLeft: <IconChevronLeft className={className} {...props} />,
  };
  return icons[name];
};
