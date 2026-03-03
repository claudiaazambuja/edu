const series = ['1º ano', '2º ano', '3º ano', '4º ano'];

export function SeriesPills() {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Séries atendidas">
      {series.map((serie) => (
        <span
          key={serie}
          className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1 text-sm font-semibold text-primary"
        >
          {serie}
        </span>
      ))}
    </div>
  );
}
