import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-ink">Ops! Página não encontrada.</h1>
      <p className="mt-4 text-slate-600">Talvez ela tenha mudado de lugar. Vamos voltar para a página inicial?</p>
      <Link href="/" className="mt-8 rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-blue-700">
        Ir para Home
      </Link>
    </div>
  );
}
