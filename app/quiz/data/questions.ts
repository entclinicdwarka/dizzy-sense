// app/data/questions.ts

import { QuestionSet } from "@/app/components/QuestionEngine";

const questions: QuestionSet = {
  start: {
    id: "start",
    text: "What kind of dizziness are you feeling?",
    options: [
      { label: "Spinning", next: "spinning_duration" },
      { label: "Blackout / Fainting", next: "blackout" },
      { label: "Lightheaded / Unsteady", next: "lightheaded" },
    ],
  },

  spinning_duration: {
    id: "spinning_duration",
    text: "How long do your spinning attacks usually last?",
    options: [
      { label: "Seconds", next: "spinning_frequency" },
      { label: "Minutes to hours", next: "spinning_frequency" },
      { label: "Hours to days", next: "spinning_frequency" },
    ],
  },

  spinning_frequency: {
    id: "spinning_frequency",
    text: "How often do you experience these episodes?",
    options: [
      { label: "Occasionally", next: "spinning_triggered" },
      { label: "Frequently", next: "spinning_triggered" },
      { label: "Almost daily", next: "spinning_triggered" },
    ],
  },

  spinning_triggered: {
    id: "spinning_triggered",
    text: "Is it triggered by position changes (e.g., lying down, turning)?",
    options: [
      { label: "Yes", next: "hearing_issues" },
      { label: "No", next: "persistent_vertigo" },
    ],
  },

  hearing_issues: {
    id: "hearing_issues",
    text: "Do you have hearing issues like ringing, loss, or fullness in one ear?",
    options: [
      { label: "Yes", next: "ent" },
      { label: "No", next: "ent" },
    ],
  },

  persistent_vertigo: {
    id: "persistent_vertigo",
    text: "Is the vertigo persistent and not clearly triggered by movement or position?",
    options: [
      { label: "Yes", next: "neuro_symptoms" },
      { label: "No", next: "general" },
    ],
  },

  neuro_symptoms: {
    id: "neuro_symptoms",
    text: "Do you have any of these symptoms: migraines, blurred vision, slurred speech, or limb weakness?",
    options: [
      { label: "Yes", next: "neuro" },
      { label: "No", next: "general" },
    ],
  },

  blackout: {
    id: "blackout",
    text: "When do blackouts usually happen?",
    options: [
      { label: "During exertion (exercise, climbing stairs)", next: "blackout_cardio_check" },
      { label: "When standing up quickly / changing posture", next: "general" },
      { label: "Randomly without any trigger", next: "blackout_neuro_check" },
    ],
  },

  blackout_cardio_check: {
    id: "blackout_cardio_check",
    text: "Do you also feel chest tightness or palpitations during these episodes?",
    options: [
      { label: "Yes", next: "cardio" },
      { label: "No", next: "general" },
    ],
  },
  blackout_neuro_check: {
    id: "blackout_neuro_check",
    text: "Have you had slurred speech, confusion, or weakness during these blackouts?",
    options: [
      { label: "Yes", next: "neuro" },
      { label: "No", next: "general" },
    ],
  },

  lightheaded: {
    id: "lightheaded",
    text: "When do you feel lightheaded or unsteady?",
    options: [
      { label: "During physical activity or standing", next: "lightheaded_cardio_check" },
      { label: "Randomly, including when sitting or lying down", next: "lightheaded_neuro_check" },
      { label: "In stressful or anxious moments", next: "general" },
    ],
  },


  lightheaded_neuro_check: {
    id: "lightheaded_neuro_check",
    text: "Do you experience imbalance, swaying, or limb weakness?",
    options: [
      { label: "Yes", next: "neuro" },
      { label: "No", next: "general" },
    ],
  },

  lightheaded_cardio_check: {
    id: "lightheaded_cardio_check",
    text: "Do you feel chest tightness, palpitations, or shortness of breath?",
    options: [
      { label: "Yes", next: "cardio" },
      { label: "No", next: "general" },
    ],
  },


  ent: {
    id: "ent",
    text: "We recommend consulting an ENT specialist.",
    options: [],
  },

  cardio: {
    id: "cardio",
    text: "We recommend consulting a cardiologist.",
    options: [],
  },

  neuro: {
    id: "neuro",
    text: "We recommend consulting a neurologist.",
    options: [],
  },

  general: {
    id: "general",
    text: "⚠️ Please see a doctor urgently due to red flag symptoms.",
    options: [],
  },
};

const getFinalResult = (id: string) => {
  const mapping = {
    ent: {
      label: "ENT-related vertigo",
      doctor: "E.N.T. Specialist",
      description: "Your symptoms suggest an issue with the inner ear or balance system (vestibular apparatus), which commonly causes spinning sensations or positional dizziness.",
      redFlags: [
        "Sudden or progressive hearing loss",
        "Persistent imbalance with head movement",
        "Nausea/vomiting with position change",
      ],
    },
    cardio: {
      label: "CardioVascular-related dizziness",
      doctor: "Cardiologist",
      description: "The pattern of your dizziness points toward a possible cardiovascular cause — such as changes in blood pressure, irregular heartbeat, or poor blood flow to the brain.",
      redFlags: [
        "Tightness in the chest or shortness of breath with dizziness",
        "Fainting or near-fainting during activity or standing",
        "Palpitations or irregular heartbeat",
      ],
    },
    neuro: {
      label: "Neurological-related dizziness",
      doctor: "Neurologist",
      description: "Your responses indicate that the dizziness may stem from the brain or nervous system — possibly linked to migraines, balance centers, or transient ischemic events.",
      redFlags: [
        "Slurred speech or facial drooping",
        "Limb weakness, numbness  or swaying gait",
        "Blurred or double vision",
      ],
    },
    general: {
      label: "Mixed or Unclear cause",
      doctor: "General Physician / Visit Hospital",
      description: "The symptoms don't strongly point to a single system. A general physician can assess further or refer you to the appropriate specialist based on a detailed evaluation.",
      redFlags: [
        "Dizziness without clear triggers or patterns",
        "Multiple vague symptoms with no specific system involved",
        "Longstanding or worsening imbalance without explanation",
      ],
    },
  };

  return mapping[id as keyof typeof mapping] || null;
};

export { questions as default, getFinalResult };
