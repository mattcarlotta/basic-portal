// reusable component that establishes base CSS
// which can be overriden by a 'css' prop:
// <Layout css="color: white;">...</Layout>
function Layout({ children, css }) {
  return (
    <div className="layout">
      {children}
      <style jsx>{`
        .layout {
          background: #1f1f1f;
          margin-top: 100px;
          padding: 10px;
          color: white;
          ${css};
        }
      `}</style>
    </div>
  );
}

export default Layout;
