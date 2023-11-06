import React, { useState, useEffect } from "react";

interface TabsProps {
  items: string[];
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ items, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("selectedTab");
    if (data) {
      setSelectedTab(parseInt(data));
      onTabChange(items[parseInt(data)]);
    }
  }, [items, onTabChange]);

  const changeTab = (index: number) => {
    setSelectedTab(index);
    localStorage.setItem("selectedTab", index.toString());
    onTabChange(items[index]);
  };

  return (
    <div className="border-b border-gray-200">
      <nav className="flex justify-center" role="navigation">
        {items?.map((item, index) => (
          <button
            key={index}
            style={
              index === selectedTab
                ? {
                    borderRadius: "30px",
                    border: "1px solid #290C43",
                    background: "rgba(192, 53, 255, 0.80)",
                    boxShadow: "0px 0px 8px 0px #C035FF",
                    width: "194px",
                    height: "44px",
                    flexShrink: 0,
                    marginLeft: "10px",
                    marginBottom: "15px",
                  }
                : {
                    borderRadius: "30px",
                    border: "1px solid #ECE4EF",
                    boxShadow: "0px 0px 8px 0px #C035FF",
                    background: "transparent",
                    width: "194px",
                    height: "44px",
                    flexShrink: 0,
                    marginLeft: "10px",
                    marginBottom: "15px",
                  }
            }
            onClick={() => changeTab(index)}
          >
            <span
              style={{
                color: "#ECE4EF",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "2.08px",
                textTransform: "uppercase",
              }}
            >
              {item}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
