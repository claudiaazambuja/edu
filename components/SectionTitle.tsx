import { ReactNode } from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function SectionTitle({ title, subtitle, children }: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <h2 className="text-2xl font-bold text-ink dark:text-slate-100 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
      {children}
    </div>
  );
}
