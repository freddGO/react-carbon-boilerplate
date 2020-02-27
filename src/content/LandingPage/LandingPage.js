import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab
} from "carbon-components-react";
import RepoTable from "../../components/repoTable";

const props = {
  tabs: {
    selected: 0,
    triggerHref: "#",
    role: "navigation"
  },
  tab: {
    href: "#",
    role: "presentation",
    tabIndex: 0
  }
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">IBM</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">HSI</h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="HSI Validator">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <RepoTable />
              </div>
            </Tab>
            <Tab {...props.tab} label="HSI Record">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Rapidly build beautiful and accessible experiences. The
                    Carbon kit contains all resources you need to get started.
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">
          <h3 className="landing-page__label">Placeholder</h3>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">[To be determinated]</div>
        <div className="bx--col-md-4 bx--col-lg-4">[To be determinated]</div>
        <div className="bx--col-md-4 bx--col-lg-4">[To be determinated]</div>
      </div>
    </div>
  );
};

export default LandingPage;
