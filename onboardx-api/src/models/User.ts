import mongoose, { Schema, Document } from 'mongoose';

export type UserRole = "USER" | "ANALYST" | "QC";

export interface IUSER extends Document {
    email: string;
    password: string;
    role: UserRole;
    name?: string
}

const userSchema = new Schema<IUSER>({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["USER", "ANALYST", "QC", "ADMIN"],
        required: true
    }
});

export const User = mongoose.model<IUSER>("User", userSchema);