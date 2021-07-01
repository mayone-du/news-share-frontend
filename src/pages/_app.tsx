import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import nprogress from "nprogress";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { initializeApollo } from "src/apollo/apolloClient";

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

const App = (props: AppProps) => {
  const apolloClient = initializeApollo(null);

  if (process.browser) {
    nprogress.start();
  }
  useEffect(() => {
    nprogress.done();
  });

  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <props.Component {...props.pageProps} />
          <Toaster toastOptions={{ duration: 2500 }} />
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
