import { toast, ToastOptions } from "react-toastify";

class Notify {
   success(message: string, options?: ToastOptions) {
      toast.success(message, options);
   }

   error(message: string, options?: ToastOptions) {
      toast.error(message, options);
   }
}

export default new Notify();
