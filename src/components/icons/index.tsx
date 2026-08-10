import * as React from 'react';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

export type IconName = keyof typeof Icons;

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = (Icons[name] as React.ComponentType<LucideProps>) || Icons.HelpCircle;
  return <IconComponent {...props} />;
};
