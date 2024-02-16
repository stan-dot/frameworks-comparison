import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import Image from "next/image";
import { Gradient } from "./Gradient";
import styles from "./page.module.css";
import FixedSizeGrid from "./components/FixedSizeGrid";

type Link = {
  title: string;
  href: string;
  description: string;
};

const LINKS: Link[] = [
  {
    title: "Docs",
    href: "https://dev-portal.diamond.ac.uk/guide/guidelines/typescript/",
    description: "Find in-depth information about using Typescript at Diamond.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about Turbo monorepos with the official handbook.",
  },
];

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          page to compare package jsons between different projescts&nbsp;
          <Code className={styles.code}>Package json comparison</Code>
        </p>
      </div>

      <Button appName="web" className={styles.button}>
        Click me!
      </Button>

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

            <div className={styles.logo}>
              <p> logo here</p>
            </div>
          </div>
          <Gradient className={styles.backgroundGradient} conic />
        </div>
      </div>

      <div className={styles.grid}>
        {LINKS.map(({ title, href, description }) => (
          <Card className={styles.card} href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
      <FixedSizeGrid />
    </main>
  );
}
