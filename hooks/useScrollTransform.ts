import { useScroll, useTransform, MotionValue } from "framer-motion";

/**
 * Hook to create a dynamic transform based on scroll position.
 *
 * @param inputRange - The range of scroll values (e.g., [start, mid, end]).
 * @param outputRange - The corresponding transformed values (e.g., ["startValue", "midValue", "endValue"]).
 * @returns A reactive MotionValue that transforms based on scroll position.
 */

export const useScrollTransform = <T>(
    inputRange: number[], // Can accept any number of input points
    outputRange: T[] // Can accept any number of output points
  ): MotionValue<T> => {
  const { scrollY } = useScroll(); // Get the scroll position
  return useTransform(scrollY, inputRange, outputRange); // Map scroll to transformed values
};
