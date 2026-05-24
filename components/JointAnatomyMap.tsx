"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import styles from "@/styles/JointAnatomyMap.module.css";

// Mapping of joint IDs to service IDs for navigation
const jointToServiceMap: Record<string, string> = {
  hipLeft: 'hip-replacement',
  hipRight: 'hip-replacement',
  kneeLeft: 'knee-replacement',
  kneeRight: 'knee-replacement',
  shoulderLeft: 'joint-care',
  shoulderRight: 'joint-care',
  elbowLeft: 'joint-care',
  elbowRight: 'joint-care',
  wristLeft: 'joint-care',
  wristRight: 'joint-care',
  ankleLeft: 'joint-care',
  ankleRight: 'joint-care',
  // Add more mappings as needed
};

export default function JointAnatomyMap() {
  const router = useRouter();

  const handleJointClick = (jointKey: string) => {
    const serviceId = jointToServiceMap[jointKey];
    if (serviceId) {
      router.push(`/services?service=${serviceId}`);
    }
  };

  return (
    <motion.div
      className={styles.container}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 400"
        width="200"
        height="400"
        className={styles.svg}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        {/* Head */}
        <circle cx="100" cy="70" r="30" fill="#f0f0f0" />
        {/* Shoulders */}
        <circle
          cx="50"
          cy="130"
          r="15"
          fill="#ffcc00"
          className={styles.joint}
          onClick={() => handleJointClick('shoulderLeft')}
        />
        <circle
          cx="150"
          cy="130"
          r="15"
          fill="#ffcc00"
          className={styles.joint}
          onClick={() => handleJointClick('shoulderRight')}
        />
        {/* Elbows */}
        <circle
          cx="30"
          cy="200"
          r="12"
          fill="#66ccff"
          className={styles.joint}
          onClick={() => handleJointClick('elbowLeft')}
        />
        <circle
          cx="170"
          cy="200"
          r="12"
          fill="#66ccff"
          className={styles.joint}
          onClick={() => handleJointClick('elbowRight')}
        />
        {/* Wrists */}
        <circle
          cx="20"
          cy="260"
          r="10"
          fill="#ff6699"
          className={styles.joint}
          onClick={() => handleJointClick('wristLeft')}
        />
        <circle
          cx="180"
          cy="260"
          r="10"
          fill="#ff6699"
          className={styles.joint}
          onClick={() => handleJointClick('wristRight')}
        />
        {/* Torso */}
        <rect x="70" y="130" width="60" height="150" fill="#e6e6e6" />
        {/* Hips */}
        <circle
          cx="70"
          cy="300"
          r="20"
          fill="#99ff99"
          className={styles.joint}
          onClick={() => handleJointClick('hipLeft')}
        />
        <circle
          cx="130"
          cy="300"
          r="20"
          fill="#99ff99"
          className={styles.joint}
          onClick={() => handleJointClick('hipRight')}
        />
        {/* Knees */}
        <circle
          cx="70"
          cy="350"
          r="15"
          fill="#ff9966"
          className={styles.joint}
          onClick={() => handleJointClick('kneeLeft')}
        />
        <circle
          cx="130"
          cy="350"
          r="15"
          fill="#ff9966"
          className={styles.joint}
          onClick={() => handleJointClick('kneeRight')}
        />
        {/* Ankles */}
        <circle
          cx="70"
          cy="390"
          r="12"
          fill="#cc66ff"
          className={styles.joint}
          onClick={() => handleJointClick('ankleLeft')}
        />
        <circle
          cx="130"
          cy="390"
          r="12"
          fill="#cc66ff"
          className={styles.joint}
          onClick={() => handleJointClick('ankleRight')}
        />
      </svg>
    </motion.div>
  );
}
