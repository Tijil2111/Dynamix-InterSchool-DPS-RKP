"use client";
import styles from "./Nutrition.module.css";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import Image from "next/image";
import soup from "/public/nutrition/soup.png";
import icons from "/public/nutrition/icons.png";
import dots from "/public/nutrition/dots.png";
import avatar from "/public/nutrition/avatar2.png";
import stars from "/public/nutrition/stars.png";
import StarRatings from "react-star-ratings";
import { React, useState } from "react";

export default function NutritionModule() {
  const [rating, setRating] = useState();
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <div className={styles.mainText}>
        <p className={styles.company}>LifeLift</p>
        <p className={styles.title}>
          <span className={styles.span}> Nutrition </span> Count
        </p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leftCol}>
          <div className={styles.inputRow}>
            <input placeholder="porridge" className={styles.input} />
            <div className={styles.icon}>
              <PiMagnifyingGlassBold size={25} />
            </div>
          </div>
          <Image src={soup} alt="soup" />
          <Image src={icons} alt="icons" />
          <Image src={dots} alt="dots" />
          <div className={styles.qualityBoxCol}>
            <div className={styles.qualityBox}>
              <p className={styles.qualityBoxText}>Cooking Time</p>
              <div className={styles.boxLine}></div>
              <p className={styles.qualityBoxText}>15-20 mins</p>
            </div>
          </div>
          <div className={styles.qualityBoxCol}>
            <div className={styles.qualityBox}>
              <p className={styles.qualityBoxText}>Difficulty Level </p>
              <div className={styles.boxLine1}></div>
              <p className={styles.qualityBoxText1}>Easy</p>
            </div>
          </div>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.line}></div>
        <div className={styles.spacer}></div>
        <div className={styles.rightCol}>
          <p className={styles.titleRight}>Reviews</p>
          <div className={styles.cardSpacer}></div>
          <div className={styles.reviewCard}>
            <Image src={avatar} alt="avatar 2" />
            <div>
              <p className={styles.cardTitle}>Elizabeth Jones</p>
              <Image src={stars} alt="stars" className={styles.stars} />
              <p className={styles.cardPara}>
                A hot meal and that too quick? It’s a saviour from the cold
                winter. 5 stars!!
              </p>
            </div>
          </div>
          <div className={styles.horLine}></div>
          <div className={styles.cardSpacer}></div>
          <div className={styles.reviewCard}>
            <Image src={avatar} alt="avatar 2" />
            <div>
              <p className={styles.cardTitle}>Elizabeth Jones</p>
              <Image src={stars} alt="stars" className={styles.stars} />
              <p className={styles.cardPara}>
                {`A hot meal and that too quick? It’s a saviour from the cold
                winter. 5 stars!!`}
              </p>
            </div>
          </div>
          <div className={styles.horLine}></div>
          <div className={styles.starIcon}>
            <StarRatings
              rating={rating}
              starRatedColor="#F5D504"
              starHoverColor="#F5D504"
              changeRating={changeRating}
              numberOfStars={5}
              name="rating"
              starEmptyColor="#181818"
              starDimension="30px"
              starSpacing={"5px"}
            />
          </div>
          <input placeholder="write your review" className={styles.input} />
        </div>
      </div>
    </div>
  );
}
