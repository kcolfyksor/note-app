const mockNotesData = [
  {
    category: "Work and study",
    note: "Overview of basic computer networking knowledge",
    dateCreated: "2025-02-08T09:41:00Z",
  },
  {
    category: "Work and study",
    note: "How to calculate float multiplication and division in JavaScript?",
    dateCreated: "2025-02-07T15:20:00Z",
  },
  {
    category: "Home life",
    note: "Pan–fried chicken breast with vegetable salad",
    dateCreated: "2025-02-06T18:30:00Z",
  },
  {
    category: "Health and wellness",
    note: "Maintain sufficient daily water intake",
    dateCreated: "2025-02-05T08:00:00Z",
  },
];

type GroupedNotes = {
  [key: string]: Array<{
    category: string;
    note: string;
    dateCreated: string;
  }>;
};

const groupedNotes = mockNotesData.reduce<GroupedNotes>((acc, note) => {
  const { category } = note;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(note);
  return acc;
}, {});

export default groupedNotes;
