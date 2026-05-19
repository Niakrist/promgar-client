import React from "react";
import { IconEmale } from "./Icons/IconEmale";
import { IconPhone } from "./Icons/IconPhone";
import { IconLogo } from "./Icons/IconLogo";
import { IconCatalog } from "./Icons/IconCatalog";
import { IconSearch } from "./Icons/IconSearch";
import { IconCart } from "./Icons/IconCart";
import { IconDiscont } from "./Icons/IconDiscont";
import { IconChevronLeft } from "./Icons/IconChevronLeft";
import { IconArrow } from "./Icons/IconArrow";
import { IconWarehouse } from "./Icons/IconWarehouse";
import { IconCertificates } from "./Icons/IconCertificates";
import { IconAnalogues } from "./Icons/IconAnalogues";
import { IconDeferred } from "./Icons/IconDeferred";
import { IconDelivery } from "./Icons/IconDelivery";
import { IconReservation } from "./Icons/IconReservation";
import { IconControl } from "./Icons/IconControl";
import { IconExport } from "./Icons/IconExport";
import { IconTelegram } from "./Icons/IconTelegram";
import { IconCheck } from "./Icons/IconCheck";
import { IconGeo } from "./Icons/IconGeo";
import { IconChevron } from "./Icons/IconChevron";
import { IconReset } from "./Icons/IconReset";

export type TIcons =
  | "iconEmail"
  | "iconPhone"
  | "iconLogo"
  | "iconCatalog"
  | "iconSearch"
  | "iconCart"
  | "iconDiscont"
  | "iconChevronLeft"
  | "iconArrow"
  | "iconWarehouse"
  | "iconCertificates"
  | "iconAnalogues"
  | "iconDeferred"
  | "iconDelivery"
  | "iconReservation"
  | "iconControl"
  | "iconExport"
  | "iconTelegram"
  | "iconCheck"
  | "iconGeo"
  | "iconChevron"
  | "iconReset";

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
    iconArrow: <IconArrow className={className} {...props} />,
    iconWarehouse: <IconWarehouse className={className} {...props} />,
    iconCertificates: <IconCertificates className={className} {...props} />,
    iconAnalogues: <IconAnalogues className={className} {...props} />,
    iconDeferred: <IconDeferred className={className} {...props} />,
    iconDelivery: <IconDelivery className={className} {...props} />,
    iconReservation: <IconReservation className={className} {...props} />,
    iconControl: <IconControl className={className} {...props} />,
    iconExport: <IconExport className={className} {...props} />,
    iconTelegram: <IconTelegram className={className} {...props} />,
    iconCheck: <IconCheck className={className} {...props} />,
    iconGeo: <IconGeo className={className} {...props} />,
    iconChevron: <IconChevron className={className} {...props} />,
    iconReset: <IconReset className={className} {...props} />,
  };
  return icons[name];
};
