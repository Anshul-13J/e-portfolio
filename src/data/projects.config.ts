export interface Project {
  slug: string;
  category: "genai" | "data" | "personal" | "iot";
  type: string;
  name: string;
  summary: string;
  impact: string[];
  stack: string[];
  href: string;
  linkText: string;
}

export const projects: Project[] = [
  {
    slug: "audi-ai-factory",
    category: "genai",
    type: "Enterprise AI",
    name: "AUDI AI-Factory",
    summary:
      "Co-engineered an enterprise GenAI platform with AUDI IT and Microsoft. Its agentic workflows and production RAG serve more than 100,000 active users.",
    impact: [
      "Reduced operating costs by around 40%",
      "Improved retrieval quality by 12%",
      "Raised positive user feedback by 30%",
    ],
    stack: ["Azure OpenAI", "LangGraph", "Azure AI Search", "FastAPI"],
    href: "https://www.linkedin.com/posts/vwits_vwits-audiit-innovation-activity-7309809157287677952-xMVV",
    linkText: "Read about the collaboration",
  },
  {
    slug: "matter-ai",
    category: "data",
    type: "Document intelligence",
    name: "MATTER-AI",
    summary:
      "Built GraphRAG document-processing services that extract structured information from more than 50,000 PDFs and connect it as a knowledge graph.",
    impact: [
      "Cut processing time from about 20 seconds to 4 seconds per file",
      "Used AWS Textract and S3 with Neo4j",
      "Applied Python, Docker, Poetry and test-driven development",
    ],
    stack: ["Python", "GraphRAG", "Neo4j", "AWS Textract"],
    href: "mailto:anshulnigam123@gmail.com?subject=Matter-AI%20project",
    linkText: "Ask me about the project",
  },
  {
    slug: "synk",
    category: "personal",
    type: "Hackathon project",
    name: "SYNK",
    summary:
      "A mental wellness and fitness project exploring VR experiences and computer-vision posture feedback, built for Hack This Fall 3.0.",
    impact: [
      "First runner-up among 150+ teams",
      "Built posture feedback with Python, OpenCV and MediaPipe",
      "Explored VR interactions for confidence and wellness exercises",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "VR"],
    href: "https://github.com/Anshul-13J/synk",
    linkText: "View the project on GitHub",
  },
  {
    slug: "smart-gardening",
    category: "iot",
    type: "IoT and machine learning",
    name: "Smart Gardening",
    summary:
      "A sensor-based agriculture prototype combining soil and environment readings with machine-learning recommendations for crop health.",
    impact: [
      "Prototyped a NodeMCU device with soil, pH and DHT22 sensors",
      "Contributed to the project website and device integration",
      "Presented the project at the PowerToFly Hackathon",
    ],
    stack: ["NodeMCU", "IoT sensors", "Machine learning", "Web"],
    href: "https://github.com/Anshul-13J/Agriculture-Monitoring-Using-AI-and-IoT",
    linkText: "View the project on GitHub",
  },
];
