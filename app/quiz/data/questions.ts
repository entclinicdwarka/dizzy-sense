import { QuestionSet } from "@/app/components/QuestionEngine";

const questions: QuestionSet = {
  start: {
    id: "start",
    text: "questions.start.text",
    options: [
      { label: "questions.start.options.spinning", next: "spinning_duration" },
      { label: "questions.start.options.blackout", next: "blackout_trigger" },
      { label: "questions.start.options.lightheaded", next: "lightheaded_trigger" },
      { label: "questions.start.options.vision", next: "vision_issues" },
      { label: "questions.start.options.neck", next: "neck_pain_relation" },
    ],
  },

  // === Spinning Vertigo Flow ===
  spinning_duration: {
    id: "spinning_duration",
    text: "questions.spinning_duration.text",
    options: [
      { label: "questions.spinning_duration.options.seconds", next: "spinning_trigger" },
      { label: "questions.spinning_duration.options.minutes_hours", next: "spinning_trigger" },
      { label: "questions.spinning_duration.options.hours_days", next: "spinning_trigger" },
    ],
  },

  spinning_trigger: {
    id: "spinning_trigger",
    text: "questions.spinning_trigger.text",
    options: [
      { label: "common.yes", next: "hearing_issues" },
      { label: "common.no", next: "nausea_vomiting" },
    ],
  },

  hearing_issues: {
    id: "hearing_issues",
    text: "questions.hearing_issues.text",
    options: [
      { label: "common.yes", next: "upper_respiratory" },
      { label: "common.no", next: "head_trauma" },
    ],
  },

  upper_respiratory: {
    id: "upper_respiratory",
    text: "questions.upper_respiratory.text",
    options: [
      { label: "common.yes", next: "ent" },
      { label: "common.no", next: "ent" },
    ],
  },

  head_trauma: {
    id: "head_trauma",
    text: "questions.head_trauma.text",
    options: [
      { label: "common.yes", next: "neuro" },
      { label: "common.no", next: "ent" },
    ],
  },

  nausea_vomiting: {
    id: "nausea_vomiting",
    text: "questions.nausea_vomiting.text",
    options: [
      { label: "common.yes", next: "neuro" },
      { label: "common.no", next: "ent" },
    ],
  },

  // === Blackout / Fainting Flow ===
  blackout_trigger: {
    id: "blackout_trigger",
    text: "questions.blackout_trigger.text",
    options: [
      { label: "questions.blackout_trigger.options.exertion", next: "cardio_palpitations" },
      { label: "questions.blackout_trigger.options.standing", next: "cardio" },
      { label: "questions.blackout_trigger.options.random", next: "neuro_syncopal" },
    ],
  },

  cardio_palpitations: {
    id: "cardio_palpitations",
    text: "questions.cardio_palpitations.text",
    options: [
      { label: "common.yes", next: "cardio" },
      { label: "common.no", next: "general" },
    ],
  },

  neuro_syncopal: {
    id: "neuro_syncopal",
    text: "questions.neuro_syncopal.text",
    options: [
      { label: "common.yes", next: "neuro" },
      { label: "common.no", next: "general" },
    ],
  },

  // === Lightheaded / Unsteady Flow ===
  lightheaded_trigger: {
    id: "lightheaded_trigger",
    text: "questions.lightheaded_trigger.text",
    options: [
      { label: "questions.lightheaded_trigger.options.activity", next: "cardio_palpitations" },
      { label: "questions.lightheaded_trigger.options.random", next: "psychiatric_stress" },
      { label: "questions.lightheaded_trigger.options.stress", next: "psychiatric_anxiety" },
      { label: "questions.lightheaded_trigger.options.infection", next: "systemic_infection" },
      { label: "questions.lightheaded_trigger.options.unexplained", next: "endocrine_symptoms" },
    ],
  },

  endocrine_symptoms: {
    id: "endocrine_symptoms",
    text: "questions.endocrine_symptoms.text",
    options: [
      { label: "common.yes", next: "endocrinology" },
      { label: "common.no", next: "general" },
    ],
  },

  psychiatric_stress: {
    id: "psychiatric_stress",
    text: "questions.psychiatric_stress.text",
    options: [
      { label: "common.yes", next: "psychiatry" },
      { label: "common.no", next: "general" },
    ],
  },

  psychiatric_anxiety: {
    id: "psychiatric_anxiety",
    text: "questions.psychiatric_anxiety.text",
    options: [
      { label: "common.yes", next: "psychiatry" },
      { label: "common.no", next: "general" },
    ],
  },

  systemic_infection: {
    id: "systemic_infection",
    text: "questions.systemic_infection.text",
    options: [
      { label: "common.yes", next: "infectious" },
      { label: "common.no", next: "general" },
    ],
  },

  // === Visual Disturbances Flow ===
  vision_issues: {
    id: "vision_issues",
    text: "questions.vision_issues.text",
    options: [
      { label: "common.yes", next: "vision_additional" },
      { label: "common.no", next: "general" },
    ],
  },

  vision_additional: {
    id: "vision_additional",
    text: "questions.vision_additional.text",
    options: [
      { label: "common.yes", next: "neuro_or_ophthalmology" },
      { label: "common.no", next: "ophthalmology" },
    ],
  },

  neuro_or_ophthalmology: {
    id: "neuro_or_ophthalmology",
    text: "questions.neuro_or_ophthalmology.text",
    options: [
      { label: "common.yes", next: "neuro" },
      { label: "common.no", next: "ophthalmology" },
    ],
  },

  // === Neck-related Dizziness Flow ===
  neck_pain_relation: {
    id: "neck_pain_relation",
    text: "questions.neck_pain_relation.text",
    options: [
      { label: "common.yes", next: "neck_additional" },
      { label: "common.no", next: "general" },
    ],
  },

  neck_additional: {
    id: "neck_additional",
    text: "questions.neck_additional.text",
    options: [
      { label: "common.yes", next: "orthopedics" },
      { label: "common.no", next: "general" },
    ],
  },

  // === Leaf Nodes ===
  ent: { id: "ent", text: "questions.ent.text", options: [] },
  cardio: { id: "cardio", text: "questions.cardio.text", options: [] },
  neuro: { id: "neuro", text: "questions.neuro.text", options: [] },
  psychiatry: { id: "psychiatry", text: "questions.psychiatry.text", options: [] },
  orthopedics: { id: "orthopedics", text: "questions.orthopedics.text", options: [] },
  endocrinology: { id: "endocrinology", text: "questions.endocrinology.text", options: [] },
  ophthalmology: { id: "ophthalmology", text: "questions.ophthalmology.text", options: [] },
  infectious: { id: "infectious", text: "questions.infectious.text", options: [] },
  general: { id: "general", text: "questions.general.text", options: [] },
};

// === Final Result Mapping ===
const getFinalResult = (id: string) => {
  const mapping = {
    ent: {
      label: "results.ent.label",
      doctor: "results.ent.doctor",
      description: "results.ent.description",
      redFlags: "results.ent.redFlags",
      nextSteps: "results.ent.nextSteps",
      contact: "results.ent.contact",
    },
    cardio: {
      label: "results.cardio.label",
      doctor: "results.cardio.doctor",
      description: "results.cardio.description",
      redFlags: "results.cardio.redFlags",
      nextSteps: "results.cardio.nextSteps",
      contact: "results.cardio.contact",
    },
    neuro: {
      label: "results.neuro.label",
      doctor: "results.neuro.doctor",
      description: "results.neuro.description",
      redFlags: "results.neuro.redFlags",
      nextSteps: "results.neuro.nextSteps",
      contact: "results.neuro.contact",
    },
    psychiatry: {
      label: "results.psychiatry.label",
      doctor: "results.psychiatry.doctor",
      description: "results.psychiatry.description",
      redFlags: "results.psychiatry.redFlags",
      nextSteps: "results.psychiatry.nextSteps",
      contact: "results.psychiatry.contact",
    },
    orthopedics: {
      label: "results.orthopedics.label",
      doctor: "results.orthopedics.doctor",
      description: "results.orthopedics.description",
      redFlags: "results.orthopedics.redFlags",
      nextSteps: "results.orthopedics.nextSteps",
      contact: "results.orthopedics.contact",
    },
    endocrinology: {
      label: "results.endocrinology.label",
      doctor: "results.endocrinology.doctor",
      description: "results.endocrinology.description",
      redFlags: "results.endocrinology.redFlags",
      nextSteps: "results.endocrinology.nextSteps",
      contact: "results.endocrinology.contact",
    },
    ophthalmology: {
      label: "results.ophthalmology.label",
      doctor: "results.ophthalmology.doctor",
      description: "results.ophthalmology.description",
      redFlags: "results.ophthalmology.redFlags",
      nextSteps: "results.ophthalmology.nextSteps",
      contact: "results.ophthalmology.contact",
    },
    infectious: {
      label: "results.infectious.label",
      doctor: "results.infectious.doctor",
      description: "results.infectious.description",
      redFlags: "results.infectious.redFlags",
      nextSteps: "results.infectious.nextSteps",
      contact: "results.infectious.contact",
    },
    general: {
      label: "results.general.label",
      doctor: "results.general.doctor",
      description: "results.general.description",
      redFlags: "results.general.redFlags",
      nextSteps: "results.general.nextSteps",
      contact: "results.general.contact",
    },
  };

  return mapping[id as keyof typeof mapping];
};

export { questions as default, getFinalResult };
