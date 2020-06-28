import { createPortal } from "react-dom";
import Link from "next/link";

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
