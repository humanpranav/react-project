import * as specialtiesAPI from "./fakeSpecialtyService";

const candidates = [
  {
    _id: "5b21ca3eeb7f6fbccd471e16",

    name: "Bill Gates",
    specialty: { _id: "5b21ca3eeb7f6fbccd471818", name: "Data Science" },
    yearsExperience: 5,
    expertiseRating: 2.5,
  },

  {
    _id: "5b21ca3eeb7f6fbccd471816",

    name: "Elon Musk",
    specialty: { _id: "5b21ca3eeb7f6fbccd471818", name: "Data Science" },
    yearsExperience: 5,
    expertiseRating: 17.3,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",

    name: "Britney Spears",
    specialty: { _id: "5b21ca3eeb7f6fbccd471820", name: "Machine Learning" },
    yearsExperience: 8,
    expertiseRating: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",

    name: "Mike Tyson",
    specialty: { _id: "5b21ca3eeb7f6fbccd471814", name: "Front-End Developer" },
    yearsExperience: 7,
    expertiseRating: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",

    name: "Dora the Explora",
    specialty: { _id: "5b21ca3eeb7f6fbccd471814", name: "Front-End Developer" },
    yearsExperience: 7,
    expertiseRating: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",

    name: "William Shakespeare",
    specialty: { _id: "5b21ca3eeb7f6fbccd471814", name: "Front-End Developer" },
    yearsExperience: 410,
    expertiseRating: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",

    name: "Hillary Clinton",
    specialty: { _id: "5b21ca3eeb7f6fbccd471820", name: "Machine Learning" },
    yearsExperience: 7,
    expertiseRating: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",

    name: "Pranav Arora",
    specialty: { _id: "5b21ca3eeb7f6fbccd471814", name: "Front-End Developer" },
    yearsExperience: 1,
    expertiseRating: 100,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Mindy Kaling",

    specialty: { _id: "5b21ca3eeb7f6fbccd471818", name: "Data Science" },
    yearsExperience: 7,
    expertiseRating: 3.5,
  },
];

export function getCandidates() {
  return candidates;
}

export function getCandidate(id) {
  return candidates.find((m) => m._id === id);
}

export function saveCandidate(candidate) {
  let candidateInFocus = candidates.find((m) => m._id === candidate._id) || {};
  candidate.title = candidate.title;
  candidate.specialty = specialtiesAPI.specialties.find(
    (g) => g._id === candidate.specialtyId
  );
  candidate.numberInStock = candidate.numberInStock;
  candidate.expertiseRating = candidate.expertiseRating;

  if (!candidate._id) {
    candidate._id = Date.now().toString();
    candidates.push(candidate);
  }

  return candidateInFocus;
}

export function deleteCandidate(id) {
  let candidateInFocus = candidates.find((m) => m._id === id);
  candidates.splice(candidates.indexOf(candidateInFocus), 1);
  return candidateInFocus;
}
