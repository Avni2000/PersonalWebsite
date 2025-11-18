import { Link } from "react-router-dom";
import './resume.css';
import type { ReactNode } from "react";
import { getAssetPath } from "./utils";

const FloatRight = ({ children }: { children: ReactNode }) => (
  <span style={{ float: "right" }}>{children}</span>
)
function Resume() {
  return (
    <div className="resume-content">
      <div
        className="banner"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: 18,
          fontWeight: 500,
          transition: "opacity 0.2s"
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          ← Back to Home
        </Link>
        <a
          href={getAssetPath("resume/Avni-Badiwale.pdf")}
          download=""
          className="download-btn"
        >
          <b>↓ Download PDF</b>
        </a>
      </div>
      <div className="center" style={{ textAlign: "center" }}>
        <p>
          <span className="name-text">
            <strong>Avni Badiwale</strong>
          </span>
          <br />
          Madison, WI | U.S. Citizen | (425) 414<span>-</span>4760 |{" "}
          <a href="mailto:avnibadiwale@gmail.com">avnibadiwale@gmail.com</a> |{" "}
          <a href="https://www.linkedin.com/in/avni-badiwale">LinkedIn</a> |{" "}
          <a href="https://github.com/Avni2000">GitHub</a>
        </p>
      </div>
      <hr />
      <h1 className="unnumbered" id="education">
        Education
      </h1>
      <p>
        <strong>
          University of Wisconsin <span>-</span> Madison
        </strong>
        <FloatRight>Madison, Wisconsin</FloatRight>
        <br />
        Bachelor of Science in Computer Science &amp; Mathematics{" "}
        <FloatRight><em>
          Sep 2024
          <span>-</span> May 2027
        </em></FloatRight>
      </p>
      <hr />
      <h1 className="unnumbered" id="work-experience">
        Work Experience
      </h1>
      <p>
        <strong>Epic Systems</strong> <FloatRight>Verona, Wisconsin</FloatRight>
        <br />
        <em>CaTS Software Development Intern</em>{" "}
        <FloatRight><em>
          May 2025 <span>-</span>
          Present
        </em></FloatRight>
      </p>
      <ul>
        <li>
          <p>
            Singlehandedly built an interactive, campus<span>-</span>wide webmap
            published on the employee homepage with an October 28th launch,
            expected to be regularly used by more than 15K employees.
          </p>
        </li>
        <li>
          <p>
            Facilitated cross<span>-</span>team collaboration between Facilities,
            who provided the map data, and Internal Projects, who designed the
            site.
          </p>
        </li>
        <li>
          <p>
            Utilized ArcGIS SDK for JS with a React front<span>-</span>end and C#
            backend for SQL logic with universal room search.
          </p>
        </li>
        <li>
          <p>
            Led a migration from Webpack 4 to Vite/Esbuild to fix ArcGIS
            dependency resolution <span>-</span> its deprecated toolchain was
            incompatible with ArcGIS’s modern packages <span>-</span> unblocking
            the map integration, and reducing build times.
          </p>
        </li>
      </ul>
      <p>
        <strong>Google Summer of Code at OpenMS</strong> <FloatRight>Remote (based in Germany)</FloatRight>
        <br />
        <em>
          Open Source Software Development Intern{" "} <a href="https://gist.github.com/Avni2000/c6290cf500b5a87ee22b12ab8daa1dd0">
            Project
          </a>
        </em>{" "}
        <FloatRight><em>
          May 2025 <span>-</span> September 2025
        </em></FloatRight>
      </p>
      <ul>
        <li>
          <p>
            Integrated Apache Arrow into OpenMS by authoring a cross<span>-</span>
            platform CMake build macro automating source extraction, compilation,
            and installation on Windows, Linux, and macOS.
          </p>
        </li>
        <li>
          <p>
            Enhanced OpenMS CI/CD pipelines (GitHub Actions, Docker, Bioconda) to
            manage new Arrow dependencies and ensure reproducible builds and
            tests.
          </p>
        </li>
        <li>
          <p>
            Designed and implemented a lossless, low<span>-</span>latency mzML
            <span>-</span>to<span>-</span>Parquet converter in C++, extending
            OpenMS capabilities to support columnar storage and full metadata
            preservation.
          </p>
        </li>
      </ul>
      <p>
        <strong>
          Smith Research Group at UW<span>-</span>Madison
        </strong>{" "}
        <FloatRight>Madison, Wisconsin</FloatRight>
        <br />
        <em>Software Developer and Computational Proteomics Researcher</em>{" "}
        <FloatRight><em>
          February 2025 <span>-</span> Present
        </em></FloatRight>
      </p>
      <ul>
        <li>
          <p>
            Researched and prototyped novel positional encoding algorithms for
            mass spectrometry data to enhance protein identification accuracy in
            deep learning models.
          </p>
        </li>
        <li>
          <p>
            Authored comprehensive Jupyter Notebook tutorials documenting mass
            spectra encoding methods for machine learning, streamlining onboarding
            for future lab members.
          </p>
        </li>
        <li>
          <p>
            Produced educational Manim animations providing geometric
            interpretations of complex embedding techniques, making proteomics ML
            concepts more accessible.
          </p>
        </li>
      </ul>
      <hr />
      <h1 className="unnumbered" id="personal-projects">
        Personal Projects
      </h1>
      <p>
        <strong>mzML to Parquet Converter</strong> (CLI Tool for Big Data
        Experiments) <FloatRight><a href="https://github.com/Avni2000/pyquetms">PyquetMS</a>|{" "}
        <a href="https://pypi.org/project/PyquetMS/">Published</a></FloatRight>
        <br />
        <em>Quickstart:</em> <code>pip install pyquetms</code>
      </p>
      <ul>
        <li>
          <p>
            Efficient conversion pipeline that converts mzML to Apache Parquet to
            shrink storage, speed up I/O, and enable fast columnar queries with
            libraries like Spark, Dask, and pandas.
          </p>
        </li>
        <li>
          <p>
            Designed to unlock large<span>-</span>scale meta<span>-</span>analysis
            and ML on the vast public mzML corpus by standardizing schema/metadata
            and supporting batch processing.
          </p>
        </li>
      </ul>
      <p>
        <strong>StockFetch</strong> (Aesthetic Command Line Stock Analysis Tool){" "}
        <FloatRight>
        <a href="https://github.com/Avni2000/StockFetch">Stockfetch</a> |
        <a href="https://pypi.org/project/stockfetch">Published</a>
        </FloatRight>
        <br />
        
        <em>Quickstart:</em> <code>pip install stockfetch</code>
        
      </p>
      <ul>
        <li>
          <p>
            Cross<span>-</span>platform stock fetching utility, shipped with
            intricate ASCII/ANSI rendering of all NYSE<span>-</span>traded stocks.
          </p>
        </li>
      </ul>
      <hr />
      <h1 className="unnumbered" id="extracurricular-activities">
        Extracurricular Activities
      </h1>
      <ul>
        <li>
          <p>
            <strong>NumFOCUS AI in Science Sprint</strong> <span>-</span>
            Participated in a weekly conference with experts, exploring ethical
            applications of AI to advance bioinformatics subfields.
          </p>
        </li>
        <li>
          <p>
            <strong>Model UN</strong> <span>-</span> Member of the WiscoMUN
            traveling team with experience competing in prior conferences at
            Harvard and Georgetown. Vice Chair at WHSMUN, our high school
            conference.
          </p>
        </li>
        <li>
          <p>
            <strong>Capital One Tech Summit</strong> <span>-</span> 30 students
            selected, engaged in technical workshops with a fintech hackathon.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Resume;