import React from 'react';

// Coffee House App Images
// Place these images inside your /public/images folder
const storyboardOne = '/images/IMG_5615.jpeg';
const storyboardTwo = '/images/IMG_5614.jpeg';
const wireframeImage = '/images/IMG_5613.jpeg';

export default function BryceCampbellPortfolio() {
  const [showProjectsPage, setShowProjectsPage] = React.useState(false);

  const projects = [
    {
      title: 'Dog Walker App',
      description:
        'A mobile app that helps pet owners quickly find trusted dog walkers, schedule walks, and track services in real time.',
      steps: [
        {
          title: 'Step 1: Empathize',
          text: 'Interviewed pet owners about trust and scheduling challenges.'
        },
        {
          title: 'Step 2: Define',
          text: 'Identified frustration with unreliable booking systems.'
        },
        {
          title: 'Step 3: Ideate',
          text: 'Sketched features for easy booking and walker profiles.'
        },
        {
          title: 'Step 4: Prototype',
          text: 'Built low-fidelity and high-fidelity mobile screens.'
        },
        {
          title: 'Step 5: Test',
          text: 'Conducted usability studies to improve navigation and booking flow.'
        },
        {
          title: 'Step 6: Iterate',
          text: 'Simplified onboarding and added clearer scheduling tools.'
        },
        {
          title: 'Step 7: Launch Ready',
          text: 'Created accessible, user-friendly final designs.'
        }
      ]
    },
    {
      title: 'Paleo Art Gallery Check-In App',
      description:
        'An all-in-one gallery experience platform for exhibition discovery, virtual engagement, and event check-ins.',
      steps: [
        {
          title: 'Step 1: Empathize',
          text: 'Researched gallery visitors, collectors, and managers.'
        },
        {
          title: 'Step 2: Define',
          text: 'Found gaps between event discovery and management tools.'
        },
        {
          title: 'Step 3: Ideate',
          text: 'Designed an app combining discovery, AR experiences, and event management.'
        },
        {
          title: 'Step 4: Prototype',
          text: 'Created wireframes and interactive gallery flows.'
        },
        {
          title: 'Step 5: Test',
          text: 'Gathered feedback on navigation and event planning.'
        },
        {
          title: 'Step 6: Iterate',
          text: 'Improved clarity, accessibility, and event organization.'
        },
        {
          title: 'Step 7: Launch Ready',
          text: 'Delivered a clean and immersive gallery experience.'
        }
      ]
    },
    {
      title: 'Coffee House App',
      description:
        'A café ordering experience designed for busy commuters and teams who need fast, reliable coffee ordering with guaranteed pickup times.',
      steps: [
        {
          title: 'Step 1: Empathize',
          text:
            'Conducted interviews with morning commuters and discovered fear of being late prevented users from trusting pickup estimates.'
        },
        {
          title: 'Step 2: Define',
          text:
            'Commuters need a faster way to order complex coffee drinks with reliable pickup times.'
        },
        {
          title: 'Step 3: Ideate',
          text:
            'Used Crazy 8s exercises to brainstorm a Live Barista Progress feature and group ordering tools.'
        },
        {
          title: 'Step 4: Storyboards',
          text:
            'Created big-picture and close-up storyboards focused on quick group ordering experiences.',
          images: [
            '/mnt/data/IMG_5614.jpeg',
            '/mnt/data/IMG_5615.jpeg'
          ]
        },
        {
          title: 'Step 5: Low-Fidelity Wireframes',
          text:
            'Sketched paper wireframes to organize menu browsing, ordering, and notifications.',
          images: ['/mnt/data/IMG_5613.jpeg']
        },
        {
          title: 'Step 6: Prototype',
          text:
            'Designed digital wireframes with a Re-order Favorite button to speed up repeat purchases.'
        },
        {
          title: 'Step 7: Test & Iterate',
          text:
            'Improved visibility of alternative milk options and added haptic confirmation feedback after usability testing.'
        }
      ]
    }
  ];

  const handleViewProjects = () => {
    const overlay = document.getElementById('project-transition');
    const counter = document.getElementById('countdown-number');

    if (overlay && counter) {
      overlay.classList.remove('hidden');

      let count = 3;
      counter.innerHTML = String(count);

      const timer = setInterval(() => {
        count -= 1;
        counter.innerHTML = String(count);

        if (count === 0) {
          clearInterval(timer);
          overlay.classList.add('hidden');
          setShowProjectsPage(true);

          setTimeout(() => {
            document
              .getElementById('projects-page')
              ?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
              <span className="text-white text-2xl font-bold">BC</span>
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-wide">
                Bryce Campbell
              </h2>
              <p className="text-sm text-neutral-500">UX/UI Portfolio</p>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Bryce Campbell
          </h1>

          <p className="text-xl text-neutral-600 max-w-3xl leading-8">
            UX/UI Designer focused on creating simple, user-centered digital experiences through research, accessibility, usability testing, and visual design.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button
              onClick={handleViewProjects}
              className="bg-black text-white px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition"
            >
              View Projects
            </button>

            <button className="border border-black px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition">
              Contact Me
            </button>
          </div>
        </div>
      </header>

      <div
        id="project-transition"
        className="hidden fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center text-white"
      >
        <div className="relative w-20 h-20 border-2 border-white rounded-2xl flex items-center justify-center mb-8">
          <div className="absolute w-6 h-6 border-2 border-white rounded-md -left-3 top-3 bg-black"></div>
          <div className="absolute w-5 h-5 rounded-md bg-blue-500 right-[-10px] bottom-3"></div>
        </div>

        <p className="text-lg text-neutral-300 mb-3 tracking-wide">
          Opening Project
        </p>

        <div
          id="countdown-number"
          className="text-7xl font-bold animate-pulse"
        >
          3
        </div>
      </div>

      <section className="bg-black text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-10 shadow-2xl">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              UX Design Style Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { name: 'User Research', color: 'bg-blue-500' },
                { name: 'Wireframing', color: 'bg-red-500' },
                { name: 'Usability Testing', color: 'bg-green-500' },
                { name: 'Accessibility', color: 'bg-yellow-500 text-black' },
                { name: 'Prototyping', color: 'bg-purple-500' },
                { name: 'Figma', color: 'bg-pink-500' },
                { name: 'Visual Design', color: 'bg-orange-500' },
                { name: 'Competitive Audits', color: 'bg-cyan-500 text-black' }
              ].map((skill) => (
                <div
                  key={skill.name}
                  className={`${skill.color} rounded-2xl px-5 py-5 font-semibold text-center shadow-lg transition-transform hover:scale-105`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showProjectsPage && (
        <section
          id="projects-page"
          className="min-h-screen bg-neutral-950 text-white py-24 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold mb-4">
                Featured UX Case Studies
              </h2>

              <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
                Responsive UX/UI projects designed using the 7-step UX lifecycle.
              </p>
            </div>

            {projects.map((project) => (
              <div
                key={project.title}
                className="mb-24 bg-neutral-900 border border-neutral-800 rounded-[32px] p-10 shadow-2xl"
              >
                <div className="flex flex-col gap-10">
                  <div>
                    <h3 className="text-4xl font-bold mb-4">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 leading-8 mb-8 max-w-4xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {project.steps.map((step, index) => (
                      <div
                        key={index}
                        className="bg-neutral-800 rounded-3xl border border-neutral-700 overflow-hidden shadow-xl"
                      >
                        <div className="p-6">
                          <h4 className="text-2xl font-bold mb-3 text-blue-400">
                            {step.title}
                          </h4>

                          <p className="text-neutral-300 leading-7 mb-5">
                            {step.text}
                          </p>

                          {/* STEP 4 — STORYBOARDS */}
{step.title === 'Step 4: Storyboards' && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

    {/* FIRST BOX */}
    <div className="rounded-[28px] overflow-hidden bg-neutral-900 border border-neutral-700 shadow-2xl h-[420px]">
      <img
        src={storyboardOne}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* SECOND BOX */}
    <div className="rounded-[28px] overflow-hidden bg-neutral-900 border border-neutral-700 shadow-2xl h-[420px]">
      <img
        src={storyboardTwo}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

  </div>
)}

{/* STEP 5 — WIREFRAMES */}
{step.title === 'Step 5: Low-Fidelity Wireframes' && (
  <div className="mt-6">

    {/* LAST BOX */}
    <div className="rounded-[28px] overflow-hidden bg-neutral-900 border border-neutral-700 shadow-2xl h-[520px]">
      <img
        src={wireframeImage}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

  </div>
)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="bg-white border-t py-10 text-center">
        <h3 className="text-2xl font-semibold mb-3">Let’s Connect</h3>

        <p className="text-neutral-600 mb-4">
          Available for UX/UI design opportunities and collaborations.
        </p>

        <p className="font-medium">
          Bryce Campbell • UX/UI Designer
        </p>
      </footer>
    </div>
  );
}
