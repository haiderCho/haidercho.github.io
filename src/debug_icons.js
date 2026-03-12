import * as SiIcons from 'react-icons/si';

const iconsToCheck = [
  'SiPython', 'SiPytorch', 'SiScikitlearn', 'SiNumpy', 'SiPandas',
  'SiJavascript', 'SiTypescript', 'SiReact', 'SiNextdotjs', 'SiTailwindcss',
  'SiNodedotjs', 'SiPostgresql', 'SiMongodb', 'SiDocker', 'SiGit', 'SiGithub',
  'SiFigma', 'SiCsharp', 'SiDotnet', 'SiFastapi', 'SiFlask', 'SiOpenai'
];

iconsToCheck.forEach(icon => {
  if (SiIcons[icon]) {
    console.log(`[OK] ${icon}`);
  } else {
    console.log(`[FAIL] ${icon}`);
  }
});
