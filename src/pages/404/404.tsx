import DefaultLayout from "../../common/layouts/default";

const PageNotFound = () => {
   return (
      <DefaultLayout>
         <div
            style={{
               display: "flex",
               alignItems: "center",
               height: "calc(100vh - 111px)",
               justifyContent: "center",
               background: "#f5f5f5",
            }}
         >
            <div style={{ textAlign: "center" }}>
               <h3 style={{ fontSize: 40 }}>404</h3>
               <div>Page not found</div>
            </div>
         </div>
      </DefaultLayout>
   );
};

export default PageNotFound;
