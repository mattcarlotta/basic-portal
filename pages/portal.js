import dynamic from "next/dynamic";

const Goodbye = dynamic(() => import("../components/Goodbye"), {
  ssr: false,
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

export default function Portal() {
  return <Goodbye />;
}
