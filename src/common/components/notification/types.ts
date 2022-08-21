import React from "react";
import { ToastOptions } from "react-toastify";

export interface NotificationProps {
   message: string;
   options?: ToastOptions;
}

export type NotifyType = (args: NotificationProps) => void;
