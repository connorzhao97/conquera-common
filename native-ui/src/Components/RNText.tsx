import { Text, TextProps } from "react-native";
import React from "react";

export type RNTextProps = TextProps & {
  className?: string;
};

export function RNText({ className, children, ...props }: RNTextProps) {
  return (
    <Text className={className} {...props}>
      {children}
    </Text>
  );
}
