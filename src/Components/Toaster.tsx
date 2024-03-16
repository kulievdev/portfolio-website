import { Toaster as HotToaster } from "react-hot-toast";

const Toaster = () => {
  return (
    <HotToaster
      toastOptions={{
        duration: 5000,
        style: {
          fontSize: "14px",
          fontFamily: "inherit",
          padding: "16px",
          width: "40rem",
        },
        success: {
          iconTheme: {
            primary: "rgb(34 197 94)",
            secondary: "rgb(255 255 255)",
          },
        },
        error: {
          iconTheme: {
            primary: "rgb(239 68 68)",
            secondary: "rgb(255 255 255)",
          },
        },
      }}
    />
  );
};

export default Toaster;
