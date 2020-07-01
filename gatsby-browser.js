import "./src/styles/styles.scss";
import React from "react";

import { LanguageProvider } from "./src/context/LanguageContext";

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);
