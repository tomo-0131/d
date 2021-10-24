import { Top } from "./components/Top";
import { Header } from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";

import { AdminProvider } from "./provider/AdminProvider";

export default function App() {
  return (
    <ChakraProvider>
      <AdminProvider>
        <Header />
        <Top />
      </AdminProvider>
    </ChakraProvider>
  );
}
