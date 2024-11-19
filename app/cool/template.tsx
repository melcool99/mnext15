'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
export default function CoolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-16 flex flex-col gap-4">
      <nav className="flex items-center gap-4">
        <Link href="/cool">Dashboard</Link>
        <Link href="/cool/settings">Settings</Link>
        <Link href="/cool/profile">Profile</Link>
      </nav>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
