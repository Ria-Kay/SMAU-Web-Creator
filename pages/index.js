'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';


// import { openDatabase } from "@/lib/db";
// const db = await openDatabase();
export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <section className="home-section intro-section">
          <div className="sectionBox introBox">
            <h1>Lorem Ipsum</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
        </section>

        <section className="home-section left">
          <div className="sectionBox"></div>

          <div className="section-text">
            <h1>Lorem Ipsum Section</h1>

            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam.
            </h3>

            <h3>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </h3>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
