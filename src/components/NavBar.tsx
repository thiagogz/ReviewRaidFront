import Link from "next/link";

interface NavBarProps {
    active: "categorias" | "noticias" | "tendencias" | "";

}

export default function NavBar(props : NavBarProps) {
    const { active } = props;
    const activeClass = "border-b-4 border-white-600";
    
    return(
        <nav className="flex bg-slate-900 w-full justify-between items-center px-6 py-3">
            <h1 className="text-3xl font-bold"><Link href="/" >Review Raid</Link></h1>
            <ul className="flex gap-20">
                <li className={active == "categorias" ? activeClass : ""}><Link href="/categorias">Categorias</Link></li>
                <li className={active == "noticias" ? activeClass : ""}><Link href="/noticias">Notícias</Link></li>
                <li className={active == "tendencias" ? activeClass : ""}><Link href="/tendencias">Tendências</Link></li>
            </ul>
            <div className="w-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=50" alt="Avatar do usuário" />
            </div>
      </nav>
    )
}