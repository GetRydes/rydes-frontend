import { DefaultLayout } from "../../common/layouts";

const PageNotFound = () => {
   return (
      <DefaultLayout>
         <div
            style={{
               display: "flex",
               alignItems: "center",
               height: "calc(100vh - 111px)",
               justifyContent: "center",
               background: "#eee",
            }}
         >
            <div style={{ textAlign: "center", transform: "translateY(-111px)" }}>
               <h3 style={{ fontSize: 40 }}>404</h3>
               <div>Page not found</div>
            </div>
         </div>
      </DefaultLayout>
   );
};

export default PageNotFound;
