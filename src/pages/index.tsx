import React, { useState } from "react";
import Tabs from "../components/Tabs";
import CharacterCard from "../components/CharacterCard";
import PlanetCard from "../components/PlanetCard";
import StarshipCard from "../components/StarshipCard";
import FilmCard from "../components/FilmCard";
import { useSWAPI } from "@/hook/useSWAPI";

type CategoryType = "Characters" | "Planets" | "Starships" | "Films";

type CardMapType = {
  [key in CategoryType]: React.FC<any>;
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  background: "linear-gradient(102deg, #030422 -2.74%, #090114 101.6%)",
  width: "100%",
  minHeight: "500vh",
};

const titleStyle: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "StarJedi Special Edition",
  fontSize: "80px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

export default function Information() {
  const [selectedTab, setSelectedTab] = useState<CategoryType>("Characters");
  const categories: CategoryType[] = [
    "Characters",
    "Planets",
    "Starships",
    "Films",
  ];
  const { data, loading } = useSWAPI(selectedTab.toLowerCase());

  const CardMap: CardMapType = {
    Characters: CharacterCard,
    Planets: PlanetCard,
    Starships: StarshipCard,
    Films: FilmCard,
  };

  const changeTab = (tab: any) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    const SelectedCard = CardMap[selectedTab];
    if (loading) return <SelectedCard key={1} data={null} loading={loading} />;
    return data?.map((item: any, index: number) => (
      <SelectedCard key={index} data={item} loading={loading} />
    ));
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>STAR WARS CARDS</h1>
      <Tabs items={categories} onTabChange={changeTab} />
      <div>{renderContent()}</div>
    </div>
  );
}
