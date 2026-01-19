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
                This session links generative AI, Dr King's "Life's Blueprint" speech, and the unsearchable wisdom elders carry. We explore how AI amplifies intention, why wisdom passes through memory not algorithms, and how to build tools that honor the story behind you as you build what is ahead of you.
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
                AI Literacy, Generational Wisdom, and the Design of a Life's Blueprint
              </p>
              <p className="mt-2 font-mono text-xs italic text-[var(--bp-ink-soft)]">
                AI amplifies what you bring to it. We must start with clarity.
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
        {/* Section A: AI Amplifies. It Does Not Clarify. */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="bp-section-kicker mb-2">Core principle</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">AI Amplifies. It Does Not Clarify.</h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                We live in an age of infinite information. But as we embrace Generative AI, we must realize a fundamental truth: AI acts as a magnifying glass for the user's intent.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                Input confusion, and you get amplified chaos. Input wisdom, and you get amplified impact. Transformation comes from proximity and people. Information is searchable; wisdom is not.
              </p>
              <blockquote className="border-l-4 border-[var(--bp-ink)] pl-6 font-serif text-base italic text-[var(--bp-ink)]">
                "AI helps you find answers. Only community forms character."
              </blockquote>
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

        {/* Section B: What Technology Cannot Store */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-6">
            <div>
              <p className="bp-section-kicker mb-2">The distinction</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">What Technology Cannot Store</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <h3 className="mb-3 font-semibold text-[var(--bp-ink)]">The Searchable (Data)</h3>
                <ul className="space-y-2 text-sm text-[var(--bp-ink-soft)] mb-4">
                  <li>• Facts</li>
                  <li>• Dates</li>
                  <li>• Transcripts</li>
                  <li>• Syntax</li>
                </ul>
                <div className="font-mono text-xs text-[var(--bp-ink-soft)] bg-[var(--bp-canvas)] p-3 rounded">
                  <div className="mb-2">01100011 01101111 01100100 01100101</div>
                  <div className="text-[var(--bp-ink-soft)]/70">
                    // search_results = perform_query(key="knowledge", type="factual")
                  </div>
                </div>
              </div>
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <h3 className="mb-3 font-semibold text-[var(--bp-ink)]">The Unsearchable (Spirit)</h3>
                <ul className="space-y-2 text-sm text-[var(--bp-ink-soft)] mb-4">
                  <li>• Character</li>
                  <li>• Wisdom</li>
                  <li>• Faith</li>
                  <li>• Legacy</li>
                </ul>
                <div className="text-xs italic text-[var(--bp-ink-soft)] border-l-2 border-[var(--bp-ink)] pl-3">
                  Handwritten letters, lived experience, the weight of memory
                </div>
              </div>
            </div>
            <div className="text-center pt-4">
              <p className="text-base font-semibold text-[var(--bp-ink)]">
                AI helps you find answers. Only community forms character.
              </p>
            </div>
          </div>
        </section>

        {/* Section C: The Blueprint at Barratt Junior High */}
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
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">The Blueprint at Barratt Junior High</h2>
              <p className="mb-2 text-sm font-medium text-[var(--bp-ink)]">Philadelphia, PA | October 26, 1967</p>
              <div className="h-px bg-[var(--bp-grid)] my-4" />
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                Six months before his assassination, Dr. Martin Luther King Jr. spoke to students at Barratt Junior High. He didn't speak about policy; he spoke about designing a life during a time of immense pressure.
              </p>
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6 mt-6">
                <blockquote className="font-serif text-base italic text-[var(--bp-ink)]">
                  "Whenever a building is constructed, you usually have an architect who draws a blueprint. And that blueprint serves as the pattern, the guide, the model."
                </blockquote>
              </div>
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
                <h3 className="mb-2 font-semibold">A Deep Belief in Dignity</h3>
                <p className="mb-3 text-xs uppercase text-[var(--bp-ink-soft)]">The Concept of Somebodiness</p>
                <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  The first step in the blueprint is a belief in one's own worth. In a world that attempts to categorize, profile, and index human value, the spirit must assert its own significance.
                </p>
                <blockquote className="text-sm font-semibold text-[var(--bp-ink)] border-t border-[var(--bp-grid)] pt-4">
                  "Don't allow anybody to make you feel that you are nobody."
                </blockquote>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-3 text-2xl font-bold text-[var(--bp-ink)]">II</div>
                <h3 className="mb-3 font-semibold">The Determination to Achieve Excellence</h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  Dr. King challenged the students to master their craft, regardless of their station. Excellence is your signature.
                </p>
                <blockquote className="font-serif text-sm italic text-[var(--bp-ink)] border-t border-[var(--bp-grid)] pt-4">
                  "Sweep streets like Michelangelo painted pictures. Sweep streets like Beethoven composed music. Sweep streets like Shakespeare wrote poetry."
                </blockquote>
                <p className="mt-4 text-xs italic text-[var(--bp-ink-soft)]">
                  Sweep streets so well that all the hosts of heaven and earth will have to pause and say: Here lived a great street sweeper who swept his job well.
                </p>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-3 text-2xl font-bold text-[var(--bp-ink)]">III</div>
                <h3 className="mb-3 font-semibold">A Commitment to Movement</h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  A blueprint is useless without execution. Life is "no crystal stair," but forward momentum is non-negotiable.
                </p>
                <blockquote className="text-base font-bold text-[var(--bp-ink)] border-t border-[var(--bp-grid)] pt-4">
                  "If you can't fly, RUN.<br />
                  If you can't run, WALK.<br />
                  If you can't walk, CRAWL.<br />
                  But by all means,<br />
                  KEEP MOVING."
                </blockquote>
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
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                98 Years of<br />
                Unsearchable<br />
                Wisdom
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                Introducing the Great-Great-Uncle. A witness to the Civil Rights era and the birth of the internet. He lived through the history we now prompt AI to summarize. His life holds lessons that technology cannot store.
              </p>
              <blockquote className="border-l-4 border-[var(--bp-ink)] pl-6 font-serif text-lg italic text-[var(--bp-ink)] mt-6">
                "The dream was not only<br />
                about freedom. It was<br />
                about discipline, faith,<br />
                and unity."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Section F: Truths That Pass Through Memory, Not Algorithms */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <p className="bp-section-kicker text-left">The Searchable</p>
              <p className="bp-section-kicker text-right">The Unsearchable</p>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl text-center">Truths That Pass Through Memory, Not Algorithms</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-4 text-3xl">🏆</div>
                <p className="text-sm leading-relaxed text-[var(--bp-ink)] font-medium">
                  "Hold on to your dignity. Protect your name. Your name goes further than your degree."
                </p>
              </div>
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-4 text-3xl">🔧</div>
                <p className="text-sm leading-relaxed text-[var(--bp-ink)] font-medium">
                  "Young people today have more tools, but the same responsibility."
                </p>
              </div>
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-4 text-3xl">🌉</div>
                <p className="text-sm leading-relaxed text-[var(--bp-ink)] font-medium">
                  "You stand on shoulders. Honor the story behind you as you build what is ahead of you."
                </p>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-[var(--bp-grid)]">
              <p className="font-serif text-lg italic text-[var(--bp-ink)]">
                Some truth is caught, not just taught. It requires proximity to elders.
              </p>
            </div>
          </div>
        </section>

        {/* Section G: The interactive experience */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-8">
            <div>
              <p className="bp-section-kicker mb-2">Interactive experience</p>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">The Interactive Experience</h2>
              <p className="mb-6 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                During this session, you'll engage with two interactive tools that bring the Life's Blueprint principles into practice.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold text-[var(--bp-ink)]">The Radar</h3>
                <div className="relative h-48 overflow-hidden rounded-xl md:h-64 mb-4">
                  <Image
                    src="/images/interactive-radar.jpg"
                    alt="Blueprint radar chart showing Dignity, Excellence, and Persistence"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  The Radar visualizes your alignment with the three principles: Dignity, Excellence, and Persistence. See where you stand and where you're growing.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-[var(--bp-ink)]">The Drafting Table</h3>
                <div className="relative h-48 overflow-hidden rounded-xl md:h-64 mb-4">
                  <Image
                    src="/images/interactive-drafting-table.jpg"
                    alt="Drafting table interface prompting reflection"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                  The Drafting Table prompts reflection. Answer the question: "What is your persistence oath?" Technology becomes a medium for exchange, not the source of wisdom.
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
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">The Clarity Framework</h2>
              <p className="mb-6 text-sm font-medium text-[var(--bp-ink)]">
                Clarity Shapes Calling Before You Scale. Before you prompt an AI, you must prompt yourself.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-3 text-2xl font-bold text-[var(--bp-ink)]">01</div>
                <h3 className="mb-3 font-semibold text-lg">PROBLEM.</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)] font-medium">
                  What problem are you truly trying to solve?
                </p>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-3 text-2xl font-bold text-[var(--bp-ink)]">02</div>
                <h3 className="mb-3 font-semibold text-lg">PEOPLE.</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)] font-medium">
                  Who do you aim to serve?
                </p>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-3 text-2xl font-bold text-[var(--bp-ink)]">03</div>
                <h3 className="mb-3 font-semibold text-lg">OUTCOME.</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)] font-medium">
                  What does success look like?
                </p>
              </div>

              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <div className="mb-3 text-2xl font-bold text-[var(--bp-ink)]">04</div>
                <h3 className="mb-3 font-semibold text-lg">LEGACY.</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)] font-medium">
                  What unsearchable wisdom are you embedding in this work?
                </p>
              </div>
            </div>

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

        {/* Section J: You Stand on Shoulders */}
        <motion.section
          style={{ y: bridgeY }}
          className="relative mb-12 overflow-hidden rounded-3xl border border-[var(--bp-grid)]"
        >
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/bridge-or-hands.jpg"
              alt="Bridge representing past and future, building upon foundations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="text-center text-white px-4 max-w-3xl">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">You Stand on Shoulders</h2>
                <p className="mb-4 text-base md:text-lg leading-relaxed">
                  Innovation is not about erasing the past; it is about building upon it. The next generation focuses on what the past generation preserved. If character isn't transferred, it is lost.
                </p>
                <blockquote className="font-serif text-lg md:text-xl italic">
                  "Use these new tools to lift each other up, not tear each other down.<br />
                  Honor the story behind you as you build what is ahead of you."
                </blockquote>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section K: Build with Clarity. Move with Purpose. */}
        <section className="bp-grid-soft mb-12 rounded-3xl border border-[var(--bp-grid)] p-5 md:p-8">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">Build with Clarity. Move with Purpose.</h2>
              <p className="text-sm text-[var(--bp-ink-soft)]">Build with clarity. Move with purpose. Honor the unsearchable.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <h3 className="mb-3 text-xl font-bold text-[var(--bp-ink)]">Stay Curious</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)] mb-4">
                  Ask questions technology cannot answer.
                </p>
              </div>
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <h3 className="mb-3 text-xl font-bold text-[var(--bp-ink)]">Start with Purpose</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)] mb-4">
                  Don't just scale; scale something that matters.
                </p>
              </div>
              <div className="bp-card rounded-xl border border-[var(--bp-grid)] p-6">
                <h3 className="mb-3 text-xl font-bold text-[var(--bp-ink)]">Honor the Unsearchable</h3>
                <p className="text-sm leading-relaxed text-[var(--bp-ink-soft)] mb-4">
                  Recognize that your data is not your soul.
                </p>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-[var(--bp-grid)]">
              <p className="mb-4 text-sm leading-relaxed text-[var(--bp-ink-soft)]">
                Monday, January 19th. Celebrating Dr. Martin Luther King Jr.<br />
                A National Black AI Literacy Event.
              </p>
              <blockquote className="mx-auto max-w-2xl border-l-4 border-[var(--bp-ink)] pl-6 font-serif text-lg italic text-[var(--bp-ink)]">
                "If you cannot fly, run. If you cannot run, walk. If you cannot walk, crawl. But by all means, keep moving."
              </blockquote>
            </div>
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
