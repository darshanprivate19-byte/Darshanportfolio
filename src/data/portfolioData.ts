import { Project, Service, SkillGroup, ProcessStep, CodeRepo } from '../types';

export const HERO_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuBmZ1hQoURWtiv-1uP29zmRVQX736yn4iQdkfDjLLDy7NvW7qxeZyWewDZEwk6wAWLti5_S83ASJ2URFmq75JPvJGPGeVLZJ8sjX5iKRuPnYBuugTxhKlYBSlGyTQEmlfVqHEKJO0OWj_aeE10s9BIUHuWOILx8q7NlKI9D3ZRZUs3O2vfaIVXqWzgAa0bbPx04PXFrrILLhTfYEbbdnwU8R4ATH8uOVn_ICV2jC5ZLff2JNHzQm8LR";

export const HERO_MEDIA = "https://lh3.googleusercontent.com/aida-public/AB6AXuBmZ1hQoURWtiv-1uP29zmRVQX736yn4iQdkfDjLLDy7NvW7qxeZyWewDZEwk6wAWLti5_S83ASJ2URFmq75JPvJGPGeVLZJ8sjX5iKRuPnYBuugTxhKlYBSlGyTQEmlfVqHEKJO0OWj_aeE10s9BIUHuWOILx8q7NlKI9D3ZRZUs3O2vfaIVXqWzgAa0bbPx04PXFrrILLhTfYEbbdnwU8R4ATH8uOVn_ICV2jC5ZLff2JNHzQm8LR";

export const EDIT_BAY_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDZdn_y3Fsc0vv600YRo5y3-IzwEhxoZZOGo5m3kTzfwv2AUXA4IqaE5nrs04TMi3jSAhuLhitpYCBACtW3KuE4ua71rXMSK4UMsCpF_iRkjUpnwpcqSIW2wrWh0NvRzOAaJsO7EmBQ0YKcLWQLxKcCa5uHnPjKmiHxWRP0seEwQ6wP3WvVH-eXO5ppl-SacgtqO8lfV1lHsJwgx_Fb5xk2hMLNal1hG093yGzjlsRkIO_SMWQlKz8B";

export const PROJECTS: Project[] = [
  {
    id: 'motion-experiments',
    number: '01',
    title: 'Motion Design Experiments',
    category: 'motion',
    categoryLabel: 'MOTION DESIGN',
    tool: 'ADOBE AFTER EFFECTS',
    badge: 'FEATURED EXPLORATION',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo68VhhSAsSVZ5c8-ty2TpXs30VQ5Fm1yzmqi_1UljAg3_uRp1biurAZZAX19DXUTyAhnrUu1qjmbALTR4esX_axwlRJZQ_-aCR57LLa-1C7A8vBBNjJsnYnWfsuZmd4AflwlfePc0U7NMx5KdepzdHtDinxNy9qqyKKv8z-lS2s4167AgSvC4EHyMXfbylzKV1QfnVA85l1DS3xDhPsgEL9gX1AhehIPHOUJSzCPwOwfJdnR5UiR0',
    shortDesc: 'Experiments exploring animation, timing, typography, transitions and visual composition. Pushing spatial camera movements and kinetic curves.',
    fullDesc: 'A comprehensive visual research initiative exploring the outer boundaries of spatial typography, kinetic hierarchy, and camera movement within Adobe After Effects. Focuses on custom speed graph curves to achieve natural momentum, multi-plane depth layering, and tactile camera shake emulation.',
    tags: ['Kinetic Type', 'Easing Curves', 'Spatial Layout', 'AE 2024'],
    specs: {
      resolution: '3840 x 2160 (4K UHD)',
      frameRate: '60 FPS Ultra-Smooth',
      aspectRatio: '16:9 Cinema Wide',
      software: 'Adobe After Effects 2024, Cinema 4D Lite',
      deliverable: 'ProRes 422 HQ / Alpha Kinetic MOGRTs'
    },
    featured: true
  },
  {
    id: 'video-editing',
    number: '02',
    title: 'Video Editing',
    category: 'editorial',
    categoryLabel: 'VIDEO EDITING',
    tool: 'PREMIERE PRO & AFTER EFFECTS',
    badge: '24 FPS CUT TIMELINE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZdn_y3Fsc0vv600YRo5y3-IzwEhxoZZOGo5m3kTzfwv2AUXA4IqaE5nrs04TMi3jSAhuLhitpYCBACtW3KuE4ua71rXMSK4UMsCpF_iRkjUpnwpcqSIW2wrWh0NvRzOAaJsO7EmBQ0YKcLWQLxKcCa5uHnPjKmiHxWRP0seEwQ6wP3WvVH-eXO5ppl-SacgtqO8lfV1lHsJwgx_Fb5xk2hMLNal1hG093yGzjlsRkIO_SMWQlKz8B',
    shortDesc: 'Editing experiments focused on pacing, storytelling, transitions, sound and visual rhythm. Synchronizing impact cuts directly to musical drops.',
    fullDesc: 'Editorial rhythm study analyzing how audio frequencies, bass transients, and vocal pauses dictate cut points. Explores match-cutting across contrasting motion vectors, whip pans, and dynamic optical flow re-timing to build tension and hold viewer focus without fatigue.',
    tags: ['Rhythm & Pacing', 'Sound Design Sync', 'Color Grade'],
    specs: {
      resolution: '4096 x 1716 (DCI 2.39:1 Anamorphic)',
      frameRate: '24.00 FPS Cinematic Standard',
      aspectRatio: '2.39:1 Panavision Scope',
      software: 'Premiere Pro, DaVinci Resolve Studio',
      deliverable: 'Master DCP & Web Delivery Packages'
    }
  },
  {
    id: 'reference-recreation',
    number: '03',
    title: 'Reference Recreation',
    category: 'motion',
    categoryLabel: 'MOTION DESIGN',
    tool: 'ADOBE AFTER EFFECTS',
    badge: 'AE 3D COMP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBufgqWpPD440P_K_3n4D0ggA9R1M9vMFtyPo8gTydNwXnvF4I2tBbWfBQQ9dVwMWeCjKuOxoeiDYOieUpUww9IKPwNfn5rA2uzLJamUbbQjxK2-TrjfQ2hsoccTuRnlhLO4ZHhI1TlNS4SgO_8XtPDAMkQwPNrNiqGFRBspAryHnpb3XU2weC6W5WBbu4l0YTWC0mCVJOZx9r23I7WL9NnXyI3uVdlTvBFW2qC5HZ4GXAXJzXR5ADU',
    shortDesc: 'Recreating visual scenes from references to better understand animation, composition and visual structure within complex After Effects compositions.',
    fullDesc: 'Reverse-engineering commercial broadcast title sequences and film intros. Analyzing the exact lens focal lengths, lighting falloff, particle emitter physics, and tracking markers used in benchmark pieces to replicate them from scratch in After Effects native toolsets.',
    tags: ['Scene Deconstruction', 'Particle Worlds', 'Camera Rigs'],
    specs: {
      resolution: '1920 x 1080 (FHD Master)',
      frameRate: '24 FPS',
      aspectRatio: '16:9 Broadcast',
      software: 'After Effects, Trapcode Particular, Optical Flares',
      deliverable: 'AEP Project Archive & Breakdown Reel'
    }
  },
  {
    id: 'c-graphics-editor',
    number: '04',
    title: '2D Graphics Editor',
    category: 'code',
    categoryLabel: 'PROGRAMMING',
    tool: 'C LANGUAGE',
    badge: 'TERMINAL RASTER',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd2qIEsUioa9UEjCLnqKEkjLMP619Z5A-5di7CxYfldZ0EWgrS21JYeH3pSOP4UcfsotzNCrT5XBfsDrjDlQafFuCgIUlEc4SsphtP5Sv4XSn90Sw4Bt6zzQjphg4J-feOcy42hnJxcCB-4vhj0EXAHWD10_xiiqiLOEngoXvB8hGBdua4T6qdyz-pupxJFYf8NnPYy2gbXwNgbf5Y_8JcI5LxyXHbQWJc32tVA-cEvbhzcvq0CJpO',
    shortDesc: 'A C-based 2D Graphics Editor using a character-array canvas and menu-driven interaction. Explores algorithm design and pixel math from the ground up.',
    fullDesc: 'A low-level terminal raster graphics editor developed in C. Employs a 2D matrix buffer to render rasterized shapes, Bresenham line algorithms, flood-fill bucket operations, and custom ASCII glyph brushes directly in the terminal interface without external graphics APIs.',
    tags: ['C Language', 'ASCII Canvas', 'Algorithm Design'],
    specs: {
      resolution: '80 x 24 Monospace Matrix',
      frameRate: 'Instantaneous CPU Raster',
      aspectRatio: 'Terminal Standard',
      software: 'GCC Compiler, Make, GDB',
      deliverable: 'CLI Binary & Source Code'
    },
    githubUrl: 'https://github.com/darshanprivate19-byte'
  },
  {
    id: 'portfolio-for-c',
    number: '05',
    title: 'Portfolio for C',
    category: 'code',
    categoryLabel: 'WEB DEVELOPMENT',
    tool: 'HTML & CSS',
    badge: 'FRONTEND ARCHIVE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd2qIEsUioa9UEjCLnqKEkjLMP619Z5A-5di7CxYfldZ0EWgrS21JYeH3pSOP4UcfsotzNCrT5XBfsDrjDlQafFuCgIUlEc4SsphtP5Sv4XSn90Sw4Bt6zzQjphg4J-feOcy42hnJxcCB-4vhj0EXAHWD10_xiiqiLOEngoXvB8hGBdua4T6qdyz-pupxJFYf8NnPYy2gbXwNgbf5Y_8JcI5LxyXHbQWJc32tVA-cEvbhzcvq0CJpO',
    shortDesc: 'An early web-development project exploring the process of creating a personal digital experience, responsive structure, and custom styling.',
    fullDesc: 'Foundational front-end engineering exploration establishing responsive grid systems, typographic scales, and CSS-driven interaction states. Demonstrates the bridge between graphic design principles and digital web architecture.',
    tags: ['Responsive Layout', 'Personal Archive', 'CSS Motion'],
    specs: {
      resolution: 'Fully Fluid Responsive',
      frameRate: '60 FPS GPU-accelerated CSS',
      aspectRatio: 'Adaptive Multi-Device',
      software: 'HTML5, Modern CSS, Vanilla JS',
      deliverable: 'Static Web Application'
    },
    githubUrl: 'https://github.com/darshanprivate19-byte'
  }
];

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'VIDEO EDITING',
    tags: 'Pacing • Sync • Narrative',
    description: 'Storytelling through pacing, cuts, rhythm, transitions, sound and visual flow. Constructing narratives that hold attention from first frame to close.'
  },
  {
    number: '02',
    title: 'MOTION DESIGN',
    tags: 'Kinetic • Easing • Identity',
    description: 'Creating movement using typography, shapes, transitions, effects and animation in Adobe After Effects. Giving static branding energetic life.'
  },
  {
    number: '03',
    title: 'VISUAL RECREATION',
    tags: 'Deconstruction • Simulation',
    description: 'Breaking down high-end commercial references and rebuilding visual scenes in After Effects to master complex 3D space, camera rigs, and particles.'
  },
  {
    number: '04',
    title: 'REFERENCE ANALYSIS',
    tags: 'Composition • Eye-Trace • Rhythm',
    description: 'Understanding composition, timing, movement and visual structure from industry references to formulate clean editorial blueprints before execution.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    number: '01',
    title: 'EDITORIAL CORE',
    icon: 'movie_filter',
    skills: [
      {
        name: 'Adobe After Effects',
        description: 'Kinetic typography, shape animation, speed graphs, camera navigation, visual recreations.',
        featured: true
      },
      {
        name: 'Video Editing',
        description: 'Narrative pacing, match cuts, beat alignment, speed ramping, storytelling flow.',
        featured: true
      },
      {
        name: 'Motion Design Fundamentals',
        description: '12 principles of animation, anticipation, follow-through, spatial weight and easing.'
      }
    ]
  },
  {
    number: '02',
    title: 'ANALYSIS & DIRECTION',
    icon: 'insights',
    skills: [
      {
        name: 'Visual Scene Recreation',
        description: 'Frame breakdown of industry motion reels and meticulous rebuilding in sandbox setups.'
      },
      {
        name: 'Reference Analysis',
        description: 'Dissecting lighting, typography hierarchies, focal points, and viewer eye-guidance.'
      },
      {
        name: 'Creative Direction',
        description: 'Moodboarding, style exploration, color schemes, and pacing architecture.'
      }
    ]
  },
  {
    number: '03',
    title: 'TECH & MUSICAL EAR',
    icon: 'terminal',
    skills: [
      {
        name: 'C Programming',
        description: 'Memory pointers, algorithm design, character matrix manipulation, logic flow.'
      },
      {
        name: 'HTML / Web Development',
        description: 'Responsive layouts, modern semantic markup, responsive design principles.'
      },
      {
        name: 'Guitar — Intermediate',
        description: '“Ear for rhythm in music translates directly to cuts on the beat and harmonic editorial timing.”',
        quote: true
      }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    stageCode: 'STAGE_A',
    title: 'UNDERSTAND',
    description: 'Understand the core concept, reference material, narrative objective or client brief before touching the software.',
    footerTag: 'DISCOVERY // ALIGNMENT'
  },
  {
    number: '02',
    stageCode: 'STAGE_B',
    title: 'BREAK DOWN',
    description: 'Analyze composition, movement pathways, timing, typography hierarchy, and visual elements frame-by-frame.',
    footerTag: 'ANALYTIC DECONSTRUCTION'
  },
  {
    number: '03',
    stageCode: 'STAGE_C',
    title: 'BUILD',
    description: 'Create and animate the scene using advanced editing pacing and motion-design techniques in After Effects.',
    footerTag: 'COMPOSITION // ANIMATION'
  },
  {
    number: '04',
    stageCode: 'STAGE_D',
    title: 'REFINE',
    description: 'Polish timing, ease transitions, tweak micro-details, synchronize sound beds, and master the overall visual quality.',
    footerTag: 'AUDIO SYNC // POLISH'
  }
];

export const CODE_REPOS: CodeRepo[] = [
  {
    number: '01',
    badge: 'C / CLI APPLICATION',
    name: 'Acp-mini-projectt-',
    description: 'A C-based 2D Graphics Editor using a character-array canvas and menu-driven interaction. Generates lines, primitives, and ASCII visual buffers.',
    techTag: 'C // TERMINAL RASTER',
    githubUrl: 'https://github.com/darshanprivate19-byte',
    borderAccent: '#ff5722'
  },
  {
    number: '02',
    badge: 'FRONTEND REPOSITORY',
    name: 'portfolio-for-c',
    description: 'An early web-development project exploring the process of structuring HTML semantics, CSS rules, and digital storytelling layouts.',
    techTag: 'HTML // CSS // LAYOUT',
    githubUrl: 'https://github.com/darshanprivate19-byte',
    borderAccent: '#353437'
  }
];

export const CONTACT_INFO = {
  email: 'darshanprivate19@gmail.com',
  phone: '+91 73539 23325',
  phoneRaw: '+917353923325',
  github: 'https://github.com/darshanprivate19-byte',
  responseTime: '< 24 HOURS',
  location: 'India / Remote Worldwide'
};
