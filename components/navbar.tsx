import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const NavBar: NextPage = () => {

	return (
		<div className="sticky top-0 z-10">
			<div className="backdrop-filter backdrop-blur-lg hidden lg:flex bg-white/[.1]">
				<div className="navbar bg-opacity-50">
					<div className="flex-1">
						<Link href=".">
							<p className="btn btn-ghost normal-case text-3xl pl-5 text-violet-400" >Laitooo san</p>
						</Link>
					</div>
					<div className="flex-none text-violet-400">
						<ul className="menu menu-horizontal p-0">
							<li className="ml-2">
								<Link href='/'>
									Home
								</Link>
							</li>
							<li className="ml-2">
								<Link href="/projects">
									Projects
								</Link>
							</li>
							<li className="ml-2">
								<Link href="/publications">
									Publications
								</Link>
							</li>
							<li className="ml-2">
								<Link href="/cv">
									My CV
								</Link>
							</li>
							<li className="ml-2">
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
					<label tabIndex={0} className="lg:hidden">
						<img src="/icons/drawer.svg" className="btn btn-ghost w-14 h-14" alt="Drawer"></img>
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
							<Link href="/publications">
									Publications
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
				<Link href=".">
					<p className="btn btn-ghost normal-case text-3xl pl-5 text-violet-400" >Laitooo san</p>
				</Link>
			</div>
		</div>
	)
}

export default NavBar