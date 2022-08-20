import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const NavBar: NextPage = () => {

	return (
		<nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg">
			<div className="navbar bg-opacity-50 bg-base-100" data-theme="night">
				<div className="flex-1">
					<a className="normal-case text-3xl pl-5 text-violet-400" href=".">Laitooo san</a>
				</div>
				<div className="flex-none text-violet-400">
					<ul className="menu menu-horizontal p-0">
						<li>
							<a href='/'>
								Home
							</a>
						</li>
						<li>
							<a href="/projects">
								Projects
							</a>
						</li>
						<li>
							<a href="/cv">
								My CV
							</a>
						</li>
						<li>
							<a href="/about">
								About me
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
