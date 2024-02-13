import "./App.css";
import { Badge, Col, Container, List, Row } from "reactstrap";
import {
  Linkedin,
  GeoAltFill,
  PersonFill,
  Fire,
  BriefcaseFill,
  FolderFill,
  Bullseye,
  Tools,
  People,
  Link45deg,
} from "react-bootstrap-icons";
import profilePic from "./profile-pic.jpeg";

function App() {
  return (
    <div className="App">
      <Container>
        <Row xs="1" sm="1" md="2">
          <Col className="bg-light py-4">
            <section className="text-center">
              <h1
                style={{
                  fontSize: "1.8rem",
                }}
              >
                Sweeta Rebero
              </h1>
              <p>Senior frontend developer</p>
              <div>
                <img
                  width="50%"
                  height="50%"
                  className="my-3"
                  alt="profile of sweeta rebero"
                  src={profilePic}
                />
              </div>
              <div>
                <GeoAltFill />
                <a
                  href="https://www.google.com/maps/place/Sydney+NSW"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sydney(Australian citizen)
                </a>{" "}
                <Linkedin />{" "}
                <a
                  href="https://www.linkedin.com/in/sweetarebero/"
                  target="_blank"
                  rel="noreferrer"
                >
                  sweetarebero
                  <Link45deg
                    style={{
                      verticalAlign: "text-bottom",
                    }}
                  />
                </a>
              </div>
            </section>
            <section className="my-4">
              <h2
                className="text-center py-1"
                style={{
                  fontSize: "1rem",
                  borderTop: "1px solid #000",
                  borderBottom: "1px solid #000",
                }}
              >
                <PersonFill
                  style={{
                    verticalAlign: "text-bottom",
                  }}
                />{" "}
                Profile
              </h2>
              <p>
                I am passionate about frontend technology, love crafting great
                products that solve problems for somebody, simple enough for
                anyone to use and accessible to everyone.
              </p>
              <p>
                <strong>
                  I care about making the customers happy, well written test
                  cases, team work and code quality.
                </strong>
              </p>
            </section>
            <section className="my-4">
              <h2
                className="text-center py-1"
                style={{
                  fontSize: "1rem",
                  borderTop: "1px solid #000",
                  borderBottom: "1px solid #000",
                }}
              >
                <Fire
                  style={{
                    verticalAlign: "text-top",
                  }}
                />{" "}
                Skills
              </h2>
              <p>
                <b>React</b>, React hooks, React Context, Redux(RTK),
                <b>Typescript</b>, Graphql, Styled Components, SASS/LESS,
                Material UI, GIT
              </p>
              <p>
                Jest, <b>React testing library</b>, Cypress, BDD/TDD
              </p>
              <p>Github, Bitbucket, Jira, Confluence</p>
              <p>Responsive websites, Accessibility</p>
              <p>
                Well versed with <b>Agile</b> methodologies
              </p>
              <p>
                <b>Authored Medium Blogs:</b>{" "}
                <a
                  href="https://medium.com/prospa-engineering/web-accessibility-5a423abb80a4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web accessibility
                  <Link45deg
                    style={{
                      verticalAlign: "text-bottom",
                    }}
                  />
                </a>
                ,{" "}
                <a
                  href="https://medium.com/prospa-engineering/why-mobile-first-8141d8103443"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mobile first
                  <Link45deg
                    style={{
                      verticalAlign: "text-bottom",
                    }}
                  />
                </a>
              </p>
            </section>
            <section className="my-4">
              <h2
                className="text-center py-1"
                style={{
                  fontSize: "1rem",
                  borderTop: "1px solid #000",
                  borderBottom: "1px solid #000",
                }}
              >
                <BriefcaseFill
                  style={{
                    verticalAlign: "text-bottom",
                  }}
                />{" "}
                Professional Experience
              </h2>
              <List>
                <li>
                  I am a 2008 Graduate in Bachelor of Engineering (Computer
                  Science)
                </li>
                <li>
                  I have worked mainly in Financial industries like banking,
                  insurance and online loan applications. But also have
                  experience in hotel, eCommerce and healthcare industry
                </li>
                <li>
                  I have worked on both public and private web applications. I
                  understand the JWT token based authorization using OAuth
                </li>
                <li>I am well versed in agile methodologies</li>
                <li>
                  Not only frontend development, as part of my role I also
                  deploy applications using CI-CD pipelines such as Bamboo,
                  Azure and AWS
                </li>
                <li>
                  I also get involved in end to end design solution discussions
                </li>
                <li>
                  As part of my role I peer review code of other developers to
                  ensure code quality
                </li>
                <li>
                  I also have interviewing experience and have mentored/trained
                  juniors
                </li>
              </List>
            </section>
          </Col>
          <Col className="bg-light py-2">
            <section>
              <h2
                className="text-center py-1"
                style={{
                  fontSize: "1rem",
                  borderTop: "1px solid #000",
                  borderBottom: "1px solid #000",
                }}
              >
                <FolderFill
                  style={{
                    verticalAlign: "text-bottom",
                  }}
                />{" "}
                Projects (last 5)
              </h2>
              <div>
                <p>
                  <a
                    href="https://www.insuranceonline.nrma.com.au/business-insurance-quote/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Badge>IAG</Badge>{" "}
                    <Link45deg
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />
                  </a>
                  <p>
                    Customer facing insurance application for small to medium
                    enterprises.
                  </p>
                </p>

                <List>
                  <li>
                    <Tools
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Tech overview: <b>React</b>, <b>Typescript</b>, Redux,
                    Bamboo pipelines, NR scripts for logs, Git, Bitbucket,
                    Single page application
                  </li>
                  <li>
                    <People
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Team size: 10
                  </li>
                  <li>
                    <Bullseye
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Goal: Maintain existing application, build new features and
                    products. Monitor production logs and fix incidents raised.
                    Fortnightly deployment. Participate in{" "}
                    <b>architectural solution designing</b>.
                  </li>
                </List>
              </div>

              <div>
                <p>
                  <a
                    href="https://www.qbe.com/au/quote/business/business-details"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Badge>QBE</Badge>{" "}
                    <Link45deg
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />
                  </a>
                  <p>
                    Customer facing insurance application for small to medium
                    enterprises (same product as IAG).
                  </p>
                </p>

                <List>
                  <li>
                    <Tools
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Tech overview: <b>React</b>, <b>Typescript</b>, Redux(RTK),
                    Azure pipelines, Git, Azure repos, Single page application
                  </li>
                  <li>
                    <People
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Team size: 15
                  </li>
                  <li>
                    <Bullseye
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Goal: <b>Greenfield</b> project. Building brand new business
                    insurance web application completely revamp tech and
                    customer experience. Also contribute to <b>design system</b>{" "}
                    components. Participate in{" "}
                    <b>architectural solution designing</b>.
                  </li>
                </List>
              </div>

              <div>
                <p>
                  <a
                    href="https://application.prospa.com/qualification/welcome"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Badge href="">PROSPA</Badge>{" "}
                    <Link45deg
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />
                  </a>
                  <p>Customer facing loan application for small businesses.</p>
                </p>
                <List>
                  <li>
                    <Tools
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Tech overview: <b>React</b>, <b>Typescript</b>, Redux,
                    Graphql, Azure pipelines, Git, Github, Identity Server,
                    Single page application
                  </li>
                  <li>
                    <People
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Team size: 10
                  </li>
                  <li>
                    <Bullseye
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Goal: <b>Greenfield</b> and existing projects to support
                    online loan applications for small businesses for direct
                    customers and partners. Also participate in hackathons and
                    build new ideas for the business that generate higher
                    revenue. Involved in <b>architectural solution designing</b>
                    .
                  </li>
                </List>
              </div>

              <div>
                <p>
                  <Badge href="">RABOBANK</Badge>{" "}
                  <p>Customer facing banking application for framers.</p>
                </p>
                <List>
                  <li>
                    <Tools
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Tech overview: Angular.js, Jenkins, Git, Github, BDD, Single
                    page application
                  </li>
                  <li>
                    <People
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Team size: 16
                  </li>
                  <li>
                    <Bullseye
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Goal: To build a <b>Greenfield</b> banking application with
                    new tech stack fixing existing system's limitations.{" "}
                    <b>Behavior driven development</b> using cucumber
                    integration test cases.
                  </li>
                </List>
              </div>

              <div>
                <p>
                  <a
                    href="https://www.macquarie.com.au/digital-banking/online-banking.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Badge href="">MACQUARIE BANK</Badge>{" "}
                    <Link45deg
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />
                  </a>
                  <p>
                    Customer facing application featuring all the products of
                    Macquarie bank.
                  </p>
                </p>
                <List>
                  <li>
                    <Tools
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Tech overview: Angular.js, WEM(Web experience manager), Git,
                    Bitbucket, Gulp
                  </li>
                  <li>
                    <People
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Team size: 8
                  </li>
                  <li>
                    <Bullseye
                      style={{
                        verticalAlign: "text-bottom",
                      }}
                    />{" "}
                    Goal: Maintain existing web application and build new
                    feature based on latest product release. Building{" "}
                    <b>Rich user interfaces</b>.
                  </li>
                </List>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
