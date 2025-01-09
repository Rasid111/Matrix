import { Card, Col, Container, Row, Button, Form } from "react-bootstrap"
import SmallTitle from "./SmallTitle"
import Links from "./Links"
import SkillArea from "./SkillArea"
import Review from "./Review"
import BlogCard from "./BlogCard"
import { useState } from "react"
import VerticalNavElement from "./VerticalNavElement"

function Main({globalState}) {
    const [section, setSection] = useState(1);

    return (
        <>
            <Container style={{ maxWidth: "1600px" }}>
                <Row>
                    <Col className="sticky-top h-100" style={{top:40}} xs={1}>
                        <Container>
                            <Row xs={1} className="g-3 justify-content-center">
                                <Col>
                                    <VerticalNavElement setSection={setSection} section={section} src="https://html.vikinglab.agency/ovro/assets/img/icons/home1.svg" id={1}></VerticalNavElement>
                                </Col>
                                <Col>
                                    <VerticalNavElement setSection={setSection} section={section} src="https://html.vikinglab.agency/ovro/assets/img/icons/home2.svg" id={2}></VerticalNavElement>
                                </Col>
                                <Col>
                                    <VerticalNavElement setSection={setSection} section={section} src="https://html.vikinglab.agency/ovro/assets/img/icons/home3.svg" id={3}></VerticalNavElement>
                                </Col>
                                <Col>
                                    <VerticalNavElement setSection={setSection} section={section} src="https://html.vikinglab.agency/ovro/assets/img/icons/home4.svg" id={4}></VerticalNavElement>
                                </Col>
                                <Col>
                                    <VerticalNavElement setSection={setSection} section={section} src="https://html.vikinglab.agency/ovro/assets/img/icons/home5.svg" id={5}></VerticalNavElement>
                                </Col>
                                <Col>
                                    <VerticalNavElement setSection={setSection} section={section} src="https://html.vikinglab.agency/ovro/assets/img/icons/home6.svg" id={6}></VerticalNavElement>
                                </Col>
                                <Col>
                                    <VerticalNavElement setSection={setSection} section={section} src="https://html.vikinglab.agency/ovro/assets/img/icons/home8.svg" id={7}></VerticalNavElement>
                                </Col>
                                <Col>
                                    <VerticalNavElement setSection={setSection} section={section} src="https://html.vikinglab.agency/ovro/assets/img/icons/home7.svg" id={8}></VerticalNavElement>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="sticky-top h-100" style={{top:40}} xs={4}>
                        <Card className="text-center justfiy-contnet-center">
                            <Card.Img style={{width: "70%"}} className="ms-auto me-auto pt-3 object-fit-contain" src="https://html.vikinglab.agency/ovro/assets/img/all-images/hero/hero-img1.png" alt="Alex Carry"/>
                            <Card.Body className="p-0">
                                <Card.Title style={{fontSize: 25}}>Alex Carry</Card.Title>
                                <Card.Text className="px-5" style={{fontSize: 14}}>Hi, I’m Alex, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences.</Card.Text>
                                <Links className="mt-1"></Links>
                                <Button className="p-3 rounded-5 mt-3" variant="warning" style={{fontSize: 20}}>DOWNLOAD NOW</Button>
                                <Card.Text className="px-5 mt-3" style={{fontSize: 16}}>© 2024 OVRO. All Rights Reserved.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7}>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="anchor" id="title1"></div>
                                    <SmallTitle>Hi, I’m Alex, UI/UX Designer</SmallTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-start">Designing Intuitive</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-end">Experiences <strong>Inspire</strong></h1>
                                </Col>
                            </Row>
                            <Row className="justify-content-end">
                                <Col xs={7}>
                                    <span className="text-end">Your gateway to innovative design, seamless user experiences, and impactful solutions. Turning complex ideas into user-friendly designs.</span>
                                </Col>
                            </Row>
                            <Row className="justify-content-between align-items-center">
                                <Col style={{height: "100px"}} className="position-relative">
                                    <img style={{top: "45%", left:"11%"}} className="position-absolute" src="https://html.vikinglab.agency/ovro/assets/img/icons/arrow1.svg" alt="elements1"/>
                                    <img className="position-absolute" src="https://html.vikinglab.agency/ovro/assets/img/elements/elements1.png" alt="elements1"/>
                                </Col>
                                <Col xs={4}>
                                    <img src="https://html.vikinglab.agency/ovro/assets/img/all-images/others/others1.png" alt="others1" />
                                    <p className="d-inline-block ps-2 align-middle">2k+ reviews <br />
                                    (4.90 of 5)</p>
                                </Col>
                            </Row>
                            <Row className="my-5" style={{height: 100}}>
                                <Col>
                                    <Button style={{fontSize: 30, backgroundColor: "rgba(0, 0, 0, 0.2)", border: "none"}} className="w-100 h-100">Lets Work Together </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="anchor" id="title2"></div>
                                    <SmallTitle>About Us</SmallTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-start">Crafting Seamless</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-end">User <strong>Experiences</strong></h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title className="m-2" style={{fontSize: 25}}>Alex Carry</Card.Title>
                                            <Card.Text className="mt-4 m-2">Hi, I’m Alex Carry, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences. I specialize in crafting user-centered designs that enhance engagement and drive results. By combining research, creativity, and technical skills, I deliver solutions that not only look great but also function seamlessly.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row xs={2} className="mt-4 g-4">
                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title className="m-2" style={{fontSize: 25}}>UI/UX Design</Card.Title>
                                            <Card.Text className="mt-4 m-2">Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title className="m-2" style={{fontSize: 25}}>User Research & Prototyping</Card.Title>
                                            <Card.Text className="mt-4 m-2">Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title className="m-2" style={{fontSize: 25}}>Responsive Web Design</Card.Title>
                                            <Card.Text className="mt-4 m-2">Crafting designs adapt seamlessly across all devices ensuring and a consistent user experience.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title className="m-2" style={{fontSize: 25}}>Wireframing & Visual Design</Card.Title>
                                            <Card.Text className="mt-4 m-2">Creating detailed wireframes and visually stunning designs to bring ideas into focus.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs={6}>
                                    <h3>Work Expirience</h3>
                                </Col>
                                <Col xs={6}>
                                    <h3>Education</h3>
                                </Col>
                            </Row>
                            <Row xs={2}>
                                <Col>
                                    <Card>
                                        <Card.Body className="ms-3">
                                            <Card.Text>2015-2020</Card.Text>
                                            <Card.Title>UI/UX Designer</Card.Title>
                                            <Card.Text>Creative Spark Agency</Card.Text>
                                            <Card.Text>2020 - Present</Card.Text>
                                            <Card.Title>Senior UI/UX Designer</Card.Title>
                                            <Card.Text>Visionary Tech</Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className="mt-4 text-center">
                                        <Card.Body>
                                            <Card.Title>Stay With Me</Card.Title>
                                            <Links className="w-100"></Links>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body className="ms-3">
                                            <Card.Text>2015-2020</Card.Text>
                                            <Card.Title>UI/UX Designer</Card.Title>
                                            <Card.Text>Creative Spark Agency</Card.Text>
                                            <Card.Text>2020 - Present</Card.Text>
                                            <Card.Title>Senior UI/UX Designer</Card.Title>
                                            <Card.Text>Visionary Tech</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <div className="anchor" id="title3"></div>
                                    <SmallTitle>My Services</SmallTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-start">Elevating Brands</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-end">Intuitive <strong>Design</strong></h1>
                                </Col>
                            </Row>
                            <Row xs={1} className="g-3">
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title style={{fontSize: 30}}>UI/UX Design</Card.Title>
                                            <Card.Text style={{fontSize: 20}}>Designing intuitive, user-focused interfaces that prioritize functionality and seamless navigation.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title style={{fontSize: 30}}>User Research & Prototyping</Card.Title>
                                            <Card.Text style={{fontSize: 20}}>Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title style={{fontSize: 30}}>Responsive Web Design</Card.Title>
                                            <Card.Text style={{fontSize: 20}}>Crafting designs that adapt seamlessly across all devices, ensuring a consistent user experience.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title style={{fontSize: 30}}>Wireframing & Visual Design</Card.Title>
                                            <Card.Text style={{fontSize: 20}}>Creating detailed wireframes and visually stunning designs to bring ideas into focus.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <div className="anchor" id="title4"></div>
                                    <SmallTitle>My Skill</SmallTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-start">The Tools Behind</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-end">Exceptional <strong>Design</strong></h1>
                                </Col>
                            </Row>
                            <Row xs={3} className="g-3">
                                <Col>
                                    <SkillArea src="https://html.vikinglab.agency/ovro/assets/img/icons/skill1.svg" title="96%" text="Figma"></SkillArea>
                                </Col>
                                <Col>
                                    <SkillArea src="https://html.vikinglab.agency/ovro/assets/img/icons/skill2.svg" title="87%" text="Photoshop"></SkillArea>
                                </Col>
                                <Col>
                                    <SkillArea src="https://html.vikinglab.agency/ovro/assets/img/icons/skill3.svg" title="90%" text="Illustrator"></SkillArea>
                                </Col>
                                <Col>
                                    <SkillArea src="https://html.vikinglab.agency/ovro/assets/img/icons/skill4.svg" title="89%" text="Sketch"></SkillArea>
                                </Col>
                                <Col>
                                    <SkillArea src="https://html.vikinglab.agency/ovro/assets/img/icons/skill5.svg" title="92%" text="Adobe XD"></SkillArea>
                                </Col>
                                <Col>
                                    <SkillArea src="https://html.vikinglab.agency/ovro/assets/img/icons/skill6.svg" title="85%" text="Wordpress"></SkillArea>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <div className="anchor" id="title5"></div>
                                    <SmallTitle>My Portfolio</SmallTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-start">Innovation Designs</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-end">Real <strong>Results</strong></h1>
                                </Col>
                            </Row>
                            <Row className="justify-content-center g-5">
                                <Col xs={12} className="overflow-hidden rounded-3">
                                    <img className="object-fit-cover rounded-3 w-100" src="https://html.vikinglab.agency/ovro/assets/img/all-images/portfolio/portfolio-img1.png" alt="Reelup - E commercer Video Platform" />
                                    <h3 className="text-start">Reelup - E commercer Video Platform</h3>
                                </Col>
                                <Col xs={6} className="overflow-hidden rounded-3">
                                    <img className="object-fit-cover rounded-3 w-100" src="https://html.vikinglab.agency/ovro/assets/img/all-images/portfolio/portfolio-img3.png" alt="Reelup - E commercer Video Platform" />
                                    <h3 className="text-start">Academy - Sales Career</h3>
                                </Col>
                                <Col xs={6} className="overflow-hidden rounded-3">
                                    <img className="object-fit-cover rounded-3 w-100" src="https://html.vikinglab.agency/ovro/assets/img/all-images/portfolio/portfolio-img4.png" alt="Reelup - E commercer Video Platform" />
                                    <h3 className="text-start">Leadlogic- Dashboard Design</h3>
                                </Col>
                                <Col xs={12} className="overflow-hidden rounded-3">
                                    <img className="object-fit-cover rounded-3 w-100" src="https://html.vikinglab.agency/ovro/assets/img/all-images/portfolio/portfolio-img2.png" alt="Reelup - E commercer Video Platform" />
                                    <h3 className="text-start">Reelup - E commercer Video Platform</h3>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <div className="anchor" id="title6"></div>
                                    <SmallTitle>Testimonial</SmallTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-start">What Client Says</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-end">About <strong>My Work</strong></h1>
                                </Col>
                            </Row>
                            <Row className="g-4 mt-3">
                                <Col className="h-100" xs={7}>
                                    <Review
                                    text='"Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."'
                                    src="https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img1.png"
                                    name="David Elson"
                                    idk="Ezhe Source">
                                    </Review>
                                </Col>
                                <Col className="h-100" xs={5}>
                                    <Review
                                    text='"Alex exceeded all expectations with their innovative designs and collaborative approach. Reality that perfectly resonates with our audience."'
                                    src="https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img2.png"
                                    name="Chris Glasser"
                                    idk="Auto Works">
                                    </Review>
                                </Col>
                                <Col className="h-100" xs={5}>
                                    <Review
                                    text='"The designs delivered by Alex were intuitive and engaging, making a significant difference in how users interacted with our platform."'
                                    src="https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img4.png"
                                    name="Rodger Struck"
                                    idk="Specialty Restaurant Group">
                                    </Review>
                                </Col>
                                <Col className="h-100" xs={7}>
                                    <Review className="h-100"
                                    text='"From wireframes to the final product, Alex brought creativity and functionality together beautifully. The final design not only looks fantastic but also works flawlessly across devices."'
                                    src="https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img3.png"
                                    name="Mary Freund"
                                    idk="Rink's">
                                    </Review>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <div className="anchor" id="title7"></div>
                                    <SmallTitle>Our Blog</SmallTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-start">Our Latest Blog Idea</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-end">UI/UX <strong>Trends</strong></h1>
                                </Col>
                            </Row>
                            <Row xs={2} className="g-3">
                                <Col>
                                    <BlogCard src="https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img1.png">Behind the Pixels: My Favorite Design Projects</BlogCard>
                                </Col>
                                <Col>
                                    <BlogCard src="https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img2.png">Crafting Seamless Experiences: My UI/UX Design Philosophy</BlogCard>
                                </Col>
                                <Col>
                                    <BlogCard src="https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img3.png">Staying Ahead: Trends Shaping UI/UX in 2024</BlogCard>
                                </Col>
                                <Col>
                                    <BlogCard src="https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img4.png">From Concept to Reality: My Design Process</BlogCard>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mt-5">
                                <Col xs={6}>
                                    <Container>
                                        <Row xs={6} className="g-4">
                                            <Col tabIndex={0} onBlur={(ev) => ev.target.style.backgroundColor = ""} onFocusCapture={(ev) => ev.target.style.backgroundColor = "orange"} className="border rounded">{">"}</Col>
                                            <Col tabIndex={0} onBlur={(ev) => ev.target.style.backgroundColor = ""} onFocusCapture={(ev) => ev.target.style.backgroundColor = "orange"}  className="border rounded">1</Col>
                                            <Col tabIndex={0} onBlur={(ev) => ev.target.style.backgroundColor = ""} onFocusCapture={(ev) => ev.target.style.backgroundColor = "orange"}  className="border rounded">2</Col>
                                            <Col tabIndex={0} onBlur={(ev) => ev.target.style.backgroundColor = ""} onFocusCapture={(ev) => ev.target.style.backgroundColor = "orange"}  className="border rounded">...</Col>
                                            <Col tabIndex={0} onBlur={(ev) => ev.target.style.backgroundColor = ""} onFocusCapture={(ev) => ev.target.style.backgroundColor = "orange"}  className="border rounded">12</Col>
                                            <Col tabIndex={0} onBlur={(ev) => ev.target.style.backgroundColor = ""} onFocusCapture={(ev) => ev.target.style.backgroundColor = "orange"}  className="border rounded">{"<"}</Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <div className="anchor" id="title8"></div>
                                    <SmallTitle>Contact Me</SmallTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-start">Have Any Project in</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 style={{fontSize: 60}} className="text-end">Mind, <strong>Lets Talk</strong></h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>Let's Work Together</h3>
                                    <Form className="border p-4 rounded">
                                        <Container fluid>
                                            <Row className="g-3">
                                                <Col xs={6}>
                                                    <Form.Control type="text" placeholder="Full Name" />
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Control type="email" placeholder="Email Adress" />
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Control type="number" placeholder="Phone Number" />
                                                </Col>
                                                <Col xs={6}>
                                                    <Form.Control type="text" placeholder="Subject" />
                                                </Col>
                                                <Col xs={12}>
                                                    <Form.Control type="text" placeholder="Your Budget (optional)" />
                                                </Col>
                                                <Col xs={12}>
                                                    <Form.Control style={{height: 150}} type="text" placeholder="Message" />
                                                </Col>
                                            </Row>
                                            <Button className="ms-0 mt-2" variant="warning" type="submit">
                                                Send
                                            </Button>
                                        </Container>
                                    </Form>
                                </Col>
                            </Row>
                            <Row className="my-5">
                                <Col>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <img className="w-50" src={"https://html.vikinglab.agency/ovro/assets/img/logo/" + (globalState.theme === false ? "logo1.png" : "logo2.png")} alt="logo" />
                                            </Col>
                                            <Col className="text-end">
                                                <h5>© 2024 OVRO. All Rights Reserved.</h5>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Main