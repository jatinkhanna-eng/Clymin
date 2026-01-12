import './ProjectSection.css'

export const ProjectSection = () => {
  return (
    <section className="home-one-project-box neew">
      <div className="w-layout-blockcontainer home-one-project-left-section align-center w-container">
        <h2 className="home-one-project-heading text-center">Don't let your competitors get ahead</h2>
        <p className="home-project-paragraph text-center">
          Start your journey with Clymin today and harness the power of real-time data and AI-driven insights!
        </p>
        <a href="/contact-us" className="button-font button-width w-button">
          Contact Us
        </a>
      </div>
      <div className="home-one-project-right-section">
        <img
          src="https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min.png"
          sizes="(max-width: 479px) 100vw, 446px"
          width="446"
          height="400"
          alt="A cell phone with a number of messages on the screen"
          srcSet="https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min-p-500.png 500w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min-p-800.png 800w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min-p-1080.png 1080w, https://cdn.prod.website-files.com/665075d333d845b30969fece/667aad2a7fbf92ade78d1206_665075d333d845b30969ff7f_Project%20Image%202-min.png 1689w"
          className="auto-fit startech-home-one-project-image"
        />
      </div>
    </section>
  )
}

