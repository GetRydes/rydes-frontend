import React from "react";

export interface RegisterFormSubcomponents {
   ItemContainer: React.FC<ItemContainerProps>;
}

export interface ItemContainerProps {
   heading: string;
   text?: string;
}
