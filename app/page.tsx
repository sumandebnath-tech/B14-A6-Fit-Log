'use client';

import React, { useState } from 'react';

const workouts = [
  {
    id: 1,
    title: 'BARBELL BENCH PRESS',
    category: ['CHEST', 'ARMS'],
    description: 'A compound press that builds chest thickness, triceps, and anterior delts from a stable bench.',
    equipment: 'Barbell, Bench',
    difficulty: 'Intermediate',
    sets: '4 sets',
    reps: '8-10 reps',
    duration: '25 min',
    calories: '180 kcal',
    rating: '4.6',
    instructions: [
      'Lie on the bench on the with eyes under the bar and feet planted.',
      'Unrack with locked elbows and lower the bar to mid-chest.',
      'Press up in a slight arc until elbows lock without bouncing.',
      'Keep shoulder blades pinched and a natural arch in the back.'
    ]
  },


  {
    id: 2,
    title: 'PULL-UP',
    category: ['BACK', 'ARMS'],
    description: 'A classic upper body pulling exercise focusing on the latissiums dorsi and biceps.',
    equipment: 'Pull-up Bar',
    difficulty: 'Intermediate',
    sets: '3 sets',
    reps: '6-8 reps',
    duration: '15 min',
    calories: '120 kcal',
    rating: '4.7',
    instructions: [
      'Grab the pull-up bar with an overhand grip wider than shoulder-width.',
      'Hang with fully extended arms and engaged core.',
      'Pull your chest up to the bar by driving elbows down.',
      'Lower yourself back down with control.'
    ]
  },
  
   {
    id: 3,
    title: 'BACK SQUAT',
    category: ['LEGS', 'CORE'],
    description: 'The king of lower body exercises targeting quads, glutes, and lower back.',
    equipment: 'Barbell, Rack',
    difficulty: 'Advanced',
    sets: '4 sets',
    reps: '5-6 reps',
    duration: '30 min',
    calories: '240 kcal',
    rating: '4.9',
    instructions: [
      'Position the bar across your upper back (traps).',
      'Unrack, step back, and set your feet shoulder-width apart .',
      'Squat down by pushing hips back and bending knees.',
      'Drive through your heels to return to the starting position.'
    ]
  },

   {
    id: 4,
    title: 'OVERHEAD PRESS',
    category: ['SHOULDERS', 'ARMS'],
    description: 'Build robust shoulder strength and stability by pressing overhead.',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    sets: '3 sets',
    reps: '8-10 reps',
    duration: '20 min',
    calories: '150 kcal',
    rating: '4.6',
    instructions: [
      'Hold the bar at collarbone level with hands just outside shoulders.',
      'Brace your core and squeeze your glutes.',
      'Press the bar straight up overhead, moving your head back slightly.',
      'Lock out overhead and return safely.'
    ]
  },

   {
    id: 5,
    title: 'DUMBBELL BICEP CURL',
    category: ['ARMS'],
    description: 'Isolation exercise to build bicep peak and arm size.',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    sets: '3 sets',
    reps: '10-12 reps',
    duration: '12 min',
    calories: '80 kcal',
    rating: '4.3',
    instructions: [
      'Hold dumbbells at your sides with palms facing forward.',
      'Keep your elbows locked close to your torso.',
      'Curl the weights upward while contracting your biceps.',
      'Lower slowly to the starting position.'
    ]
  },

   {
    id: 6,
    title: 'DUMBBELL BICEP CURL',
    category: ['ARMS'],
    description: 'Alternative variation focusing on hammer grip or alternate curls.',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    sets: '3 sets',
    reps: '10-12 reps',
    duration: '12 min',
    calories: '80 kcal',
    rating: '4.3',
    instructions: [
      'Maintain an upright posture with core engaged.',
      'Curl one dumbbell at a time or together with control.',
      'Squeeze at the top and lower smoothly.',
    ]
  },

   {
    id: 7,
    title: 'HOLLOW-BODY PLANK',
    category: ['CORE'],
    description: 'An advanced core stabilization hold that fires up your entire midsection.',
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    sets: '3 sets',
    reps: '45 sec hold',
    duration: '10 min',
    calories: '60 kcal',
    rating: '4.4',
    instructions: [
      'Lie on your back, lift shoulders and legs slightly off the floor.',
      'Press lower back flat into the ground.',
      'Hold the hollow position with tight abs.',
    ]
  },

   {
    id: 8,
    title: 'DUMBBELL BICEP CURL',
    category: ['ARMS'],
    description: 'Standard arm builder using dumbbells.',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    sets: '3 sets',
    reps: '10-12 reps',
    duration: '12 min',
    calories: '80 kcal',
    rating: '4.3',
    instructions: [
      'Keep upper arms stationary and curl weights upward.',
    ]
  },

   {
    id: 9,
    title: 'CONVENTIONAL DEADLIFT',
    category: ['BACK', 'LEGS', 'CORE'],
    description: 'Total body pulling power movement.',
    equipment: 'Barbell',
    difficulty: 'Advanced',
    sets: '3 sets',
    reps: '5 reps',
    duration: '25 min',
    calories: '260 kcal',
    rating: '4.8',
    instructions: [
      'Stand with feet hip-width apart under the barbell.',
      'Hinge at hips, grab the bar, flatten your back.',
      'Drive through floor and lock hips at the top.',
    ]
  },

   {
    id: 10,
    title: 'PUSH-UP',
    category: ['CHEST', 'ARMS','CORE'],
    description: 'Classic bodyweight push movement for upper body strength.',
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    sets: '3 sets',
    reps: '15 reps',
    duration: '10 min',
    calories: '90 kcal',
    rating: '4.5',
    instructions: [
      'Place hands shoulder-width apart in a plank position.',
      'Lower your chest to the floor, keeping elbows at a 45-degree angle.',
      'Push back up to starting position.'
    ]
  },

   {
    id: 11,
    title: 'WALKING LUNGE',
    category: ['LEGS', 'CORE'],
    description: 'Dynamic lower body movement focusing on unilateral leg strength.',
    equipment: 'Dumbbells (optional)',
    difficulty: 'Intermediate',
    sets: '3 sets',
    reps: '12 reps/leg',
    duration: '15 min',
    calories: '170 kcal',
    rating: '4.4',
    instructions: [
      'Step forward with one leg and lower hips until both knees are bent at 90 degrees.',
      'Push up and step forward with the other leg.'
    ]
  },

   {
    id: 12,
    title: 'RUSSIAN TWIST',
    category: ['CORE'],
    description: 'Rotational core exercise targeting obliques.',
    equipment: 'Medicine Ball',
    difficulty: 'Beginner',
    sets: '3 sets',
    reps: '20 reps',
    duration: '8 min',
    calories: '70 kcal',
    rating: '4.1',
    instructions: [
      'Sit on floor, lean back slightly, lift feet.',
      'Twist torso from side to side, touching the floor or weight.'
    ]
  }
];
















import Image from "next/image";

export default function Home() {
  return (
    /* 1. Main page container with dark background matching Figma theme */
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* 2. Navigation bar component containing logo and navigation links */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-800">

        {/* 3. Logo section with brand name FITLOG */}
        <div className="text-xl font-extrabold tracking-wider text-yellow-400">
          FITLOG
          </div>

          {/* 4. Navigation links for switching pages or sections */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <span className="cursor-pointer hover:text-white">Home</span>
            <span className="cursor-pointer hover:text-white">Workouts</span>
            <span className="cursor-pointer hover:text-white">My Plan</span>          
        </div>
      </nav>

      {/* 5. Hero section container for the main banner text and CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl">

          <div className="max-w-xl z-10">

            {/* 6. Main heading text: TRAIN WITH INTENT. LOG EVERY SET. */}
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4 text-white">
              Train with intent. Log every set.
            </h1>

            {/* 7. Description text explaining the purpose of Fit-Log */}
            <p className="text-slate-400 text-sm md:text-base mb-8">
              Fit-Log is a dark, no-nonsense gym companion app. Lift, lock it into today&apos;s plan, and watch the week&apos;s work add up. 
            </p>

            {/* 8. Call to action button to start logging workouts */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 front-bold px-6 py-3 rounded-lg transition-colors cursor-pointer shadow-lg">
              Get Started
            </button>
          </div>


        </div>
      </section>

      {/* Workout library section placeholder and grid layout */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-6 text-slate-200">THE LIBRARY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


          {/* Individual workout card component for Becch Press */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all">
            <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Strength</span>
            <h3 className="text-lg font-bold mt-2 text-white">Barbell Bench Press</h3>
            <p className="text-slate-400 text-xs mt-1">Chest & Triceps . 4 Sets * 8 Reps</p>
          </div>

          {/* Individual workout card component for Deadlift */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p5 hover:border-slate-700 transition-all">
            <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Strength</span>
            <h3 className="text-lg font-bold mt-2 text-white">Deadlift</h3>
            <p className="text-slate-400 text-xs mt-1">Back & Hamstrings . 3 Sets * 5 Reps</p>
          </div>

           {/* Individual workout card component for Incline Dumbbell Press */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p5 hover:border-slate-700 transition-all">
            <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Hypertrophy</span>
            <h3 className="text-lg font-bold mt-2 text-white">Incline Dumbbell Press</h3>
            <p className="text-slate-400 text-xs mt-1">Upper Chest . 3 Sets * 10 Reps</p>
          </div>

        </div>
      </section>

      {/* Daily workout logging section placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-6 text-slate-200">TODAY'S WORKOUT LOG</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <p className="text-slate-400 text-sm ">Logging interface and exercise tracking form will be rendered here</p>
        </div>
      </section>

      {/* Weekly progress and statistics section */}
      <section className="max-w-6xl mw-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-6 text-slate-200">WEEKLY PROGRESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-slate-400 text-xs font-semibold">TOTAL WORKOUTS</h3>
            <p className="text-2xl font-bold text-white mt-2">4 Sessions</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-slate-400 text-xs font-semibold">TOTAL VOLUME</h3>
            <p className="text-2xl font-bold text-white mt-2">12,450 kg</p> 
        </div>

         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-slate-400 text-xs font-semibold">STREAK</h3>
            <p className="text-2xl font-bold text-yellow-400 mt-2">3 Days</p> 
        </div>
      </div>
    </section>

    {/* Footer section */}
    <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
      <p>© 2026 Fit-Log. All rights reserved. Built with Next.js & Tailwind CSS.</p>
    </footer>
      </div>
  );
}
