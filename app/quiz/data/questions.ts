import { QuestionSet } from "@/app/components/QuestionEngine";

const questions: QuestionSet = {
  start: {
    id: "start",
    text: "What kind of dizziness are you feeling?",
    options: [
      { label: "Spinning", next: "spinning_duration" },
      { label: "Blackout / Fainting", next: "blackout_trigger" },
      { label: "Lightheaded / Unsteady", next: "lightheaded_trigger" },
      { label: "Visual disturbances", next: "vision_issues" },
      { label: "Neck-related dizziness", next: "neck_pain_relation" },
    ],
  },

  // === Spinning Vertigo Flow ===
  spinning_duration: {
    id: "spinning_duration",
    text: "How long do your spinning attacks usually last?",
    options: [
      { label: "Seconds", next: "spinning_trigger" },
      { label: "Minutes to hours", next: "spinning_trigger" },
      { label: "Hours to days", next: "spinning_trigger" },
    ],
  },

  spinning_trigger: {
    id: "spinning_trigger",
    text: "Are they triggered by positional changes (e.g., lying down, turning)?",
    options: [
      { label: "Yes", next: "hearing_issues" },
      { label: "No", next: "nausea_vomiting" },
    ],
  },

  hearing_issues: {
    id: "hearing_issues",
    text: "Do you experience ear fullness, ringing (tinnitus), or hearing loss?",
    options: [
      { label: "Yes", next: "upper_respiratory" },
      { label: "No", next: "head_trauma" },
    ],
  },

  upper_respiratory: {
    id: "upper_respiratory",
    text: "Have you had any recent cold, sinus infection, or upper respiratory infection?",
    options: [
      { label: "Yes", next: "ent" },
      { label: "No", next: "ent" },
    ],
  },

  head_trauma: {
    id: "head_trauma",
    text: "Any history of head trauma or injury recently?",
    options: [
      { label: "Yes", next: "neuro" },
      { label: "No", next: "ent" },
    ],
  },

  nausea_vomiting: {
    id: "nausea_vomiting",
    text: "Do you also experience persistent nausea or vomiting?",
    options: [
      { label: "Yes", next: "neuro" },
      { label: "No", next: "ent" },
    ],
  },

  // === Blackout / Fainting Flow ===
  blackout_trigger: {
    id: "blackout_trigger",
    text: "When do blackouts typically happen?",
    options: [
      { label: "During exertion", next: "cardio_palpitations" },
      { label: "When standing up quickly", next: "cardio" },
      { label: "Randomly without clear trigger", next: "neuro_syncopal" },
    ],
  },

  cardio_palpitations: {
    id: "cardio_palpitations",
    text: "Do you feel chest tightness, palpitations, or shortness of breath during blackouts?",
    options: [
      { label: "Yes", next: "cardio" },
      { label: "No", next: "general" },
    ],
  },

  neuro_syncopal: {
    id: "neuro_syncopal",
    text: "Any slurred speech, confusion, or limb weakness during these events?",
    options: [
      { label: "Yes", next: "neuro" },
      { label: "No", next: "general" },
    ],
  },

  // === Lightheaded / Unsteady Flow ===
  lightheaded_trigger: {
    id: "lightheaded_trigger",
    text: "When do you feel lightheaded or unsteady?",
    options: [
      { label: "During physical activity or standing", next: "cardio_palpitations" },
      { label: "Randomly, including when sitting or lying", next: "psychiatric_stress" },
      { label: "In stressful or anxious moments", next: "psychiatric_anxiety" },
      { label: "With fever, chills, or recent infection", next: "systemic_infection" },
      {
        label: "With unexplained symptoms",
        next: "endocrine_symptoms"
      }

    ],
  },

  endocrine_symptoms: {
    id: "endocrine_symptoms",
    text: "Do you experience unexplained fatigue, weight gain/loss, or excessive sweating?",
    options: [
      { label: "Yes", next: "endocrinology" },
      { label: "No", next: "general" },
    ],
  },

  psychiatric_stress: {
    id: "psychiatric_stress",
    text: "Do you feel detached from reality (derealization)?",
    options: [
      { label: "Yes", next: "psychiatry" },
      { label: "No", next: "general" },
    ],
  },

  psychiatric_anxiety: {
    id: "psychiatric_anxiety",
    text: "Do these symptoms coincide with panic attacks or anxiety?",
    options: [
      { label: "Yes", next: "psychiatry" },
      { label: "No", next: "general" },
    ],
  },

  systemic_infection: {
    id: "systemic_infection",
    text: "Have you experienced recent viral infection, unexplained fever, or fatigue?",
    options: [
      { label: "Yes", next: "infectious" },
      { label: "No", next: "general" },
    ],
  },

  // === Visual Disturbances Flow ===
  vision_issues: {
    id: "vision_issues",
    text: "Do you experience blurred vision, double vision, difficulty focusing, or eye strain?",
    options: [
      { label: "Yes", next: "vision_additional" },
      { label: "No", next: "general" },
    ],
  },

  vision_additional: {
    id: "vision_additional",
    text: "Are these symptoms associated with headaches, dizziness, or nausea?",
    options: [
      { label: "Yes", next: "neuro_or_ophthalmology" },
      { label: "No", next: "ophthalmology" },
    ],
  },

  neuro_or_ophthalmology: {
    id: "neuro_or_ophthalmology",
    text: "Are these visual symptoms associated with limb weakness or slurred speech",
    options: [
      { label: "Yes", next: "neuro" },
      { label: "No", next: "ophthalmology" },
    ],
  },

  // === Neck-related Dizziness Flow ===
  neck_pain_relation: {
    id: "neck_pain_relation",
    text: "Is your dizziness related to neck pain or limited range of motion?",
    options: [
      { label: "Yes", next: "neck_additional" },
      { label: "No", next: "general" },
    ],
  },

  neck_additional: {
    id: "neck_additional",
    text: "Do you have headaches, tingling, or numbness in your arms or hands?",
    options: [
      { label: "Yes", next: "orthopedics" },
      { label: "No", next: "general" },
    ],
  },


  // === Specialties Leaf Nodes ===
  ent: {
    id: "ent",
    text: "Consult an ENT Specialist.",
    options: [],
  },

  cardio: {
    id: "cardio",
    text: "Consult a Cardiologist.",
    options: [],
  },

  neuro: {
    id: "neuro",
    text: "Consult a Neurologist.",
    options: [],
  },

  psychiatry: {
    id: "psychiatry",
    text: "Consult a Psychiatrist.",
    options: [],
  },

  orthopedics: {
    id: "orthopedics",
    text: "Consult an Orthopedist.",
    options: [],
  },

  endocrinology: {
    id: "endocrinology",
    text: "Consult an Endocrinologist.",
    options: [],
  },

  ophthalmology: {
    id: "ophthalmology",
    text: "Consult an Ophthalmologist.",
    options: [],
  },

  infectious: {
    id: "infectious",
    text: "Consult Infectious Disease Specialist.",
    options: [],
  },

  general: {
    id: "general",
    text: "⚠️ See a doctor urgently due to red flag symptoms.",
    options: [],
  },
};

const getFinalResult = (id: string) => {
  const mapping = {
    ent: {
      label: "Ear - related vertigo",
      doctor: "E.N.T. Specialist",
      description:
        "Symptoms suggest an inner ear or balance system issue, commonly causing positional vertigo.",
      redFlags: [
        "Sudden or progressive hearing loss",
        "Persistent imbalance with head movement",
        "Nausea/vomiting with position change",
      ],
      nextSteps: "Rest in a dark, quiet room. Avoid sudden movements.",
      contact: "Visit a local ENT clinic or hospital.",
    },
    cardio: {
      label: "Heart-related dizziness",
      doctor: "Cardiologist",
      description:
        "Pattern suggests a cardiovascular cause such as blood pressure changes or arrhythmia.",
      redFlags: [
        "Tightness in chest or shortness of breath",
        "Fainting during activity or standing",
        "Palpitations or irregular heartbeat",
      ],
      nextSteps: "Stay hydrated and avoid exertion until seen by a doctor.",
      contact: "Visit a cardiology department at your nearest hospital.",
    },
    neuro: {
      label: "Neurological-related dizziness",
      doctor: "Neurologist",
      description:
        "Possible link to migraines, balance centers, or transient ischemic events.",
      redFlags: [
        "Slurred speech",
        "Limb weakness or numbness",
        "Blurred or double vision",
      ],
      nextSteps: "Avoid stress and take notes of symptoms for medical consultation.",
      contact: "See a neurologist for brain and nervous system evaluation.",
    },
    psychiatry: {
      label: "Psychiatry-related dizziness",
      doctor: "Psychiatrist",
      description:
        "Symptoms may stem from anxiety, panic disorder, or somatoform disorders.",
      redFlags: [
        "Persistent worry",
        "Depersonalization or derealization",
        "Sleep disturbances",
      ],
      nextSteps: "Practice relaxation techniques and consult mental health professionals.",
      contact: "Visit a mental health clinic or psychiatrist.",
    },
    orthopedics: {
      label: "Orthopedic-related dizziness",
      doctor: "Orthopedist",
      description:
        "Symptoms related to neck pain or cervical spine disorders.",
      redFlags: [
        "Neck stiffness",
        "Pain radiating to arms",
        "Reduced neck motion",
      ],
      nextSteps: "Avoid neck strain and seek orthopedic assessment.",
      contact: "Visit an orthopedic clinic for spinal evaluation.",
    },
    endocrinology: {
      label: "Endocrine-related dizziness",
      doctor: "Endocrinologist",
      description:
        "Could be linked to blood sugar fluctuations, thyroid dysfunction, or hormonal imbalance.",
      redFlags: [
        "Unexplained fatigue",
        "Weight changes",
        "Excessive sweating",
      ],
      nextSteps: "Monitor symptoms and consult endocrinologist for testing.",
      contact: "See an endocrinologist for hormone evaluation.",
    },
    ophthalmology: {
      label: "Eye-related dizziness",
      doctor: "Ophthalmologist",
      description:
        "Visual disturbances causing dizziness, due to eye muscle or optic nerve dysfunction.",
      redFlags: [
        "Blurred vision",
        "Double vision",
        "Difficulty focusing",
      ],
      nextSteps: "Avoid visual strain and consult eye specialist.",
      contact: "Visit an ophthalmology clinic.",
    },
    infectious: {
      label: "Infectious-related Dizziness",
      doctor: "Internal Medicine",
      description:
        "Possible systemic causes like infection, anemia, or dehydration.",
      redFlags: [
        "Fever",
        "Fatigue",
        "Recent viral infection",
      ],
      nextSteps: "Stay hydrated and consult doctor urgently.",
      contact: "Visit your nearest hospital for internal medicine consult.",
    },
    general: {
      label: "Unspecified or Red Flag Dizziness",
      doctor: "General Physician",
      description:
        "Red flag symptoms require urgent comprehensive medical assessment.",
      redFlags: [
        "Sudden, severe headache (worst headache of your life)",
        "Acute vision loss, blurred or double vision",
        "Sudden hearing loss",
        "Limb weakness, numbness, or facial drooping",
        "Difficulty speaking, slurred speech, or confusion",
        "Loss of consciousness or unexplained fainting",
        "Severe chest pain, palpitations, or shortness of breath",
        "Unexplained fever, chills, or signs of infection",
        "Persistent vomiting or dehydration",
        "Unsteady gait, falls, or inability to walk safely",
        "New-onset severe dizziness after head trauma",
        "Rapidly worsening symptoms or progression",
        "Severe fatigue or unexplained weight loss",
        "Signs of low blood sugar (sweating, shaking, confusion)",
      ],
      nextSteps: "Visit nearest hospital immediately.",
      contact: "See a general physician for a full workup.",
    },
  };

  return mapping[id as keyof typeof mapping];
};

export { questions as default, getFinalResult };
