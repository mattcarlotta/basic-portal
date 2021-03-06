// wrapping all client pages in a layout
const App = ({ Component, pageProps }) => (
  <div className="wrapper">
    <Component {...pageProps} />
    <style jsx>{`
      .wrapper {
        background: black;
        color: white;
        height: calc(100% - 20px);
        text-align: center;
        padding: 20px 100px 0;
      }
    `}</style>
    <style global jsx>{`
      html,
      body,
      #__next {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default App;
