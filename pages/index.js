import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Header />

      <main>
        {/* Welcome Section */}
        <section className="home-section intro-section">
          <div className="sectionBox introBox">
          
          </div>
        </section>

        {/* misc Section */}
        <section className="home-section left">
          <div className="sectionBox">
            
            </div>

            <div className="section-text">
              <h1>Store your comics</h1>
              <h3>
                At ComicHunt, we know that comic collecting is more than just a hobby—it's a passion. Our intuitive database allows you to easily log and manage your entire collection, while also contributing to a growing community of fellow collectors.
              </h3>
              <h3>
                Whether you're tracking individual issues, organizing by series, or tagging storage locations like short and long boxes, ComicHunt is designed to reflect the way you collect in the real world. You can even flag missing issues or curate your own custom groups to keep everything in order.
              </h3>
            </div>
        </section>

          <div>
                      <Footer />
                    </div>
      </main>
    </div>
  );
}