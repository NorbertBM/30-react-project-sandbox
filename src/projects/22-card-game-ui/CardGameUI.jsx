import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import "./cardGame.css";
import Card from "./Card";

// Units
import SpearManImg from "./svg/spear-man.svg";
import WarHoursMan from "./svg/warhorse-svgrepo-com.svg";
import Archer from "./svg/archer.svg";

export default function CardGameUI() {
  const [start, setStart] = useState(false);
  const startGame = () => {
    setStart(true);
  };
  document.body.style.background = "#170536";
  document.body.style.color = "#bab6bf";
  return (
    <div className="container text-center">
      {!start ? (
        <section className="text-center">
          <Title text={"Card Game"} />
          <Button
            text="Start"
            btnClass={"btn-success btn-lg"}
            onClick={startGame}
          />

          <Title classes={"subtitle"} text="Rules:" />
          <ul className="fs-lg d-flex flex-column " style={{ gap: 15 }}>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              sed! Dicta obcaecati iusto unde tempora voluptas incidunt saepe
              ipsam aspernatur.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              sed! Dicta obcaecati iusto unde tempora voluptas incidunt saepe
              ipsam aspernatur.
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed! Dicta obcaecati iusto unde tempora voluptas incidunt saepe
                ipsam aspernatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed! Dicta obcaecati iusto unde tempora voluptas incidunt saepe
                ipsam aspernatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed! Dicta obcaecati iusto unde tempora voluptas incidunt saepe
                ipsam aspernatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed! Dicta obcaecati iusto unde tempora voluptas incidunt saepe
                ipsam aspernatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed! Dicta obcaecati iusto unde tempora voluptas incidunt saepe
                ipsam aspernatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                sed! Dicta obcaecati iusto unde tempora voluptas incidunt saepe
                ipsam aspernatur.
              </li>
            </li>
          </ul>
        </section>
      ) : (
        <>
          <Title text={"0-1"} />
          <main className="container m-auto game-board">
            <section className="player_1">
              <Card
                player={"player_1"}
                unitTypeName="Sward Cavalry"
                unitTypeImg={WarHoursMan}
              />{" "}
              <Card
                player={"player_1"}
                unitTypeName="Spear man"
                unitTypeImg={SpearManImg}
              />{" "}
              <Card
                player={"player_1"}
                unitTypeName="Sward Cavalry"
                unitTypeImg={Archer}
              />{" "}
              <Card
                player={"player_1"}
                unitTypeName="Spear man"
                unitTypeImg={SpearManImg}
              />
            </section>
            <section className="fog-of-war"></section>
            <section className="player_2">
              <Card
                player={"player_2"}
                unitTypeName="Sward Cavalry"
                unitTypeImg={WarHoursMan}
              />{" "}
              <Card
                player={"player_2"}
                unitTypeName="Spear man"
                unitTypeImg={SpearManImg}
              />{" "}
              <Card
                player={"player_2"}
                unitTypeName="Sward Cavalry"
                unitTypeImg={WarHoursMan}
              />{" "}
              <Card
                player={"player_2"}
                unitTypeName="Spear man"
                unitTypeImg={Archer}
              />
            </section>
          </main>
        </>
      )}
    </div>
  );
}
