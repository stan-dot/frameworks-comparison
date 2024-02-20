import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import Link from "next/link";
import { Hero } from "./Hero";
import styles from "./page.module.css";

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
  }
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
      <Hero />

      <div className={styles.grid}>
        {LINKS.map(({ title, href, description }) => (
          <Card className={styles.card} href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}

