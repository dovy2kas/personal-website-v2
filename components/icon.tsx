import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  const IconComponent = icon as React.FC<{ className?: string }>;
  return <IconComponent className={className} />;
};

export default Icon;
