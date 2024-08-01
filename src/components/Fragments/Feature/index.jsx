import { FeatureCard } from "../../Elements/FeatureCard";

const fitur = [
  {
    id: 1,
    images: "public/images/fitur-1.png",
    source_1: "Google",
    source_2: "Trending",
    source_3: "New",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    time: "22 April 2022",
    comment: "10 comments",
  },
  {
    id: 2,
    images: "public/images/fitur-2.png",
    source_1: "Google",
    source_2: "Trending",
    source_3: "New",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    time: "22 April 2022",
    comment: "10 comments",
  },
  {
    id: 3,
    images: "public/images/fitur-3.png",
    source_1: "Google",
    source_2: "Trending",
    source_3: "New",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    time: "22 April 2022",
    comment: "10 comments",
  },
];

export const Feature = () => {
  return (
    <main className="px-188 mt-60 flex flex-col h-full pb-112">
      <h6 className="items-center text-center pb-3 text-blue font-bold text-sm">
        Practice Advice
      </h6>
      <h2 className="items-center text-center text-40 font-bold text-dark-grey pb-20">
        Featured Posts
      </h2>
      <section className="flex flex-row gap-5">
        {fitur.map((fitur) => (
          <FeatureCard
            key={fitur.id}
            images={fitur.images}
            source_1={fitur.source_1}
            source_2={fitur.source_2}
            source_3={fitur.source_3}
            title={fitur.title}
            description={fitur.description}
            time={fitur.time}
            comment={fitur.comment}
          />
        ))}
      </section>
    </main>
  );
};
