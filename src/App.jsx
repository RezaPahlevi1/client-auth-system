import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Login />;
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#4CAF50",
              color: "white",
            },
          },
          error: {
            style: {
              background: "#F44336",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}

export default App;
