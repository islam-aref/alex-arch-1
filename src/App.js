import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const photos = [
    { src: "/assets/photo1.png", caption: "Historical Photo" },
    { src: "/assets/photo2.png", caption: "Posters & Announcements" },
    { src: "/assets/photo3.png", caption: "Students' Projects" },
    { src: "/assets/photo4.png", caption: "Department Front" },
    { src: "/assets/photo5.png", caption: "Lecture Hall 1" },
    { src: "/assets/photo6.png", caption: "Lecture Hall 2" },
    { src: "/assets/photo7.png", caption: "Grad students hall" },
    { src: "/assets/photo8.png", caption: "Chairman of Department" },
    { src: "/assets/photo9.png", caption: "Professors' Office" },
    { src: "/assets/photo10.png", caption: "Control" },
    { src: "/assets/photo11.png", caption: "WC" },
    { src: "/assets/photo12.png", caption: "Farsi Hall" },
    { src: "/assets/photo13.png", caption: "Farsi Hall" },
    { src: "/assets/photo14.png", caption: "Farsi Hall Wall Art" },
    { src: "/assets/photo15.png", caption: "First Year Studio" },
    { src: "/assets/photo16.png", caption: "Second Year Studio" },
    { src: "/assets/photo17.png", caption: "Second Year Studio" },
    { src: "/assets/photo18.png", caption: "Projects Exhibition" },
    { src: "/assets/photo19.png", caption: "Projects Exhibition" },
    { src: "/assets/photo20.png", caption: "Projects Exhibition" },
  ];

  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const scrollGallery = (direction) => {
    if (isAutoScrolling) return;

    const container = galleryRef.current;
    const scrollAmount = 300;
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + photos.length) % photos.length
        : (currentIndex + 1) % photos.length;

    setCurrentIndex(newIndex);

    if (direction === "left" && currentIndex === 0) {
      container.scrollLeft = container.scrollWidth;
      setTimeout(() => {
        container.scrollLeft -= scrollAmount;
      }, 50);
    } else if (direction === "right" && currentIndex === photos.length - 1) {
      container.scrollLeft = 0;
      setTimeout(() => {
        container.scrollLeft += scrollAmount;
      }, 50);
    } else {
      container.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  useEffect(() => {
    const container = galleryRef.current;
    const autoScroll = setInterval(() => {
      if (!isAutoScrolling) {
        setIsAutoScrolling(true);
        scrollGallery("right");
        setTimeout(() => setIsAutoScrolling(false), 1000);
      }
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  return (
    <div className="App">
      {/* NavBar */}
      <nav className="navbar">
        <div className="navbar-section">
          <p className="navbar-text">Alexandria University</p>
        </div>
        <div className="navbar-section">
          <a
            href="https://alexu.edu.eg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/logo1.png"
              alt="Alexandria University"
              className="logo"
            />
          </a>
        </div>
        <div className="navbar-section">
          <a
            href="https://eng.alexu.edu.eg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/logo2.png"
              alt="Engineering Faculty"
              className="logo"
            />
          </a>
        </div>
        <div className="navbar-section">
          <p className="navbar-text">
            Faculty of Engineering
            <br /> <br /> <br />
            Department of Architecture
          </p>
        </div>
      </nav>

      {/* About Section - Updated */}
      <section className="about">
        <div className="about-content">
          <div className="about-header">
            <div className="decorative-line"></div>
            <h2>About The Department</h2>
          </div>
          <p>
            Department of architecture at faculty of Engineering, Alexandria
            University is one of the oldest architecture programs in Egypt. The
            department combines creative design with technical knowledge to
            prepare students for the challenges of the labor market. Through
            certain curriculums that include Design Studios, Theoretical
            Courses, and Technical Workshops, the department aims to develop
            students’ abilities in both scientific understanding and artistic
            expression. It also emphasizes critical thinking, environmental
            awareness and innovation. This document will show the department’s
            history, academic structure, teaching approach, and its role in
            shaping future architects.
          </p>
        </div>
        <div className="about-dark-overlay"></div>
        <div
          className="about-bg"
          style={{ backgroundImage: "url(/assets/about-bg.png)" }}
        ></div>
      </section>

      {/* Vision and Mission - Clean Boxes */}
      <section className="vision-mission-boxes">
        <div className="boxes-container">
          <div className="vision-box">
            <h2>Our Vision</h2>
            <div className="divider"></div>
            <p>
              To be a leading faculty of engineering in the Middle East and
              Africa in education, research, and community service through
              excellent faculty and programs attuned to our desert and marine
              environments.
            </p>
          </div>

          <div className="mission-box">
            <h2>Our Mission</h2>
            <div className="divider"></div>
            <p>
              To graduate innovative engineering professionals through quality
              education and research that meets local and global needs while
              promoting knowledge exchange and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="gallery-container">
        <h2 className="gallery-title">Facilities</h2>
        <div className="gallery-carousel">
          <button
            className="carousel-button left"
            onClick={() => scrollGallery("left")}
          >
            &lt;
          </button>

          <div className="gallery" ref={galleryRef}>
            {photos.map((photo, index) => (
              <div className="gallery-item" key={index}>
                <img src={photo.src} alt={`Gallery ${index + 1}`} />
                <p className="caption">{photo.caption}</p>
              </div>
            ))}
          </div>

          <button
            className="carousel-button right"
            onClick={() => scrollGallery("right")}
          >
            &gt;
          </button>
        </div>
      </section>


      <section className="videos">
        <div className="video-container">
          <h3>Discover our facilities</h3>
          <h3>   ____   </h3>
          <iframe
            src="https://drive.google.com/file/d/1Sgm8R_dVJ_bCnOQ_X4Mmi9SYwGykkPKW/preview"
            title="Our Story"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <h3>Meet the minds</h3>
          <h3>Behind Our Success</h3>
          <iframe
            src="https://drive.google.com/file/d/129UOId-sjdCmDT7bF0CXrV1yd9zITMv1/preview"
            title="Student Experiences"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h4>Contact Us</h4>
        <p>Email: eng.admin@alexu.edu.eg</p>
        <p>Phone: 5910052 (203 )</p>
        <p>Address: Lotfy Al-Sayed St., El-shatbi, Bab Sharq</p>
        <div className="social-links">
          <a href="www.facebook.com/Eng.AlexU.Edu.Eg.Ar/#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://x.com/Eng_AlexU_Edu#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
