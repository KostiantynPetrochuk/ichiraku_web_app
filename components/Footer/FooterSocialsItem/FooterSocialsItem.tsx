import "./styles.scss";

type FooterSocialsItempropsType = {
  imagePath: string;
};

const FooterSocialsItem = (props: FooterSocialsItempropsType) => {
  const { imagePath } = props;

  return (
    <a href="#" className="footer-socials-item">
      <img className="footer-socials__logo" src={imagePath} alt={""} />
    </a>
  );
};

export default FooterSocialsItem;
