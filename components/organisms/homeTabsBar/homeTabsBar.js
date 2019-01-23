import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Tabs, ScrollableTab } from "native-base";
import HomeTab from "../homeTab/homeTab";

const HomeTabsBar = ({ onItemPress }) => {
  const dates = new Array(7)
    .fill(moment())
    .map((d, i) => d.clone().add(i, "days"));

  return (
    <Tabs renderTabBar={() => <ScrollableTab />}>
      {dates.map(day => (
        <HomeTab
          key={day}
          date={day}
          heading={day.format("ddd DD")}
          onItemPress={id => onItemPress(id)}
        />
      ))}
    </Tabs>
  );
};

HomeTabsBar.propTypes = {
  onItemPress: PropTypes.func.isRequired
};

export default HomeTabsBar;
