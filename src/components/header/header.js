import React from "react";
import {
  Header,
  HeaderName,
  SkipToContent
} from "carbon-components-react/lib/components/UIShell";

const TutorialHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName to="/" prefix="IBM">
      Carbon Tutorial
    </HeaderName>
  </Header>
);

export default TutorialHeader;
