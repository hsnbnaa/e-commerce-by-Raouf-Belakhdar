import { Bottom } from "../../Elements/MostPopular/Bottom";
import { Top } from "../../Elements/MostPopular/Top";

const pops = [
  {
    id: 1,
    title: "Easy to use",
    description: "Things on a very  small that you have any direct",
  },
  {
    id: 2,
    title: "Easy to use",
    description: "Things on a very  small that you have any direct",
  },
  {
    id: 3,
    title: "Easy to use",
    description: "Things on a very  small that you have any direct",
  },
  {
    id: 4,
    title: "Easy to use",
    description: "Things on a very  small that you have any direct",
  },
];

export const Popular = () => {
  return (
    <main className="py-12 pl-185 pr-180 flex flex-col w-full">
      <Top />
      <section className="flex flex-row w-full bg-white pt-14 pb-73 gap-65">
        {pops.map((pop) => (
          <Bottom
            key={pop.id}
            number={pop.id}
            title={pop.title}
            description={pop.description}
          />
        ))}
      </section>
    </main>
  );
};
