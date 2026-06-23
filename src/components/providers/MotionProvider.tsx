"use client";

import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Loads only the `domAnimation` feature bundle (~15KB) and provides it to every
 * `m.*` component below. Non-strict so legacy `motion.*` components still work
 * during the incremental migration. Mounted once near the root of the tree.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
