import dynamic from "next/dynamic";

// need to dynamically import this component because
// it appends an HTML element to "document.body", which
// doesn't exist on the server
const Goodbye = dynamic(() => import("../components/Goodbye"), {
  // only render this on the client
  ssr: false,
  // this creates a blank white page to overlay on top of the
  // _app layout while the page is loading
  loading: () => (
    <div
      style={{
        height: "calc(100% + 20px)",
        width: "calc(100% + 200px)",
        margin: "-20px -100px",
        background: "#fff",
      }}
    />
  ),
});

// breaking outside of the _app's layout by creating a portal
// outside of "div.__next", but still within the "body"
export default function Portal() {
  return <Goodbye />;
}
