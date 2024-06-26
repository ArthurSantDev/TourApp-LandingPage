import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white rounded-b-lg">
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={80} height={40} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="font-medium text-gray-400 flexCenter cursor-pointer pb-1.5 transition-all hover:text-black">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={28}
        height={28}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
    </div>
  )
}

export default Navbar