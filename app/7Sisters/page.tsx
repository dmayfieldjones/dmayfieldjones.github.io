import './index.css'

export default function () {
  return (
    <div className="content">
      <div className="post-title ">
        <h1>Great Danes at 7Sisters Farm</h1>
      </div>
      <main className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <img
            src="/img/Colorlogo_nobackground.png"
            alt="7Sisters Farm Logo"
            width={300}
            height="auto"
            className="hero-logo"
            loading="lazy"
          />
        </section>
        
        {/* Featured Image */}
        <section className="featured-image">
          <img
            src="/img/2021_5pt_BOW_BOBOH_Waukesha_Mimi_Kim.jpg"
            alt="2021 Lake Shore GDC Best of Winners and Best of Breed Owner Handled"
            className="full-width-image"
            loading="lazy"
          />
        </section>
        {/* Introduction Section */}
        <section className="intro-section">
          <p className="emphasis">
            Our Great Danes are family members. They are sacred. Great Danes are
            not for everyone. Choosing a breeder you can trust is critical.
          </p>
        </section>
        {/* Family Section */}
        <section className="family-section">
          <h2 className="section-title">
            <span className="accent-color">Family</span>
          </h2>
          <p>
            With a Great Dane from <span className="accent-color">7</span>
            Sisters in your family, you are invited to be part of ours. We
            expect to hear from you long after you bring your dog home. We love
            updates and look forward to seeing our family grow: birthdays,
            anniversaries, achievements, and losses. We hope you consider a
            Great Dane from <span className="accent-color">7</span>Sisters as
            your family member.
          </p>
          <p>
            Feel free to contact either of us, Karen or Dustin, if you are
            interested in our dogs. Living with your new family member helps
            continue a line of Great Danes that can be traced over 35
            generations to the 1870s. Thank you for your interest in preserving
            our breed.
          </p>
        </section>
        {/* History Section */}
        <section className="history-section">
          <h2 className="section-title">
            <span className="accent-color">Our Ancient Bond</span>
          </h2>
          <p>
            One reason we love dogs is because they tell us something profound
            about ourselves. Dogs are by far the oldest and most widespread
            species domesticated by humans. Darwin used dogs, among pigeons and
            Brassicas, to bridge the gap between artificial selection and
            natural selection in his 1859 publication
            <cite>The Origin of Species</cite>.
          </p>
          <p>
            Early scientists focused more on artificial selection of livestock
            and crops, but it was in fact our beloved dog companions that were
            domesticated millenia before any other known species. Unlike these
            others, dogs reside in our homes and live up to the name
            domesticate, coming from the Latin domicile, meaning home. Also,
            unlike other domesticates, dogs chose us. The bond between dogs and
            humans is unique.
          </p>
          <p>
            Both highly social group hunters, humans and dogs likely began to
            co-evolve as hunting partners. While there are no anatomical markers
            to differentiate dogs from wolves, dogs' definitive trait is
            behavioral: loyalty. Wolves and dogs descended from a wolf-like
            common ancestor 20,000-40,000 years ago. The earliest archaeological
            evidence suggests dogs had a special place in our hearts by ~14,000
            years ago when a Nautifian woman was buried alongside a dog. Our
            relationship is ancient and deep.
          </p>
        </section>
        {/* Social Media Section */}
        <section className="social-media-section">
          <div className="text-center">
            <p>
              <span className="text-red-600">7</span>Sisters Social Media
            </p>
            <iframe
              src="https://www.tiktok.com/embed/@7sistersgreatdanes"
              className="w-full max-w-md mx-auto"
              height="458"
              title="7 Sisters Great Danes TikTok"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
