type TestimonialCardProps = {
  name: string;
  grade: string;
  text: string;
};

export function TestimonialCard({ name, grade, text }: TestimonialCardProps) {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <blockquote className="text-slate-700">“{text}”</blockquote>
      <figcaption className="mt-4 text-sm font-medium text-slate-500">
        {name} • {grade}
      </figcaption>
    </figure>
  );
}
