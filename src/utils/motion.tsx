import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { pageTransition, fadeUp } from '@/animations/variants';
import { cn } from './cn';

interface Props extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function PageTransition({ children, className, ...props }: Props) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={cn('w-full', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ children, className, ...props }: Props) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
