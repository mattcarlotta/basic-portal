import { createPortal } from "react-dom";
import Link from "next/link";
import Layout from "../Layout";

// this component is used to show what a component
// would look like if it breaks outside of "div.__next"
// and lays on top of it
function Goodbye() {
  return createPortal(
    <div className="portal">
      <p className="goodbye">Goodbye World</p>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <br />
      <Link href="/page">
        <a>View Normal Page</a>
      </Link>
      <Layout css="background: #1f1f1f;color: white;text-align: center;">
        <h1>Dynamic Layout</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </Layout>
      <style jsx>{`
        .portal {
          position: absolute;
          top: 0;
          background: #fff;
          color: #000;
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>,
    document.body
  );
}

export default Goodbye;
