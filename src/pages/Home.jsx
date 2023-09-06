import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-11 d-flex align-items-center justify-content-between">
              <h1 className="logo">
                <NavLink to="index.html">BizPage</NavLink>
              </h1>
              {/* <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <NavLink to="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"/></NavLink>--> */}

              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <NavLink className="nav-link scrollto active" to="#hero">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link scrollto" to="#about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link scrollto" to="#services">
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link scrollto " to="#portfolio">
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link scrollto" to="#team">
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link  " to="blog.html">
                      Blog
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#">
                      <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="#">Drop Down 1</NavLink>
                      </li>
                      <li className="dropdown">
                        <NavLink to="#">
                          <span>Deep Drop Down</span>{" "}
                          <i className="bi bi-chevron-right"></i>
                        </NavLink>
                        <ul>
                          <li>
                            <NavLink to="#">Deep Drop Down 1</NavLink>
                          </li>
                          <li>
                            <NavLink to="#">Deep Drop Down 2</NavLink>
                          </li>
                          <li>
                            <NavLink to="#">Deep Drop Down 3</NavLink>
                          </li>
                          <li>
                            <NavLink to="#">Deep Drop Down 4</NavLink>
                          </li>
                          <li>
                            <NavLink to="#">Deep Drop Down 5</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="#">Drop Down 2</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Drop Down 3</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Drop Down 4</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink className="nav-link scrollto" to="#contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
              {/* <!-- .navbar --> */}
            </div>
          </div>
        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= hero Section ======= --> */}
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <ol id="hero-carousel-indicators" className="carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{backgroundImage: "url(assets/img/hero-carousel/1.jpg)"}}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      We are professional
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <NavLink
                      to="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{backgroundImage: "url(assets/img/hero-carousel/2.jpg)"}}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      At vero eos et accusamus
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est, omnis dolor
                      repellendus. Temporibus autem quibusdam et aut officiis
                      debitis aut.
                    </p>
                    <NavLink
                      to="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{backgroundImage: "url(assets/img/hero-carousel/3.jpg)"}}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Temporibus autem quibusdam
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt omnis iste natus error sit
                      voluptatem accusantium.
                    </p>
                    <NavLink
                      to="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{backgroundImage: "url(assets/img/hero-carousel/4.jpg)"}}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Nam libero tempore
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum.
                    </p>
                    <NavLink
                      to="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{backgroundImage: "url(assets/img/hero-carousel/5.jpg)"}}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Magnam aliquam quaerat
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <NavLink
                      to="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              className="carousel-control-prev"
              to="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </NavLink>

            <NavLink
              className="carousel-control-next"
              to="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </NavLink>
          </div>
        </div>
      </section>
      {/* <!-- End Hero Section --> */}

      <main id="main">
        {/* <!-- ======= Featured Services Section Section ======= --> */}
        <section id="featured-services">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 box">
                <i className="bi bi-briefcase"></i>
                <h4 className="title">
                  <NavLink to="">Lorem Ipsum Delino</NavLink>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div className="col-lg-4 box box-bg">
                <i className="bi bi-card-checklist"></i>
                <h4 className="title">
                  <NavLink to="">Dolor Sitema</NavLink>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>

              <div className="col-lg-4 box">
                <i className="bi bi-binoculars"></i>
                <h4 className="title">
                  <NavLink to="">Sed ut perspiciatis</NavLink>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Featured Services Section --> */}

        {/* <!-- ======= About Us Section ======= --> */}
        <section id="about">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </header>

            <div className="row about-cols">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="about-col">
                  <div className="img">
                    <img
                      src="assets/img/about-mission.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="bi bi-bar-chart"></i>
                    </div>
                  </div>
                  <h2 className="title">
                    <NavLink to="#">Our Mission</NavLink>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="about-col">
                  <div className="img">
                    <img
                      src="assets/img/about-plan.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="bi bi-brightness-high"></i>
                    </div>
                  </div>
                  <h2 className="title">
                    <NavLink to="#">Our Plan</NavLink>
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="about-col">
                  <div className="img">
                    <img
                      src="assets/img/about-vision.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="bi bi-calendar4-week"></i>
                    </div>
                  </div>
                  <h2 className="title">
                    <NavLink to="#">Our Vision</NavLink>
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                    fugit, sed quia magni dolores eos qui ratione voluptatem
                    sequi nesciunt Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Us Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header wow fadeInUp">
              <h3>Services</h3>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus, ad pro quaestio
                laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta
                zanos paradigno tridexa panatarel.
              </p>
            </header>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Lorem Ipsum</NavLink>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="bi bi-card-checklist"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Dolor Sitema</NavLink>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Sed ut perspiciatis</NavLink>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="bi bi-binoculars"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Magni Dolores</NavLink>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="bi bi-brightness-high"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Nemo Enim</NavLink>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Eiusmod Tempor</NavLink>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Call To Action Section ======= --> */}
        <section id="call-to-action">
          <div className="container text-center" data-aos="zoom-in">
            <h3>Call To Action</h3>
            <p>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <NavLink className="cta-btn" to="#">
              Call To Action
            </NavLink>
          </div>
        </section>
        {/* <!-- End Call To Action Section --> */}

        {/* <!-- ======= Skills Section ======= --> */}
        <section id="skills">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Our Skills</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
            </header>

            <div className="skills-content">
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                </div>
              </div>

              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                </div>
              </div>

              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                </div>
              </div>

              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="skill">
                    Photoshop <i className="val">55%</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Skills Section --> */}

        {/* <!-- ======= Facts Section ======= --> */}
        <section id="facts">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Facts</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </header>

            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="421"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1364"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="38"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hard Workers</p>
              </div>
            </div>

            <div className="facts-img">
              <img src="assets/img/facts-img.png" alt="" className="img-fluid" />
            </div>
          </div>
        </section>
        {/* <!-- End Facts Section --> */}

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="section-bg">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3 className="section-title">Our Portfolio</h3>
            </header>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className=" col-lg-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/app1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <NavLink
                      to="assets/img/portfolio/app1.jpg"
                      data-lightbox="portfolio"
                      data-title="App 1"
                      className="link-preview"
                    >
                      <i className="bi bi-plus"></i>
                    </NavLink>
                    <NavLink
                      to="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </NavLink>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <NavLink to="portfolio-details.html">App 1</NavLink>
                    </h4>
                    <p>App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/web3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <NavLink
                      to="assets/img/portfolio/web3.jpg"
                      className="link-preview portfolio-lightbox"
                      data-gallery="portfolioGallery"
                      title="Web 3"
                    >
                      <i className="bi bi-plus"></i>
                    </NavLink>
                    <NavLink
                      to="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </NavLink>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <NavLink to="portfolio-details.html">Web 3</NavLink>
                    </h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/app2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <NavLink
                      to="assets/img/portfolio/app2.jpg"
                      className="link-preview portfolio-lightbox"
                      data-gallery="portfolioGallery"
                      title="App 2"
                    >
                      <i className="bi bi-plus"></i>
                    </NavLink>
                    <NavLink
                      to="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </NavLink>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <NavLink to="portfolio-details.html">App 2</NavLink>
                    </h4>
                    <p>App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/card2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <NavLink
                      to="assets/img/portfolio/card2.jpg"
                      className="link-preview portfolio-lightbox"
                      data-gallery="portfolioGallery"
                      title="Card 2"
                    >
                      <i className="bi bi-plus"></i>
                    </NavLink>
                    <NavLink
                      to="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </NavLink>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <NavLink to="portfolio-details.html">Card 2</NavLink>
                    </h4>
                    <p>Card</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/web2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <NavLink
                      to="assets/img/portfolio/web2.jpg"
                      className="link-preview portfolio-lightbox"
                      data-gallery="portfolioGallery"
                      title="Web 2"
                    >
                      <i className="bi bi-plus"></i>
                    </NavLink>
                    <NavLink
                      to="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </NavLink>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <NavLink to="portfolio-details.html">Web 2</NavLink>
                    </h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/app3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <NavLink
                      to="assets/img/portfolio/app3.jpg"
                      className="link-preview portfolio-lightbox"
                      data-gallery="portfolioGallery"
                      title="App 3"
                    >
                      <i className="bi bi-plus"></i>
                    </NavLink>
                    <NavLink
                      to="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </NavLink>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <NavLink to="portfolio-details.html">App 3</NavLink>
                    </h4>
                    <p>App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/card1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <NavLink
                      to="assets/img/portfolio/card1.jpg"
                      className="link-preview portfolio-lightbox"
                      data-gallery="portfolioGallery"
                      title="Card 1"
                    >
                      <i className="bi bi-plus"></i>
                    </NavLink>
                    <NavLink
                      to="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </NavLink>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <NavLink to="portfolio-details.html">Card 1</NavLink>
                    </h4>
                    <p>Card</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/card3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <NavLink
                      to="assets/img/portfolio/card3.jpg"
                      className="link-preview portfolio-lightbox"
                      data-gallery="portfolioGallery"
                      title="Card 3"
                    >
                      <i className="bi bi-plus"></i>
                    </NavLink>
                    <NavLink
                      to="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </NavLink>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <NavLink to="portfolio-details.html">Card 3</NavLink>
                    </h4>
                    <p>Card</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/web1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <NavLink
                      to="assets/img/portfolio/web1.jpg"
                      className="link-preview portfolio-lightbox"
                      data-gallery="portfolioGallery"
                      title="Web 1"
                    >
                      <i className="bi bi-plus"></i>
                    </NavLink>
                    <NavLink
                      to="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </NavLink>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <NavLink to="portfolio-details.html">Web 1</NavLink>
                    </h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Our Clients Section ======= --> */}
        <section id="clients">
          <div className="container" data-aos="zoom-in">
            <header className="section-header">
              <h3>Our Clients</h3>
            </header>

            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-8.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- End Our Clients Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="section-bg">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <img
                        src="assets/img/quote-sign-left.png"
                        className="quote-sign-left"
                        alt=""
                      />
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <img
                        src="assets/img/quote-sign-right.png"
                        className="quote-sign-right"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <img
                        src="assets/img/quote-sign-left.png"
                        className="quote-sign-left"
                        alt=""
                      />
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <img
                        src="assets/img/quote-sign-right.png"
                        className="quote-sign-right"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <img
                        src="assets/img/quote-sign-left.png"
                        className="quote-sign-left"
                        alt=""
                      />
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <img
                        src="assets/img/quote-sign-right.png"
                        className="quote-sign-right"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <img
                        src="assets/img/quote-sign-left.png"
                        className="quote-sign-left"
                        alt=""
                      />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <img
                        src="assets/img/quote-sign-right.png"
                        className="quote-sign-right"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonial-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <img
                        src="assets/img/quote-sign-left.png"
                        className="quote-sign-left"
                        alt=""
                      />
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <img
                        src="assets/img/quote-sign-right.png"
                        className="quote-sign-right"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3>Team</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <img src="assets/img/team-1.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <NavLink to="">
                          <i className="bi bi-twitter"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-facebook"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-instagram"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-linkedin"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <img src="assets/img/team-2.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <NavLink to="">
                          <i className="bi bi-twitter"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-facebook"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-instagram"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-linkedin"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <img src="assets/img/team-3.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <NavLink to="">
                          <i className="bi bi-twitter"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-facebook"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-instagram"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-linkedin"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                  <img src="assets/img/team-4.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <NavLink to="">
                          <i className="bi bi-twitter"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-facebook"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-instagram"></i>
                        </NavLink>
                        <NavLink to="">
                          <i className="bi bi-linkedin"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3>Contact Us</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>

            <div className="row contact-info">
              <div className="col-md-4">
                <div className="contact-address">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <address>A108 Adam Street, NY 535022, USA</address>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="bi bi-phone"></i>
                  <h3>Phone Number</h3>
                  <p>
                    <NavLink to="tel:+155895548855">+1 5589 55488 55</NavLink>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-email">
                  <i className="bi bi-envelope"></i>
                  <h3>Email</h3>
                  <p>
                    <NavLink to="mailto:info@example.com">info@example.com</NavLink>
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="form">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div> */}
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default Home;