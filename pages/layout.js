import Head from 'next/head'
import { useState } from 'react';
import Navigation from "../components/navigation";
import { NavigationProvider } from '../components/navigation-context';

export default function Layout({ children }) {
    const [linkState, setLinkState] = useState({home: true, about: false, services: false, careers: false, contact: false});
    const defaultState = {home: false, about: false, services: false, careers: false, contact: false};

    const handleLinkClick = (e) => {
        let clickValue = e.target.name;
        let object = {
            [clickValue]: true,
        }
        const newState = Object.assign(defaultState, object);
        setLinkState(newState);
    }
    return (
      <>
        <Head>
            <title>Cruiseport Destinations</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavigationProvider value={{linkState, handleLinkClick}}>
          <Navigation />
          <main>{children}</main>
        </NavigationProvider>
      </>
    )
  }