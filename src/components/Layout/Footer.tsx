//import "../../styles/main-styles/footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerSection">
        <p>
          <i className="bi bi-signpost-fill"></i>
          Nynäsvägen 3B
        </p>
        <p>
          <i className="bi bi-envelope-fill"></i>
          Milouni@milouni.com
        </p>
        <p>
          <i className="bi bi-phone-vibrate-fill"></i>
          +46782987566
        </p>
      </div>
      <div className="footerSection">
        <p>
          <i className="bi bi-facebook"></i>
        </p>
        <p>
          <i className="bi bi-instagram"></i>
        </p>
        <p>
          <i className="bi bi-twitter"></i>
        </p>
      </div>
    </footer>
  );
};
