export const getActivePosition = (callback: any) => {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;

            callback({ lat, lng }, true);
         },
         (error) => {
            callback(error, false);
         },
      );
   }
};
