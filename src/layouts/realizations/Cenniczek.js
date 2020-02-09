import React, { useState } from "react";
import macBook from "../../images/cenniczek-com-macbook.png";
import iMac from "../../images/cenniczek-com-imac.png";
import iPad from "../../images/cenniczek-com-ipad.png";
import iphone from "../../images/cenniczek-com-iphone.png";
import Pentagon from "../../components/Pentagon";
import "../../styles/Cenniczek.css";

const Cenniczek = () => {
  const [active, setActive] = useState("");
  const handleActive = () => {
    setActive("active");
    window.scroll(0, 0);
  };

  return (
    <div className="cenniczek-section" onLoad={handleActive}>
      <div className="description-project">
        <h1>
          <a
            href="https://cenniczek.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            cenniczek.com
          </a>
        </h1>
        <p>Serwis internetowy publikujący gazetki promocyjne</p>
        <Pentagon
          key="darkGrey-realizations"
          color="45,46,45,0.8"
          name={`darkGrey-realizations ${active}`}
        />
        <Pentagon
          key="dirtBlue-realizations"
          color="60,74,110,0.8"
          name={`dirtBlue-realizations ${active}`}
        />
        <Pentagon
          key="green-realizations"
          color="87,94,32,0.8"
          name={`green-realizations ${active}`}
        />
      </div>

      <div className={`example-project ${active}`}>
        <img src={macBook} alt="projekt cenniczek.com na macbooka" />
        <img src={iMac} alt="projekt cenniczek.com na imaca" />
        <img src={iPad} alt="projekt cenniczek.com na ipada" />
        <img src={iphone} alt="projekt cenniczek.com na iphona" />
      </div>
    </div>
  );
};
export default Cenniczek;
