import React from "react";
import { Card, Skeleton } from "antd";

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
};

interface PlanetCardProps {
  data?: Planet; // Marcamos data como opcional para mostrar el Skeleton si no hay datos
  loading?: boolean; // Propiedad para gestionar la visualización del Skeleton
}

const PlanetCard: React.FC<PlanetCardProps> = ({
  data: planet,
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
        <Skeleton active paragraph={{ rows: 8 }} />
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">{planet?.name}</h2>
          <div className="text-sm">
            <p>
              <span className="font-semibold">Rotation Period:</span>{" "}
              {planet?.rotation_period}
            </p>
            <p>
              <span className="font-semibold">Orbital Period:</span>{" "}
              {planet?.orbital_period}
            </p>
            <p>
              <span className="font-semibold">Diameter:</span>{" "}
              {planet?.diameter}
            </p>
            <p>
              <span className="font-semibold">Climate:</span> {planet?.climate}
            </p>
            <p>
              <span className="font-semibold">Gravity:</span> {planet?.gravity}
            </p>
            <p>
              <span className="font-semibold">Terrain:</span> {planet?.terrain}
            </p>
            <p>
              <span className="font-semibold">Surface Water:</span>{" "}
              {planet?.surface_water}
            </p>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {planet?.population}
            </p>
          </div>
        </>
      )}
    </Card>
  );
};

export default PlanetCard;
