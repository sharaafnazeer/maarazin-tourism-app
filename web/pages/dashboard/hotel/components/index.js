import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ContentTabContent from "./ContentTabContent";
import LocationTabContent from "./LocationTabContent";
import RoomsTabcontent from "./RoomsTabContent";
import RulesTabContent from "./RulesTabContent";

const Index = ({isUpdate = false}) => {
  const tabs = [
    {
      label: "Content",
      labelNo: 1,
      content: <ContentTabContent />,
    },
    {
      label: "Rooms",
      labelNo: 2,
      content: <RoomsTabcontent/>,
    },
    {
      label: "Location",
      labelNo: 3,
      content: <LocationTabContent/>,
    },
    {
      label: "Rules",
      labelNo: 4,
      content: <RulesTabContent/>
    }
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      className="tabs -underline-2 js-tabs"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
        {tabs.map((tab, index) => (
          <Tab key={index} className="col-auto" disabled={!isUpdate && index != 0}>
            <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
              {tab.labelNo}. {tab.label}
            </button>
          </Tab>
        ))}
      </TabList>

      <div className="tabs__content pt-30 js-tabs-content">
        {tabs.map((tab, index) => (
          <TabPanel
            key={index}
            className={`-tab-item-${index + 1} ${
              tabIndex === index ? "is-tab-el-active" : ""
            }`}
          >
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default Index;
