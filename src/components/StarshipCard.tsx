import React from "react";
import { Card, Skeleton } from "antd";

type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
};

interface StarshipCardProps {
  data?: Starship; // Marcamos data como opcional para mostrar el Skeleton si no hay datos
  loading?: boolean; // Propiedad para gestionar la visualización del Skeleton
}

const StarshipCard: React.FC<StarshipCardProps> = ({
  data: starship,
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
        <Skeleton active paragraph={{ rows: 9 }} />
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">{starship?.name}</h2>
          <div className="text-sm">
            <p>
              <span className="font-semibold">Model:</span> {starship?.model}
            </p>
            <p>
              <span className="font-semibold">Manufacturer:</span>{" "}
              {starship?.manufacturer}
            </p>
            <p>
              <span className="font-semibold">Cost in Credits:</span>{" "}
              {starship?.cost_in_credits}
            </p>
            <p>
              <span className="font-semibold">Length:</span> {starship?.length}
            </p>
            <p>
              <span className="font-semibold">Max Atmosphering Speed:</span>{" "}
              {starship?.max_atmosphering_speed}
            </p>
            <p>
              <span className="font-semibold">Crew:</span> {starship?.crew}
            </p>
            <p>
              <span className="font-semibold">Passengers:</span>{" "}
              {starship?.passengers}
            </p>
            <p>
              <span className="font-semibold">Cargo Capacity:</span>{" "}
              {starship?.cargo_capacity}
            </p>
            <p>
              <span className="font-semibold">Consumables:</span>{" "}
              {starship?.consumables}
            </p>
          </div>
        </>
      )}
    </Card>
  );
};

export default StarshipCard;
