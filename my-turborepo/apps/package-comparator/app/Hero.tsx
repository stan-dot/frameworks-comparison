import { Button } from "@repo/ui/button";
import Image from "next/image";
import { Gradient } from "./Gradient";
import styles from "./page.module.css";
import React from "react";

export function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <Image
                alt=""
                height={614}
                src="circles.svg"
                width={614}
                style={{ pointerEvents: "none" }}
              />
            </div>
            <div className={styles.logoGradientContainer}>
              <Gradient className={styles.logoGradient} conic small />
            </div>

          </div>
          <Gradient className={styles.backgroundGradient} conic />
        </div>
      </div>
    </>
  );
}
