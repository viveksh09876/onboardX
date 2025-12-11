import ReferenceData from "../models/ReferenceData";

export async function seedReferenceData() {
  const existing = await ReferenceData.countDocuments({ type: "COUNTRY" });
  if (existing > 0) {
    console.log("Reference data already exists");
    return;
  }

  const countries = [
    { type: "COUNTRY", code: "IN", name: "India" },
    { type: "COUNTRY", code: "US", name: "United States" },
    { type: "COUNTRY", code: "UK", name: "United Kingdom" },
    { type: "COUNTRY", code: "CA", name: "Canada" }
  ];

  await ReferenceData.insertMany(countries);
  console.log("Reference data seeded");
}
