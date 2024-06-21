import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function Servicess() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("services")}</title>
        <meta name="description" content="Services Page Created" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="Parent-Services">
        <div className="container">
          <div className="Servicess-header">
            <p className="title-styles">{t("ServicesNewPageChildTitle")}</p>
            <h3 className="title-leader">{t("ServicesNewPageTitle")}</h3>
          </div>
          <div className="Services-Parent-Child-Box">
            <a href="#1" className="Services-Box">
              <h1>{t("ServicesWebsite")}</h1>
              <p>{t("ServicesWebsiteInfo")}</p>
            </a>
            <a href="#4" className="Services-Box">
              <h1>{t("ServicesMobileApp")}</h1>
              <p>{t("ServicesMobileAppInfo")}</p>
            </a>
            <a href="#1" className="Services-Box">
              <h1>UI&UX</h1>
              <p>{t("ServicesUIUX_Info")}</p>
            </a>
            <a href="#1" className="Services-Box">
              <h1>{t("ServicesMedia")}</h1>
              <p>{t("ServicesMediaInfo")}</p>
            </a>
            <a href="#1" className="Services-Box">
              <h1>{t("ServicesCRM")}</h1>
              <p>{t("ServicesCRMInfo")}</p>
            </a>
            <a href="#1" className="Services-Box">
              <h1>{t("ServicesBranding")}</h1>
              <p>{t("ServicesBrandingInfo")}</p>
            </a>
            <a href="#1" className="Services-Box">
              <h1>{t("ServicesKiberHavsizlik")}</h1>
              <p>{t("ServicesKiberHavsizlikInfo")}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicess;
