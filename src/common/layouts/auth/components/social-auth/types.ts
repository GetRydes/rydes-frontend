import React from "react";

export interface SocialAuthProps {
   strategies: string[];
}

export interface SocialAuthSubcomponents {
   Container: React.FC;
   Strategy: React.FC<SocialAuthStrategyProps>;
}

export interface SocialAuthStrategyProps {
   name: string;
}
