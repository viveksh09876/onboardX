import { IDynamicQuestionSet } from "../models/DynamicQuestionSet";

export function resolveDynamicQuestions(
  questionSet: IDynamicQuestionSet,
  previousData: any
) {
  if (!previousData) return questionSet.questions;

  const resolved = [];

  for (const q of questionSet.questions) {
    const cond = q.conditions;

    if (!cond) {
      resolved.push(q);
      continue;
    }

    // Simple condition: dependsOn + equals
    if (cond.dependsOn && cond.equals !== undefined) {
      const userValue = previousData[cond.dependsOn];
      if (userValue === cond.equals) {
        resolved.push(q);
      }
    }
  }

  return resolved;
}
