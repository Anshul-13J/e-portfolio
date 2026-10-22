export interface ResumeOption {
  id: string;
  label: string;
  file: string;
}

export const resumes: ResumeOption[] = [
  {
    id: "ai-engineer",
    label: "AI Engineer",
    file: "/resume.pdf",
  },
];
