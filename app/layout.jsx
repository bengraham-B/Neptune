import { Inter } from "next/font/google";
import "./globals.css";


// Redux
import { Providers } from "./GlobalRedux/provier";

// Components
import Header from "./components/Header";

// Auth Tutorial Componet
import Nav from "./(components)/Nav";

// AuthProvider : used for client side components/pages - only needed when authentication is required on client side
// import AuthProvider from "./(components)/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neptune",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="bg-white">
			{/* <AuthProvider> */}
				<body className={inter.className}>
					<Providers>

						<Header/>
						{/* <Nav /> */}
						{children}
					</Providers>
				</body>
			{/* </AuthProvider> */}
		</html>
	);
}
