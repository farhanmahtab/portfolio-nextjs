import type { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
