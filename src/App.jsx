import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "./i18n";
import "./App.css";
import LanguageSelector from "./components/language-selector";

const App = () => {
  const { t } = useTranslation();
  const { line1, line2 } = t("description", { channel: "Lalita Londhe" });

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans
          i18nKey={line1}
          values={{
            channel: "Lalita Londhe",
          }}
          components={{ 1: <b /> }}
        ></Trans>
      </span>
      <span>{line2}</span>
    </div>
  );
};

export default App;
