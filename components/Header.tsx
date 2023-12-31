import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from 'flowbite-react'

type Props = {}

import Image from 'next/image'

const Header = (props: Props) => {
	return (
		<Navbar fluid rounded>
			<NavbarBrand href='https://atomicperu.com'>
				<Image
					className='mr-6 h-[40px] w-[40px] rounded-xl sm:h-[40px] sm:w-[40px]'
					src='/icon.png'
					alt='Atomic Logo'
					width={40}
					height={40}
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Atomic
				</span>
			</NavbarBrand>
			<div className='flex space-x-4 md:order-2'>
				<Button gradientDuoTone='pinkToOrange' size='sm' className='shadow-md'>
					Subscribete
				</Button>
				<NavbarToggle className='shadow-lg' />
			</div>
			<NavbarCollapse>
				<NavbarLink href='#' className='hover:bg-cyan-800 hover:text-white active:bg-cyan-600'>
					Home
				</NavbarLink>
				<NavbarLink href='#' className='hover:bg-cyan-800 hover:text-white active:bg-cyan-600' >About</NavbarLink>
				<NavbarLink href='#' className='hover:bg-cyan-800 hover:text-white active:bg-cyan-600'>Services</NavbarLink>
				<NavbarLink href='#' className='hover:bg-cyan-800 hover:text-white active:bg-cyan-600' >Pricing</NavbarLink>
				<NavbarLink href='#' className='hover:bg-cyan-800 hover:text-white active:bg-cyan-600' >Contact</NavbarLink>
			</NavbarCollapse>
		</Navbar>
	)
}

export default Header
