import { cn } from "@/shared/lib/cn";

type HeroTone = "light" | "dark";

type HandwriteTitleProps = {
  text: string;
  tone?: HeroTone;
  className?: string;
};

const getViewBoxWidth = (text: string) =>
  Math.max(420, Math.ceil(text.length * 62));

export const HandwriteTitle = ({
  text,
  tone = "light",
  className,
}: HandwriteTitleProps) => {
  const viewBoxWidth = getViewBoxWidth(text);
  const strokeColor =
    tone === "light" ? "rgba(255,255,255,0.96)" : "rgba(46,43,39,0.95)";
  const fillColor = tone === "light" ? "#F6F3EF" : "#2E2B27";
  const shadowColor =
    tone === "light" ? "rgba(0,0,0,0.42)" : "rgba(46,43,39,0.26)";

  return (
    <h1 className={cn("w-[min(92vw,44rem)] md:w-[min(90vw,56rem)]", className)}>
      <span className="sr-only">{text}</span>
      <svg
        className="block w-full h-auto overflow-visible"
        viewBox={`0 0 ${viewBoxWidth} 140`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <text
          className="hero-handwrite-stroke"
          x="2%"
          y="56%"
          textAnchor="start"
          dominantBaseline="middle"
          style={{
            fontFamily: "Fraunces, serif",
            fontSize: 84,
            fontWeight: 500,
            letterSpacing: 0.8,
            fill: "none",
            stroke: strokeColor,
            strokeWidth: 1.7,
            filter: `drop-shadow(0 8px 24px ${shadowColor})`,
          }}
        >
          {text}
        </text>
        <text
          className="hero-handwrite-fill"
          x="2%"
          y="56%"
          textAnchor="start"
          dominantBaseline="middle"
          style={{
            fontFamily: "Fraunces, serif",
            fontSize: 84,
            fontWeight: 500,
            letterSpacing: 0.8,
            fill: fillColor,
            filter: `drop-shadow(0 8px 24px ${shadowColor})`,
          }}
        >
          {text}
        </text>
      </svg>
    </h1>
  );
};
