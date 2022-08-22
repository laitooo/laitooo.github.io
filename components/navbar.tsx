import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const NavBar: NextPage = () => {

	return (
		<div className="sticky top-0 z-10">
			<div className="backdrop-filter backdrop-blur-lg hidden lg:flex">
				<div className="navbar bg-opacity-50">
					<div className="flex-1">
						<Link className="normal-case text-3xl pl-5 text-violet-400" href=".">Laitooo san</Link>
					</div>
					<div className="flex-none text-violet-400">
						<ul className="menu menu-horizontal p-0">
							<li>
								<Link href='/'>
									Home
								</Link>
							</li>
							<li>
								<Link href="/projects">
									Projects
								</Link>
							</li>
							<li>
								<Link href="/cv">
									My CV
								</Link>
							</li>
							<li>
								<Link href="/about">
									About me
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="navbar bg-opacity-50 backdrop-filter backdrop-blur-lg lg:hidden">
				<div className="dropdown">
					<label tabIndex={0} className="btn lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<Link href='/'>
								Home
							</Link>
						</li>
						<li>
							<Link href="/projects">
								Projects
							</Link>
						</li>
						<li>
							<Link href="/cv">
								My CV
							</Link>
						</li>
						<li>
							<Link href="/about">
								About me
							</Link>
						</li>
					</ul>
				</div>
				<Link className="normal-case text-3xl pl-5 text-violet-400 lg:hidden" href=".">Laitooo san</Link>

			</div>
		</div>
	)
}

export default NavBar

// <div class="navbar bg-base-100">
//   <div class="navbar-start">
//     <div class="dropdown">
//       <label tabindex="0" class="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </label>

//       <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//         <li><a>Item 1</a></li>
//         <li tabindex="0">
//           <a class="justify-between">
//             Parent
//             <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
//           </a>
//           <ul class="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>

//     </div>

//     <a class="btn btn-ghost normal-case text-xl">daisyUI</a>

//   </div>

//   <div class="navbar-center hidden lg:flex">
//     <ul class="menu menu-horizontal p-0">
//       <li><a>Item 1</a></li>
//       <li tabindex="0">
//         <a>
//           Parent
//           <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
//         </a>
//         <ul class="p-2">
//           <li><a>Submenu 1</a></li>
//           <li><a>Submenu 2</a></li>
//         </ul>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>

//   </div>

//   <div class="navbar-end">
//     <a class="btn">Get started</a>
//   </div>

// </div>