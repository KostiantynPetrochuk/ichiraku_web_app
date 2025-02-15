import React from "react";
import Link from "next/link";

import "./styles.scss";

const HomeButton = () => (
  <Link href={"/"} className="homeButton__link">
    До покупок
  </Link>
);

export default HomeButton;
