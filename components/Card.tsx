import { ReactNode } from 'react';

type CardProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

export function Card({ title, icon, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/95 dark:shadow-slate-950/30">
      <div className="mb-3 flex items-center gap-3">
        {icon ? <div className="rounded-xl bg-rose-50 p-2 text-primary dark:bg-slate-700/80">{icon}</div> : null}
        <h3 className="text-xl font-semibold text-ink dark:text-slate-100">{title}</h3>
      </div>
      <div className="text-slate-600 dark:text-slate-300">{children}</div>
    </article>
  );
}
