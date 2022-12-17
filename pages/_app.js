import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  user: {},
  setUser: () => {},
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

export default MyApp;
