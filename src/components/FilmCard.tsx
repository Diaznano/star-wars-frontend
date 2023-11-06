import React from "react";
import { Card, Skeleton } from "antd";

type Film = {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
};

interface FilmCardProps {
  data?: Film;
  loading?: boolean;
}

const FilmCard: React.FC<FilmCardProps> = ({ data: film, loading = true }) => {
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
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">{film?.title}</h2>
          <div className="text-sm">
            <p>
              <span className="font-semibold">Episode:</span> {film?.episode_id}
            </p>
            <p>
              <span className="font-semibold">Director:</span> {film?.director}
            </p>
            <p>
              <span className="font-semibold">Producer:</span> {film?.producer}
            </p>
            <p>
              <span className="font-semibold">Release Date:</span>{" "}
              {film?.release_date}
            </p>
          </div>
        </>
      )}
    </Card>
  );
};

export default FilmCard;
