import ApplicationVersion from "../models/ApplicationVersion";

export async function seedApplicationVersion() {
  const existing = await ApplicationVersion.countDocuments();

  // Only seed if database is empty (safe for dev)
  if (existing > 0) {
    console.log("ApplicationVersion seed skipped — existing entries found");
    return;
  }

  const sample = {
    applicationId: "app-123",
    version: 1,
    formData: {
      personal: {
        firstName: "John",
        lastName: "Doe",
        age: 30
      },
      business: {
        businessType: "SOLE_PROPRIETOR",
        country: "IN"
      },
      teams: {
        employees: 10
      },
      products: {
        productList: ["Product A", "Product B"]
      }
    },
    status: "SUBMITTED",
    createdBy: null, // can be replaced with seed user id later
    analystComments: null,
    qcComments: null,
    metadata: {
      backendTag: "sample-auto-generated",
      createdForTesting: true
    }
  };

    const doc = new ApplicationVersion(sample);
    await doc.save();

  console.log("Sample ApplicationVersion seeded successfully");
}
