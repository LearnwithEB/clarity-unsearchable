"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { CubeLoader } from "@/components/ui/cube-loader"

export default function ClarityUnsearchablePage() {
  const { scrollYProgress } = useScroll()
  const bridgeY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const uncleY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const phonesY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div className="min-h-screen bg-[var(--bp-canvas)] text-[var(--bp-ink)] font-sans">
      {/* Intro Session Header */}
      <section className="bp-grid-soft border-b border-[var(--bp-grid)] bg-[var(--bp-canvas)] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="rounded-2xl border border-[var(--bp-grid)] bg-[var(--bp-panel-soft)] p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                <p className="bp-section-kicker">Session overview</p>
                <h1 className="text-3xl font-bold md:text-4xl">Clarity and the Unsearchable</h1>
                <p className="text-lg font-medium text-[var(--bp-ink-soft)]">
                  AI, Life's Blueprint, and Wisdom Technology Cannot Store
                </p>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  This session links generative AI, Dr King's "Life's Blueprint" speech, and the unsearchable wisdom elders carry. The goal is to help young builders prompt with clarity and build in a way that lifts others.
                </p>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Speakers</h3>
                  <ul className="space-y-2 text-sm text-[var(--bp-ink-soft)]">
                    <li>
                      <strong className="text-[var(--bp-ink)]">Eric Brown Jr.</strong> · Generative AI Solution Engineer
                    </li>
                    <li>
                      <strong className="text-[var(--bp-ink)]">Deacon Jesse Grier</strong> · 98-year-old community elder and deacon
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Agenda</h3>
                  <ol className="space-y-2 text-sm text-[var(--bp-ink-soft)]">
                    <li>1. Why AI amplifies intention</li>
                    <li>2. Dr King's Life's Blueprint as source code</li>
                    <li>3. Stories and insights from Deacon Grier</li>
                    <li>4. Interactive blueprint radar and drafting table</li>
                    <li>5. The Clarity Framework and Clarity App demo</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--bp-grid)]">
        <div className="absolute inset-0 bp-grid rounded-3xl opacity-50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)" }} />
        <HeroGeometric
          badge="AI Literacy · Generational Wisdom"
          title1="Clarity and the"
          title2="Unsearchable"
        />
        <div className="relative z-10 -mt-20 pb-8">
          <div className="mx-auto max-w-4xl px-4">
            <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-4 text-center">
              <p className="font-mono text-xs text-[var(--bp-ink-soft)]">
                AI literacy, generational wisdom, and the architecture of purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loader Band */}
      <section className="border-b border-[var(--bp-grid)] bg-[var(--bp-panel-soft)]/70 py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <CubeLoader />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="bp-section-kicker">Preparing the experience</p>
              <h2 className="text-2xl font-bold md:text-3xl">Before you prompt an AI, you prompt yourself.</h2>
              <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                This session pairs an interactive GenAI build with unsearchable wisdom from elders and the Life's Blueprint principles Dr King shared with students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        {/* Section A: The algorithm amplifies intention */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="bp-section-kicker mb-2">Core principle</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">The algorithm amplifies intention</h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                Artificial intelligence is a strong engine, but it has no steering wheel. It amplifies whatever you bring to it.
              </p>
              <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                Your prompts carry your values, your assumptions, your worldview. Before you scale, you must clarify. Before you build, you must understand what you're amplifying.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl md:h-80">
              <Image
                src="/images/algorithm-amplifies-intention.jpg"
                alt="Abstract representation of amplification"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section B: Information is searchable. Wisdom is not. */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-6">
            <div>
              <p className="bp-section-kicker mb-2">The distinction</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Information is searchable. Wisdom is not.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold">What AI can find</h3>
                <ul className="space-y-2 text-sm text-[var(--bp-ink-soft)]">
                  <li>• Historical facts and dates</li>
                  <li>• Published speeches and texts</li>
                  <li>• Patterns in data</li>
                  <li>• Answers to questions with known solutions</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold">What AI cannot find</h3>
                <ul className="space-y-2 text-sm text-[var(--bp-ink-soft)]">
                  <li>• The weight of experience in a voice</li>
                  <li>• The context of survival and resilience</li>
                  <li>• The unspoken lessons passed through generations</li>
                  <li>• The wisdom that lives in proximity to people</li>
                </ul>
              </div>
            </div>
            <blockquote className="border-l-4 border-[var(--bp-ink)] pl-6 font-serif text-lg italic text-[var(--bp-ink)]">
              "Some truth passes through memory, not algorithms. Transformation happens in proximity to people."
            </blockquote>
          </div>
        </section>

        {/* Section C: The source code – MLK at Barratt Junior High */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-xl md:h-80">
              <Image
                src="/images/mlk-barratt-junior-high.jpg"
                alt="Dr. Martin Luther King Jr. speaking"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="bp-section-kicker mb-2">The source code</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">MLK at Barratt Junior High</h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                On October 26, 1967, Dr. King delivered "What Is Your Life's Blueprint?" to students at Barratt Junior High School in Philadelphia. This speech was not about dreams deferred—it was about architecture. About building a life with intention.
              </p>
              <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                He gave them three principles. Three pillars. Three lines of code for a life well-lived.
              </p>
        </div>
          </div>
        </section>

        {/* Section D: The Life's Blueprint core principles */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-8">
            <div>
              <p className="bp-section-kicker mb-2">The blueprint</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Life's Blueprint: Three Core Principles</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-3 text-2xl font-bold text-[var(--bp-ink)]">I</div>
                <h3 className="mb-3 font-semibold">Principle of Dignity</h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  "Do not allow anybody to make you feel that you are nobody. Always feel that you count. Always feel that you have worth, and always feel that your life has ultimate significance."
                </p>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-3 text-2xl font-bold text-[var(--bp-ink)]">II</div>
                <h3 className="mb-3 font-semibold">Principle of Excellence</h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  "Set out to do your life's work so well that nobody could do it better. If it falls your lot to be a street sweeper, sweep streets like Michelangelo painted pictures."
                </p>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-3 text-2xl font-bold text-[var(--bp-ink)]">III</div>
                <h3 className="mb-3 font-semibold">Principle of Persistence</h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  "If you cannot fly, run. If you cannot run, walk. If you cannot walk, crawl. But by all means, keep moving."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: Unsearchable wisdom in the room */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div style={{ y: uncleY }} className="relative h-64 overflow-hidden rounded-xl md:h-80">
              <Image
                src="/images/uncle-portrait.jpg"
                alt="Deacon Jesse Grier"
                fill
                className="object-cover"
                style={{ filter: "sepia(0.3)" }}
              />
            </motion.div>
            <div>
              <p className="bp-section-kicker mb-2">Unsearchable wisdom</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">In the Room: Deacon Jesse Grier</h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                At 98 years old, Deacon Grier carries wisdom that no algorithm can index. His stories are not in databases. His insights are not in training data. They live in memory, in voice, in the space between words.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                This session brings his voice into the room. Not as data, but as presence. Not as information, but as wisdom.
              </p>
              <blockquote className="border-l-4 border-[var(--bp-ink)] pl-6 font-serif text-base italic text-[var(--bp-ink)]">
                "The dream was not only about freedom. It was about discipline, faith, and unity."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Section F: Truths that pass through memory */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-6">
            <div>
              <p className="bp-section-kicker mb-2">The transmission</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Truths That Pass Through Memory, Not Algorithms</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold">What algorithms miss</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  Algorithms process patterns. They find correlations. They generate responses based on training data. But they cannot hold the weight of lived experience. They cannot understand the context of survival, the nuance of resilience, the depth of generational wisdom.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-semibold">What memory preserves</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  Memory carries more than facts. It carries feeling, context, consequence. It carries the unspoken lessons that shape how we move through the world. These truths are not searchable because they are not stored—they are lived, shared, and passed down.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section G: The interactive experience */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-8">
            <div>
              <p className="bp-section-kicker mb-2">Interactive experience</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Blueprint Radar & Drafting Table</h2>
              <p className="mb-6 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                During this session, you'll engage with two interactive tools that bring the Life's Blueprint principles into practice.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-48 overflow-hidden rounded-xl md:h-64">
                <Image
                  src="/images/interactive-radar.jpg"
                  alt="Blueprint radar chart"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-3 font-semibold">Blueprint Radar</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  Visualize your alignment with the three principles: Dignity, Excellence, and Persistence. See where you stand and where you're growing.
                </p>
              </div>

              <div className="relative h-48 overflow-hidden rounded-xl md:h-64">
                <Image
                  src="/images/interactive-drafting-table.jpg"
                  alt="Drafting table interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="mb-3 font-semibold">Drafting Table</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  Answer the question: "What is your persistence oath?" Draft your commitment to keep moving, no matter the pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section H: The Clarity Framework */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-8">
            <div>
              <p className="bp-section-kicker mb-2">The framework</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">The Clarity Framework</h2>
              <p className="mb-6 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                Before you prompt an AI, you prompt yourself. The Clarity Framework helps you align your intention with your impact.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-2 text-2xl font-bold text-[var(--bp-ink)]">P</div>
                <h3 className="mb-2 font-semibold">Problem</h3>
                <p className="text-xs leading-relaxed text-[var(--bp-ink-soft)]">
                  What are you solving? What gap are you filling?
                </p>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-2 text-2xl font-bold text-[var(--bp-ink)]">P</div>
                <h3 className="mb-2 font-semibold">People</h3>
                <p className="text-xs leading-relaxed text-[var(--bp-ink-soft)]">
                  Who are you serving? Who will this lift?
                </p>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-2 text-2xl font-bold text-[var(--bp-ink)]">O</div>
                <h3 className="mb-2 font-semibold">Outcome</h3>
                <p className="text-xs leading-relaxed text-[var(--bp-ink-soft)]">
                  What change are you creating? What impact matters?
                </p>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-2 text-2xl font-bold text-[var(--bp-ink)]">L</div>
                <h3 className="mb-2 font-semibold">Legacy</h3>
                <p className="text-xs leading-relaxed text-[var(--bp-ink-soft)]">
                  What will remain? What will you pass forward?
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-[var(--bp-ink)] pl-6 font-serif text-lg italic text-[var(--bp-ink)]">
              "Clarity shapes calling before you scale. Before you prompt an AI, you prompt yourself."
            </blockquote>
          </div>
        </section>

        {/* Section I: The Clarity App */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="bp-section-kicker mb-2">The application</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">The Clarity App</h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                A mobile application that helps you apply the Clarity Framework to your AI interactions. Before you prompt, you clarify. Before you build, you align.
              </p>
              <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                See the app in action during the session. Watch how clarity transforms the quality of your prompts and the impact of your builds.
              </p>
            </div>
            <motion.div style={{ y: phonesY }} className="relative h-64 overflow-hidden rounded-xl md:h-80">
              <Image
                src="/images/clarity-app-phones.jpg"
                alt="Clarity App on mobile devices"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Section J: Bridge or hands band */}
        <motion.section
          style={{ y: bridgeY }}
          className="relative mb-12 overflow-hidden rounded-3xl border border-[var(--bp-grid)]"
        >
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/bridge-or-hands.jpg"
              alt="Bridge or hands representing connection and legacy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center text-white">
                <p className="mb-2 font-serif text-2xl italic md:text-3xl">
                  "The dream was not only about freedom."
                </p>
                <p className="text-sm md:text-base">It was about discipline, faith, and unity.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section K: Closing call to action */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Join Us</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--bp-ink-soft)]">
              This session is more than a presentation. It's an invitation to build with clarity, to prompt with intention, and to honor the wisdom that algorithms cannot store.
            </p>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--bp-ink-soft)]">
              Monday, January 19th. Celebrating Dr. Martin Luther King Jr. A National Black AI Literacy Event.
            </p>
            <blockquote className="mx-auto max-w-2xl border-l-4 border-[var(--bp-ink)] pl-6 font-serif text-lg italic text-[var(--bp-ink)]">
              "If you cannot fly, run. If you cannot run, walk. If you cannot walk, crawl. But by all means, keep moving."
            </blockquote>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--bp-grid)] bg-[var(--bp-panel)] py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-[var(--bp-ink-soft)] md:px-8">
          <p className="mb-2">Clarity and the Unsearchable · AI and the Dream</p>
          <p>© {new Date().getFullYear()} Eric Brown Jr</p>
        </div>
      </footer>
    </div>
  )
}
