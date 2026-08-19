export interface PedometerApp {
  name: string;
  bestForShort: string; // used in the at-a-glance table
  bestForLong: string; // used in the section subheading
  heading: string;
  appStoreUrl: string;
  body: string[];
  why: string[];
  verdict: string; // used in the "which app is best" summary
}

export const pedometerApps: PedometerApp[] = [
  {
    name: 'Pedometer++',
    bestForShort: 'Detailed everyday tracking',
    bestForLong: 'users who want a mature and feature-rich step tracker.',
    heading: 'Pedometer++: Best all-around pedometer app',
    appStoreUrl: 'https://apps.apple.com/us/app/pedometer/id712286167',
    body: [
      'Pedometer++ is one of the most established names in this category. It focuses on reviewing step count, walking distance, active calories, and related data across iPhone and Apple Watch.',
      'It also supports custom step goals, progress tracking over time, graphs, and badges that add a bit of motivation without turning the app into a full social platform.',
    ],
    why: [
      'Strong iPhone and Apple Watch support',
      'Step count, distance, and calories',
      'Custom goals',
      'Historical graphs',
      'Badges and motivation features',
      'Good all-around balance',
    ],
    verdict: 'if you want a strong all-around tracking app.',
  },
  {
    name: 'Senda',
    bestForShort: 'Sharing steps and walks',
    bestForLong: 'people who want to turn step data into something visual and shareable.',
    heading: 'Senda: Best pedometer for sharing your steps',
    appStoreUrl: 'https://apps.apple.com/at/app/senda-track-share-steps/id6773571740',
    body: [
      'Senda is different from the usual step counter app. Instead of only showing your walking data as numbers and charts, it lets you use Apple Health step data inside a built-in photo editor.',
      'You can select a day, a range of dates, a saved period, or a goal streak, then place that step data on top of your own photos, videos, or Live Photos. It also includes a walking calendar, widgets, goals, collages, and custom step stickers.',
      'One of the biggest advantages is that you do not need to manually start a workout. If the data already exists in Apple Health, you can use it later.',
    ],
    why: [
      'Uses existing Apple Health data',
      'Built specifically for sharing steps',
      'Photo and video-based step sharing',
      'Collages with up to 6 media items',
      'Home Screen and Lock Screen widgets',
      'Date range selection and saved ranges',
      'Useful as a visual walking journal',
    ],
    verdict: 'if you want to share steps, create visual posts from your walking data, or combine steps with photos and videos.',
  },
  {
    name: 'StepsApp',
    bestForShort: 'Streaks, challenges, and motivation',
    bestForLong: 'people who stay active through goals, streaks, and friendly competition.',
    heading: 'StepsApp: Best for motivation and social features',
    appStoreUrl: 'https://apps.apple.com/us/app/stepsapp-pedometer/id1037595083',
    body: [
      'StepsApp positions itself as a step counter that helps people build healthier habits. It includes automatic step tracking, daily goals, streaks, leaderboards, group challenges, widgets, and Apple Watch support.',
      'It is a good option if you want walking to feel more gamified or social.',
    ],
    why: [
      'Automatic step tracking',
      'Daily goals and streaks',
      'Group challenges',
      'Leaderboards',
      'Apple Health integration',
      'Apple Watch support',
      'Widgets and analytics',
    ],
    verdict: 'if motivation, streaks, and social competition matter most.',
  },
  {
    name: 'Pacer',
    bestForShort: 'Walking plans and community',
    bestForLong: 'users who want something closer to a complete walking fitness app.',
    heading: 'Pacer: Best for walking plans and community',
    appStoreUrl: 'https://apps.apple.com/us/app/pacer-pedometer-step-counter/id600446812',
    body: [
      'Pacer goes beyond a simple pedometer. In addition to step tracking, it emphasizes motivation, community, walking challenges, and personalized plans.',
      'That makes it a stronger fit for people who want an app that actively pushes them toward a fitness goal, rather than simply displaying the data they already have.',
    ],
    why: [
      'Step and distance tracking',
      'Walking challenges',
      'Community features',
      'Personalized plans',
      'Fitness-oriented positioning',
      'Good for motivation',
    ],
    verdict: 'if you want a more fitness-oriented walking app.',
  },
  {
    name: 'ActivityTracker',
    bestForShort: 'Classic activity tracking',
    bestForLong: 'people who want clear daily activity stats without too much extra complexity.',
    heading: 'ActivityTracker: Best for traditional activity tracking',
    appStoreUrl: 'https://apps.apple.com/us/app/activitytracker-pedometer/id993667592',
    body: [
      'ActivityTracker focuses on the fundamentals: steps, active calories, distance, active time, and flights climbed. It works with iPhone and Apple Watch and presents the data in a more classic activity-tracking format.',
      'If you want a straightforward health and fitness app with solid daily tracking, this one is easy to consider.',
    ],
    why: [
      'Tracks steps, distance, and calories',
      'Includes active time and flights climbed',
      'iPhone and Apple Watch support',
      'Clear everyday activity focus',
      'Simple and practical',
    ],
    verdict: 'if you want traditional activity tracking.',
  },
  {
    name: 'Steps - Simple Pedometer',
    bestForShort: 'Minimalism',
    bestForLong: 'users who want the lightest and simplest experience possible.',
    heading: 'Steps - Simple Pedometer: Best minimalist step counter',
    appStoreUrl: 'https://apps.apple.com/us/app/steps-simple-pedometer/id1602546738',
    body: [
      'As the name suggests, Steps - Simple Pedometer focuses on simplicity. It tracks steps, lets you view distance, supports a customizable daily goal, and includes Home Screen and Lock Screen widgets.',
      'This is the kind of app for someone who wants a clean interface and does not need a lot of extra features.',
    ],
    why: [
      'Very simple interface',
      'Custom daily goal',
      'Distance tracking',
      'Home Screen widget',
      'Lock Screen widget',
      'Good for minimalists',
    ],
    verdict: 'if you want the cleanest and simplest option.',
  },
  {
    name: 'Duffy',
    bestForShort: 'Apple Watch step complications',
    bestForLong: 'Apple Watch users who mainly want their step count visible on the watch face.',
    heading: 'Duffy: Best for Apple Watch complications',
    appStoreUrl: 'https://apps.apple.com/us/app/duffy-steps-complication/id1207581673',
    body: [
      'Duffy is a more focused app. Its main appeal is quick access to your step count through an Apple Watch complication. It also supports daily goal progress and related stats like distance and flights climbed.',
      'If your main need is seeing your steps at a glance on the watch, Duffy fills that niche well.',
    ],
    why: [
      'Apple Watch-first use case',
      'Step complication on the watch face',
      'Daily goal progress',
      'Distance and flights climbed',
      'Focused and lightweight concept',
    ],
    verdict: 'if your priority is Apple Watch complications.',
  },
];
