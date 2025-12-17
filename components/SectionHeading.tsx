import { cn } from "@/components/utils";

export function SectionHeading({
  chip,
  title,
  subtitle,
  className
}: {
  chip: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <div className="inline-flex justify-center">
        <span className="chip">{chip}</span>
      </div>
      <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-[rgba(200,215,255,0.92)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 subtle max-w-xl mx-auto text-sm sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
