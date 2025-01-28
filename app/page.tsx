"use client";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Works from "./components/Works";
import Strength from "./components/Strength";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <div id="top" className="pt-16">
        <Profile />
        <Works />
        <Strength />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
}
