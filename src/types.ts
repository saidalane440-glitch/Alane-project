export enum UserRole {
  STUDENT = 'student',
  ADMIN = 'admin',
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  createdAt: string;
}

export interface FileItem {
  id: string;
  name: string;
  type: string; // e.g., 'document', 'video', 'image', 'other'
  size: number;
  url: string;
  description?: string;
  category: string;
  ownerId: string;
  createdAt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}
