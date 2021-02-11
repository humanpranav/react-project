export const specialties = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Data Science" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Front-End Developer" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Machine Learning" },
];

export function getSpecialties() {
  return specialties.filter((g) => g);
}
