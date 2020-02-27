import React from "react";
import {
  Header,
  HeaderName,
  SkipToContent
} from "carbon-components-react/lib/components/UIShell";

const TutorialHeader = () => (
  <Header aria-label="HSI">
    <SkipToContent />
    <HeaderName to="/" prefix="IBM">
      | HSI
    </HeaderName>
  </Header>
);

export default TutorialHeader;
