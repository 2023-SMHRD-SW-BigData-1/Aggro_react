import React from "react";
import "./Footer1.css";
const Footer1 = () => {
  return (
    <div className="l-footer">
      <div className="footer">
        <div className="footer__copyright">
          {/* © 2023 Agg.ro. Agg.ro isn’t endorsed by Riot Games and doesn’t
          reflect the views or opinions of Riot Games or anyone officially
          involved in producing or managing League of Legends. League of Legends
          and Riot Games are trademarks or registered trademarks of Riot Games,
          Inc. League of Legends © Riot Games, Inc. */}
          © 2023 Agg.ro. This text serves as a copyright notice for the website Agg.ro, stating that it is not an official endorsement or position regarding Agg.ro-related content. Agg.ro is explicitly declared as independent from official entities.
          We are the Best.
        </div>
        <ul className="footer__sns"></ul>
      </div>
    </div>
  );
};

export default Footer1;
