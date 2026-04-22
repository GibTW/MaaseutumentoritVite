import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  text: ReactNode;
  imageSrc: string;
  imageAlt: string;
  align?: "left" | "right";
};

export default function Section({
  title,
  text,
  imageSrc,
  imageAlt,
  align = "left",
}: SectionProps) {
  const hasImage = Boolean(imageSrc)

  const media = hasImage ? (
    <figure className="section__card">
      <img className="section__image" src={imageSrc} alt={imageAlt} />
      {title ? <figcaption className="section__title">{title}</figcaption> : null}
    </figure>
  ) : null;

  return (
    <section className={`section section--${align} ${!hasImage ? "section--text-only" : ""}` }>
      <div className="section__media-slot section__media-slot--left">
        {align === "left" ? media : null}
      </div>

      <div className="section__body">
        {typeof text === "string" ? <p className="section__text">{text}</p> : text}
      </div>

      <div className="section__media-slot section__media-slot--right">
        {align === "right" ? media : null}
      </div>
    </section>
  );
}