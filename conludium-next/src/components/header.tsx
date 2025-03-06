import '@/globals.css'

export default function Header() {
    return (
        <nav className="text-center">
            <ul className="">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
  }