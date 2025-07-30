import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
	<header className='w-full h-15 flex items-center justify-between px-2 -font-poppins'>
		<Link href={"/"}>
			<div className='w-10 h-10 bg-amber-100 flex items-center justify-center rounded-[5px] text-2xl font-semibold'>
				<p>B.</p>
			</div>
		</Link>
	</header>
  )
}

export default Navbar
