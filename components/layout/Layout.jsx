import Head from "next/head";
import React from "react";
import Footer from "../footer/Footer";
import Hero from "../Hero";
import Navbar from "../navigation/Navbar";

export default function Layout({ children, title, metaContent, image="img/1.jpeg" }) {
	return (
		<>
		<Head>
			<title>{title}Portfolio Riad, Développeur web Fullstack</title>
			<meta name='description' content={metaContent} />
			<meta property="og:title" content='{title}'/>
			<meta property="og:description" content='{metaContent}' />
			<meta property="og:image" content="{image}" />
			{/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
		</Head>
		<div className='flex flex-col min-h-screen bg-yellow-400s'>
			{/* <Navbar /> */}
			<Hero />
			<main className='flex-grow py-10'>{children}</main>
			<Footer />
		</div>
		</>
	);
}
