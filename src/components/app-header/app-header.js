import Image from "next/image"
import UserSelect from "@/components/user-select"
import MenuBurger from "@/components/menu-burger"

function AppHeader() {
  return (
    <header className="w-[100dvw] max-w-[1526px] px-4 h-fit py-6 flex justify-between">
      <Image priority src="/logo.svg" width="0" height="0" className='max-w-[180px] w-[37.5vw] aspect-[9/2]' alt=""/>
      <div className="w-32 h-10 flex gap-2 align-middle">
          <UserSelect avatar='/avatar-24.png' />
          <MenuBurger />
      </div>
    </header>
  )
}

export default AppHeader