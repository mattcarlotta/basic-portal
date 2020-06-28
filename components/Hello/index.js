import Link from "next/link";

// this component is used to show what a component
// would look like if it stays within "div.__next"
function Hello() {
  return (
    <div>
      <div className="hello">Hello World</div>
      <Link href="/page">
        <a>View Normal Page</a>
      </Link>
      <br />
      <Link href="/portal">
        <a>View Portal</a>
      </Link>
      <style jsx>{`
        .container {
          background: #000;
          height: 100%;
          width: 100%;
          text-align: center;
        }

        .hello {
          font: 15px Helvetica, Arial, sans-serif;
          background: #1f1f1f;
          padding: 100px;
          transition: all 100ms ease-in-out;
        }

        .hello:hover {
          background: #505050;
        }
      `}</style>
    </div>
  );
}

export default Hello;
