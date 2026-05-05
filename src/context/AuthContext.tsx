import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserRole } from '@/src/types';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock auto-login for development
  useEffect(() => {
    const timer = setTimeout(() => {
      // setUser({
      //   uid: '123',
      //   email: 'student@uni.edu',
      //   displayName: 'Uni Student',
      //   role: UserRole.STUDENT,
      //   createdAt: new Date().toISOString()
      // });
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const signIn = () => {
    setUser({
      uid: '123',
      email: 'student@uni.edu',
      displayName: 'Uni Student',
      role: UserRole.STUDENT,
      createdAt: new Date().toISOString()
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
