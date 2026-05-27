const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\build\\.gemini\\antigravity-ide\\brain\\3dcd92fb-9c6f-43ab-abf5-0fc80f71d97b';

// Helper to ensure directory exists
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

const conditionsDir = path.join(__dirname, 'public', 'conditions');
const blogsDir = path.join(__dirname, 'public', 'blogs');
const servicesDir = path.join(__dirname, 'public', 'services');

ensureDirExists(conditionsDir);
ensureDirExists(blogsDir);
ensureDirExists(servicesDir);

const mappings = [
  // Physiotherapy images
  {
    src: 'physio_postop_rehab_indian_1779898331198.png',
    dest: path.join(conditionsDir, 'physio_postop_rehab.png')
  },
  {
    src: 'physio_sports_injury_indian_1779898350272.png',
    dest: path.join(conditionsDir, 'physio_sports_injury.png')
  },
  {
    src: 'physio_core_strengthening_indian_1779898367580.png',
    dest: path.join(conditionsDir, 'physio_core_strengthening.png')
  },
  // Blog images
  {
    src: 'blog_osteoarthritis_1779898465523.png',
    dest: path.join(blogsDir, 'blog_osteoarthritis.png')
  },
  {
    src: 'blog_acl_recovery_1779898484502.png',
    dest: path.join(blogsDir, 'blog_acl_recovery.png')
  },
  {
    src: 'blog_rotator_cuff_1779898502964.png',
    dest: path.join(blogsDir, 'blog_rotator_cuff.png')
  },
  {
    src: 'blog_plantar_fasciitis_1779898525398.png',
    dest: path.join(blogsDir, 'blog_plantar_fasciitis.png')
  },
  // Service images
  {
    src: 'service_knee_replacement_1779898766597.png',
    dest: path.join(servicesDir, 'service_knee_replacement.png')
  },
  {
    src: 'service_hip_replacement_1779898788698.png',
    dest: path.join(servicesDir, 'service_hip_replacement.png')
  },
  {
    src: 'service_arthroscopy_1779898810764.png',
    dest: path.join(servicesDir, 'service_arthroscopy.png')
  },
  {
    src: 'service_spine_care_1779898838763.png',
    dest: path.join(servicesDir, 'service_spine_care.png')
  },
  {
    src: 'fracture_wrist_1779878025223.png',
    dest: path.join(servicesDir, 'service_fracture.png')
  },
  {
    src: 'knee_osteoarthritis_1779877950765.png',
    dest: path.join(servicesDir, 'service_joint_care.png')
  },
  {
    src: 'spine_herniated_1779877612618.png',
    dest: path.join(servicesDir, 'service_spine_general.png')
  }
];

mappings.forEach(mapping => {
  const srcPath = path.join(srcDir, mapping.src);
  const destPath = mapping.dest;

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Successfully copied ${mapping.src} -> ${path.relative(__dirname, destPath)}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});
