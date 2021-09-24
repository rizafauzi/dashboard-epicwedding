import '../styles/globals.scss'
import { Header, Template, Sidebar } from '../components'
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head'
import App from "next/app";

import React from "react";
import { wrapper } from "../store/index";


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
					<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
						integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
						crossorigin="anonymous"
					/>
				</Head>

				<div className="layout">
					<Sidebar></Sidebar>
					{/* <div></div> */}
					<div>
						<Header />
						<Component {...pageProps} />
					</div>
				</div>
      </>
    );
  }
}

export default wrapper.withRedux(MyApp)