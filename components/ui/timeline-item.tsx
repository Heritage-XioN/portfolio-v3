interface TimelineItemProps {
  title: string;
  company: string;
  flag: string;
  location: string;
  type: string;
  dateRange: string;
  bullets: string[];
}

export function TimelineItem({
  title,
  company,
  flag,
  location,
  type,
  dateRange,
  bullets,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-amber-500" />

      {/* Content */}
      <div>
        <h3 className="text-base font-bold text-white">{title}</h3>

        <p className="mt-1 text-sm text-slate-400">
          {company}{" "}
          <span className="mx-1 text-slate-600">•</span>{" "}
          <span>{flag}</span>{" "}
          {location}{" "}
          <span className="mx-1 text-slate-600">•</span>{" "}
          {type}
        </p>

        <p className="mt-0.5 text-sm text-amber-500/80">{dateRange}</p>

        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-400">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 text-slate-600">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
