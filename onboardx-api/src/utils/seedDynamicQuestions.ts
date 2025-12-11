import DynamicQuestionSet from "../models/DynamicQuestionSet";

export async function seedDynamicQuestions() {
  const exists = await DynamicQuestionSet.findOne({ screen: "business" });
  if (exists) {
    console.log("Dynamic questions already exist");
    return;
  }

  await DynamicQuestionSet.create({
    screen: "business",
    rules: {
      show_gst_question_if_country_is_IN: {
        condition: { field: "country", equals: "IN" },
        show: ["gstNumber"]
      }
    },
    questions: [
      {
        questionId: "gstNumber",
        type: "text",
        label: "GST Number",
        validation: { required: true }
      },
      {
        questionId: "importLicense",
        type: "text",
        label: "Import License Number",
        conditions: {
          dependsOn: "businessType",
          equals: "EXPORT"
        }
      }
    ]
  });

  console.log("Dynamic questions seeded");
}
