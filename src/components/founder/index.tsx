"use client"

import { CometCard } from "../ui/comet-card"

const Founder = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Founder's Letter
          </h2>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">
            A personal note from Josh on why this platform exists and who it's for.
          </p>
        </div>

        <CometCard className="p-8 rounded-xl h-[550px] text-left">
          <div className="space-y-4 p-10">
            <p className="text-gray-300 leading-relaxed">
              Hey — I’m Josh. I’m not here to sell you some fake overnight success. I’ve been building since I was a kid, learning everything the hard way: what works, what flops, what actually makes money.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I started Virtue because I wish something like this existed when I was starting out — a real system, built by someone in it, not just talking about it. No gatekeeping, no fluff — just raw playbooks, proven tools, and a community that actually helps you grow.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you're tired of scrolling past recycled advice and you're ready to actually build something that earns, you’re in the right place.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Let’s get to work.
            </p>
            <p className="text-gray-300 font-semibold">
              — Josh
            </p>
          </div>
        </CometCard>
      </div>
    </section>
  )
}

export default Founder