import "@styles/globals.css";

export const metadata = {
  title: "The Wedding of Nailal & Via by Invitato",
  description:
    "Together with joyful hearts, we are pleased to announce the beginning of this new chapter of our lives together. Please click the Website Invitation link on this message for more information about our wedding details:",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
