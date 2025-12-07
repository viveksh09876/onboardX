import bcrypt from 'bcryptjs';
import { User } from '../models/User';

//function to save dummy users in db
export async function seedUsers() {
    const count = await User.countDocuments();

    if (count > 0) {
        return;
    }

    const users = [
        { username: "user1", password: 'password', role: "USER"},
        { username: "analyst1", password: 'password', role: "ANALYST"},
        { username: "qc1", password: 'password', role: "QC"}
    ];

    for (const u of users) {
        const passwordHash = await bcrypt.hash(u.password, 10);
        await User.create({
            username: u.username,
            passwordHash,
            role: u.role
        });
    }

    console.log("Dummy users created")
}