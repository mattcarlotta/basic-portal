import { createPortal } from "react-dom";
import Link from "next/link";

function Goodbye() {
  return createPortal(
    <div className="portal">
      <div className="goodbye">Goodbye World</div>
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
          background: #bbb;
          height: calc(100% - 20px);
          width: calc(100% - 200px);
          padding: 20px 100px 0;
          text-align: center;
        }

        .goodbye {
          font: 15px Helvetica, Arial, sans-serif;
          background: #ccc;
          padding: 100px;
          transition: all 100ms ease-in-out;
        }

        .goodbye:hover {
          background: #fff;
        }
      `}</style>
    </div>,
    document.body
  );
}

export default Goodbye;
