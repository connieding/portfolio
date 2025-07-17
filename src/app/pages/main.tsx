"use client";

import { useState } from "react";
import Card from "../components/Card";
import ImageButton from "../components/ImageButton";
import DraggableCard from "../components/DraggableCard";

type OpenCard = {
  id: string;
  type: string;
  initialPosition: { x: number; y: number };
};

export default function Main() {
  const [openCards, setOpenCards] = useState<OpenCard[]>([]);
  const [topCardId, setTopCardId] = useState<string | null>(null);

  const getCenterPosition = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    return {
      x: window.innerWidth / 2 - 200,
      y: window.innerHeight / 2 - 150,
    };
  };

  const handleButtonClick = (type: string) => {
    const existingCardIndex = openCards.findIndex((card) => card.type === type);

    if (existingCardIndex >= 0) {
      const cardToRemove = openCards[existingCardIndex];
      setOpenCards(openCards.filter((_, index) => index !== existingCardIndex));
      if (topCardId === cardToRemove.id) setTopCardId(null);
    } else {
      const newCard = {
        id: Date.now().toString(),
        type,
        initialPosition: getCenterPosition(),
      };
      setOpenCards([...openCards, newCard]);
      setTopCardId(newCard.id); // bring new card to top
    }
  };

  const handleCloseCard = (id: string) => {
    setOpenCards(openCards.filter((card) => card.id !== id));
    if (topCardId === id) setTopCardId(null);
  };

  const bringToFront = (id: string) => {
    setTopCardId(id);
  };

  const getZIndex = (id: string) => {
    // Assign 50 to topmost, rest based on order
    if (id === topCardId) return 50;
    return 30 + openCards.findIndex((card) => card.id === id);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-transparent">
      <div className="static">
        <Card className="w-[750px] h-[500px] max-w-full" headerText="home">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="font-roboto-mono text-5xl text-black leading-16 -translate-y-4">
              Hi, I'm{" "}
              <span
                className="font-bold"
                style={{ color: "var(--text-quaternary)" }}
              >
                Connie!
              </span>
            </h1>
            <div className="mt-4 sm:mt-8 flex gap-4 sm:gap-8 flex-wrap justify-center pt-0 px-4">
              {["about", "links", "works", "contacts"].map((type, i) => (
                <ImageButton
                  key={type}
                  src={
                    ["/About.svg", "/Link.svg", "/Program.svg", "/Email.svg"][i]
                  }
                  alt={type}
                  label={type}
                  onClick={() => handleButtonClick(type)}
                  isActive={openCards.some((card) => card.type === type)}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>

      {openCards.map((card) => (
        <DraggableCard
          key={card.id}
          id={card.id}
          type={card.type}
          initialPosition={card.initialPosition}
          onClose={() => handleCloseCard(card.id)}
          zIndex={getZIndex(card.id)}
          onFocus={() => bringToFront(card.id)}
        />
      ))}
    </div>
  );
}
