import "./styles.scss";

type HomeInfoItemPropsType = {
  imagePath: string;
  title: string;
};

const HomeInfoItem = (props: HomeInfoItemPropsType) => {
  const { imagePath, title } = props;

  return (
    <li className="info-list-item">
      <div className="info-list-item-img-inner">
        <img className="info-list-item__img" src={imagePath} alt={""} />
      </div>
      <span className="info-list-item__text">{title}</span>
    </li>
  );
};

export default HomeInfoItem;
