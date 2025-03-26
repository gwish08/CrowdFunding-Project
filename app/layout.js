import "./globals.css";

//INTERNAL IMPORTS
import { NavBar, Footer } from "../Components";
import { CrowdFundingProvider } from "../Context/CrowdFunding";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <CrowdFundingProvider>
            <NavBar />
            {children}
            <Footer />
          </CrowdFundingProvider>
        </>

      </body>
    </html>
  );
}
