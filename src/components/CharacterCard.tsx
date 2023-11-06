import React from "react";
import { Card, Skeleton } from "antd";

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  skin_color: string;
  gender: string;
};

interface CharactersCardProps {
  data?: Character; // Marcamos data como opcional para mostrar el Skeleton si no hay datos
  loading?: boolean; // Propiedad para gestionar la visualización del Skeleton
}

const CharactersCard: React.FC<CharactersCardProps> = ({
  data: character,
  loading = true,
}) => {
  const cardStyle = {
    width: 300,
    background:
      "linear-gradient(90deg, rgba(14, 23, 101, 0.85) 0%, rgba(53, 14, 88, 0.85) 98.1%)",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <Card style={cardStyle}>
      {loading ? (
        <Skeleton active paragraph={{ rows: 2 }} />
      ) : (
        <>
          <h2 className="text-lg font-medium mb-2">{character?.name}</h2>
          <p className="text-gray-700">
            Height: {character?.height} | Hair Color: {character?.hair_color} |
            Eye Color: {character?.eye_color}
          </p>
        </>
      )}
    </Card>
  );
};

export default CharactersCard;
