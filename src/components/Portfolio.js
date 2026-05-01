import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spam Detection",
    image: "/image.png",
    description:
      "A Streamlit app that classifies SMS messages as spam or not spam using TF-IDF and Naive Bayes.",
    github: "https://github.com/khojaabbas/SpamDetection",
    live: "https://share.streamlit.io/khojaabbas/SpamDetection/main/src/spam_app.py",
  },
  {
    title: "RAG-Based Chatbot",
    image: "/RAG-Chatbot.png",
    description:
      "An AI-powered chatbot using Retrieval-Augmented Generation (RAG) with vector database search to answer user queries based on custom documents.",
    github: "https://github.com/khojaabbas/RAG_Based-Chatbot",
    live: "https://ragbased-chatbot-ntiq3rsu8khpvchejqzcpb.streamlit.app/",
  },
];

const Portfolio = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="portfolio"
      className={`py-5 ${isDark ? "bg-dark text-white" : "bg-light text-dark"}`}
    >
      <Container>
        <p className={`lead text-center ${isDark ? "" : "text-muted"}`}>
          View my work and projects that showcase my skills and creativity.
        </p>

        <h2 className="text-center mb-5 fw-bold">My Projects</h2>

        {/* KEEP ORIGINAL GRID */}
        <Row className="g-4 justify-content-center align-items-stretch">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="d-flex">
              <motion.div
                className="w-100"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <Card
                  bg={isDark ? "secondary" : "light"}
                  text={isDark ? "light" : "dark"}
                  className="h-100 shadow-lg border-0 d-flex flex-column"
                >
                  {/* IMAGE (balanced) */}
                  <Card.Img
  variant="top"
  src={project.image}
  alt={project.title}
  style={{
    height: "230px",
    width: "100%",
    objectFit: "contain",
    objectPosition: "center",
    backgroundColor: "#ffffff",
    padding: "0",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  }}
/>

                  {/* BODY */}
                  <Card.Body className="d-flex flex-column p-3">
                    <Card.Title className="fw-bold mb-2">
                      {project.title}
                    </Card.Title>

                    <Card.Text
                      style={{
                        flexGrow: 1,
                        lineHeight: "1.6",
                        fontSize: "0.95rem",
                      }}
                    >
                      {project.description}
                    </Card.Text>

                    <div className="d-flex gap-2 mt-2">
                      {project.github && (
                        <Button
                          size="sm"
                          variant={isDark ? "outline-light" : "secondary"}
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </Button>
                      )}

                      {project.live && (
                        <Button
                          size="sm"
                          variant={isDark ? "outline-light" : "secondary"}
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;