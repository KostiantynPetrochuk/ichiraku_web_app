import "./not-found.scss";

const Error = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="error">
          <div className="error-title">404</div>
          <span className="error-description">Page not found</span>
        </div>
      </div>
    </main>
  );
};

export default Error;
