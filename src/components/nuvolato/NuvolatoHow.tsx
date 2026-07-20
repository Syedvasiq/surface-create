import Image from "next/image";

type StepGroup = {
  heading?: string;
  steps: string[];
};

function StepList({ title, groups }: { title: string; groups: StepGroup[] }) {
  return (
    <div className="text-[#1d2830]">
      <h3 className="mb-5 text-xl font-semibold">{title}</h3>
      {groups.map((group, groupIndex) => {
        const firstStepNumber = groups
          .slice(0, groupIndex)
          .reduce((total, prev) => total + prev.steps.length, 0);
        return (
          <div key={group.heading ?? groupIndex} className={groupIndex ? "mt-9" : ""}>
            {group.heading && (
              <p className="mb-5 text-lg font-semibold">{group.heading}</p>
            )}
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              {group.steps.map((step, stepIndex) => (
                <li key={`${firstStepNumber}-${stepIndex}`} className="flex gap-1.5">
                  <span className="font-semibold">{firstStepNumber + stepIndex + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default function NuvolatoHow() {
  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-16 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-0">
      <div>
        <h2 className="mb-12 text-[28px] font-light text-[#1d2830] sm:text-[34px]">
          How
        </h2>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image
            src="/images/microtopping/microtopping-1.png"
            alt="Nuvolato Architop floor application layer diagram"
            width={1185}
            height={1035}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
          <StepList
            title="Nuvolato Architop Floor"
            groups={[
              {
                steps: [
                  "Surface preparation and cleaning",
                  "Primer application",
                  "Application of Nuvolato Architop BC in 2 coats",
                ],
              },
              {
                heading: "A. Finish Coat",
                steps: [
                  "Sanding and cleaning of the surface",
                  "Application of 1st coat of Nuvolato FC",
                  "Sanding and cleaning of the surface",
                  "Application of protective sealer",
                ],
              },
              {
                heading: "B. High Performance",
                steps: [
                  "Sanding and cleaning of the surface",
                  "Application of Nuvolato HP",
                  "Sanding and cleaning of the surface",
                  "Application of protective sealer",
                ],
              },
            ]}
          />
        </div>

        <div className="mt-20 grid items-start gap-12 lg:mt-28 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image
            src="/images/microtopping/microtopping-2.png"
            alt="Nuvolato Architop wall application layer diagram"
            width={1061}
            height={983}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
          <StepList
            title="Nuvolato Architop Wall"
            groups={[
              {
                steps: [
                  "Preparation of the underbed",
                  "Application of Primer R-R",
                  "Application of Nuvolato BC 1 coat",
                  "Application of Nuvolato HP",
                  "Application of Nuvolato FC",
                  "Sanding and application of protective sealer",
                ],
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
