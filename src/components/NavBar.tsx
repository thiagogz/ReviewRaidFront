import Link from "next/link";

export default function NavBar() {
    return(
        <nav className="flex bg-slate-900 w-full justify-between items-center px-6 py-3">
            <h1 className="text-3xl font-bold">Review Raid</h1>
            <ul className="flex gap-6">
                <li><Link href="/">Categorias</Link></li>
                <li><Link href="/noticias">Notícias</Link></li>
                <li><Link href="/tendencias">Tendências</Link></li>
            </ul>
            <div className="w-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=50" alt="Avatar do usuário" />
            </div>
      </nav>
    )
}