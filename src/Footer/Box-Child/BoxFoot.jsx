import React from "react";
import { useTranslation } from "react-i18next";
import "../Footer.css";

function BoxFoot() {
  const { t } = useTranslation();

  return (
    <>
      <div className="Footer-Parent-Selector">
        <div className="container">
          <div className="be-also-among-Block">
            <div className="Text-Among">
              <h2>{t("FooterTitle")}</h2>
              <p>{t("FooterChildInfo")}</p>
            </div>
            <ul>
              <li>
                <a href="#1">
                  <svg
                    data-v-8f9e4d0e=""
                    fill="none"
                    height="2"
                    viewBox="0 0 32 2"
                    width="32"
                  >
                    <rect
                      data-v-8f9e4d0e=""
                      fill="white"
                      height="32"
                      opacity="0.2"
                      transform="rotate(-90 0 2)"
                      width="2"
                      y="2"
                    ></rect>
                  </svg>
                  <span>Frontend — VueJS, Javascript</span>
                </a>
              </li>
              <li>
                <a href="#1">
                  <svg
                    data-v-8f9e4d0e=""
                    fill="none"
                    height="2"
                    viewBox="0 0 32 2"
                    width="32"
                  >
                    <rect
                      data-v-8f9e4d0e=""
                      fill="white"
                      height="32"
                      opacity="0.2"
                      transform="rotate(-90 0 2)"
                      width="2"
                      y="2"
                    ></rect>
                  </svg>
                  <span>
                    Android Application Programmer (Junior, Strong Junior)
                  </span>
                </a>
              </li>
              <li>
                <a href="#1">
                  <svg
                    data-v-8f9e4d0e=""
                    fill="none"
                    height="2"
                    viewBox="0 0 32 2"
                    width="32"
                  >
                    <rect
                      data-v-8f9e4d0e=""
                      fill="white"
                      height="32"
                      opacity="0.2"
                      transform="rotate(-90 0 2)"
                      width="2"
                      y="2"
                    ></rect>
                  </svg>
                  <span>Flutter - developer</span>
                </a>
              </li>
              <li>
                <a href="#1">
                  <svg
                    data-v-8f9e4d0e=""
                    fill="none"
                    height="2"
                    viewBox="0 0 32 2"
                    width="32"
                  >
                    <rect
                      data-v-8f9e4d0e=""
                      fill="white"
                      height="32"
                      opacity="0.2"
                      transform="rotate(-90 0 2)"
                      width="2"
                      y="2"
                    ></rect>
                  </svg>
                  <span>Backend Go programmers.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxFoot;
