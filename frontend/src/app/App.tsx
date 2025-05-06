import { Navbar } from "../widgets";
import { AppRouter } from "./providers/router";
import { AppRouterWrapper } from "./App.styles";

function App() {
  return (
    <>
      <Navbar />
      <AppRouterWrapper>
        <AppRouter />
      </AppRouterWrapper>
    </>
  );
}

export default App;
