import mongoose, { Schema, Document } from 'mongoose';

export type UserRole = "USER" | "ANALYST" | "QC";

export interface IUSER extends Document {
    username: string;
    passwordHash: string;
    role: UserRole;
}

const userSchema = new Schema<IUSER>({
    username: {
        type: String,
        unique: true,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["USER", "ANALYST", "QC"],
        required: true
    }
});

export const User = mongoose.model<IUSER>("User", userSchema);