import bcrypt from "bcryptjs";
import { User } from "../models/User";

export async function seedUsers() {
  const users = [
    { email: "user1@test.com", password: "password", role: "USER", name: "user1" },
    { email: "analyst1@test.com", password: "password", role: "ANALYST", name: "analyst1" },
    { email: "qc1@test.com", password: "password", role: "QC", name: "qc1" }
  ];

  for (const u of users) {
    const exists = await User.findOne({ email: u.email });
    if (exists) {
      console.log(`User already exists: ${u.email}`);
      continue;
    }

    const hashed = await bcrypt.hash(u.password, 10);
    await User.create({
      email: u.email,
      password: hashed,
      role: u.role,
      name: u.name
    });

    console.log("Created user:", u.email);
  }
}
