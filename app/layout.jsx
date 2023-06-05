import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  titile: "PromptJunction",
  description: "Discover & Share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        {/* Wrapping the Provider in the Body so that whole application can utilize the ssession */}
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
