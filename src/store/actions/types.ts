import { PassengerActionProps } from "../reducers/passenger/types";
import { RootActionProps } from "../reducers/root/types";

export type ActionProps = RootActionProps | PassengerActionProps;
