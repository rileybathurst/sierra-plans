import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const GuidesPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Guides</h1>

        <section>
          <h2>SVGs</h2>
          <p>SVGs can be edited in any way</p>
          <p>Adobe Illustrator Files are how they have been made in the Sierra LIghting Google Drive</p>
          <p>Compress these before upload, Riley is using ImageOptim</p>
        </section>

        <section>
          <h2>Naming</h2>
          <p>Each job has multiple parts,<br />
            <b>client name</b> - the problem here is many clients have many jobs, can have unusual charachters<br />
            <b>address</b> - problem these are long and can have abbreviations<br />
            <b>jobber number</b> - problem is these can change and have different takedown and fix number<br />
            <b>takdedown day</b> - problem is these change every year
          </p>
          <p>spaces are ok in file names</p>
          <p>hyphens should be between </p>
          <p>capitals, never in abbreviations</p>
          <p>Jobber is the souce of truth as this can be updated more often</p>
          <h3>.ai files - new names should comply to</h3>
          <p>name - address </p>

          <h3>Abbreviations</h3>
          <p>abbreviations as the USPS https://pe.usps.com/text/pub28/28apc_002.htm or wiki https://en.wikipedia.org/wiki/Street_suffix</p>
          <p>Used in</p>
          <ul>
            <li>file names</li>
            <li>slugs</li>
          </ul>
        </section>

        <section>
          <h3>Map Line - buildings driveways etc</h3>
          <svg
            viewBox="0 0 10 2"
            xmlns="http://www.w3.org/2000/svg"
            className="guide"
          >
            <line x1="1" y1="1" x2="9" y2="1" stroke-width="1" stroke="#999" stroke-linecap="round" />
          </svg>

          <h3>Lit Line</h3>
          <svg
            viewBox="0 0 10 2"
            xmlns="http://www.w3.org/2000/svg"
            className="guide"
          >
            <line x1="1" y1="1" x2="9" y2="1" stroke-width="1" stroke="#FF0000" stroke-linecap="round" />
          </svg>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default GuidesPage
