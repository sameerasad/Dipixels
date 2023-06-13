import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
// import AnimatedCursor from "react-animated-cursor";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

function MyApp({ Component, pageProps }) {
  // const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  //   ssr: false,
  // });
  // const scrollPercentage = useScrollPercentage();
  // console.log(scrollPercentage, "pppp");
  return (
    <main
      className={montserrat.className}
      style={{ color: "#ffff", scrollbarColor: "red" }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Component {...pageProps} />
      {/* <AnimatedCursor
        style={{ position: "relative", zIindex: "99" }}
        innerSize={10}
        outerSize={35}
        color="255,255,255"
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={2}
        outerStyle={{ border: "3px solid #ffff" }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
    </main>
  );
}

export default MyApp;
