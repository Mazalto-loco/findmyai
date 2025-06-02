export default function Header() {
  return (
    <header className="w-full flex items-center justify-center px-10 py-4 bg-white shadow-sm">
      <img src="/logo.png" alt="FindMyAI Logo" className="h-8 hover:cursor-pointer mr-10  " />
      <nav className="flex gap-6">
        <a className="text-gray-700 hover:text-indigo-600 font-medium" href="/">Accueil</a>
        <a className="text-gray-700 hover:text-indigo-600 font-medium" href="#categories">Catégories</a>
        <a className="text-gray-700 hover:text-indigo-600 font-medium" href="#tools">Outils</a>
        {/* Ajoute ici d'autres liens plus tard */}
      </nav>
    </header>
  );
}