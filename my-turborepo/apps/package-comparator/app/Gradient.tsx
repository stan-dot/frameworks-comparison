import styles from "./page.module.css";

type GradientProps = {
  small?: boolean;
  conic?: boolean;
  className?: string;
};

export function Gradient({
  conic,
  className,
  small,
}: GradientProps): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
