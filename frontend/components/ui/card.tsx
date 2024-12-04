import React, { ReactNode } from 'react';

export const Card: React.FC<{ className?: string; children: ReactNode }> = ({ className, children }) => (
  <div className={`border rounded-lg shadow-lg p-4 ${className}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="font-semibold text-xl">
    {children}
  </div>
);

export const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-bold">{children}</h2>
);

export const CardContent: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`mt-2 ${className}`}>
    {children}
  </div>
);
