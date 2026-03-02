import { ReactNode } from 'react';

type CardProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

export function Card({ title, icon, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        {icon ? <div className="rounded-xl bg-rose-50 p-2 text-primary">{icon}</div> : null}
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
      </div>
      <div className="text-slate-600">{children}</div>
    </article>
  );
}
