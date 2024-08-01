import { FooterContent } from "../../Elements/FooterContent";
import Button from "./../../Elements/Button/index";

const foots = [
  {
    id: 1,
    title: "Company Info",
    list_1: "About Us",
    list_2: "Blog",
    list_3: "Contact",
    list_4: "Services",
  },
  {
    id: 2,
    title: "Company Info",
    list_1: "About Us",
    list_2: "Blog",
    list_3: "Contact",
    list_4: "Services",
  },
  {
    id: 3,
    title: "Company Info",
    list_1: "About Us",
    list_2: "Blog",
    list_3: "Contact",
    list_4: "Services",
  },
  {
    id: 4,
    title: "Company Info",
    list_1: "About Us",
    list_2: "Blog",
    list_3: "Contact",
    list_4: "Services",
  },
  {
    id: 5,
    title: "Company Info",
    list_1: "About Us",
    list_2: "Blog",
    list_3: "Contact",
    list_4: "Services",
  },
];

export const Footer = () => {
  return (
    <main className="pt-10 pl-195 pr-233 bg-dark-grey text-white">
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">
            Consulting Agency For Your Business
          </h3>
          <p className="text-sm pt-3">the quick fox jumps over the lazy dog</p>
        </div>
        <Button
          type="button"
          title="Contact Us"
          style="bg-blue text-white text-sm font-bold px-10 py-15 rounded-md"
        />
      </section>
      <section className="flex flex-row gap-30 pt-90">
        {foots.map((foot) => (
          <FooterContent
            id={foot.id}
            title={foot.title}
            list_1={foot.list_1}
            list_2={foot.list_2}
            list_3={foot.list_3}
            list_4={foot.list_4}
          />
        ))}
      </section>
      <section className="flex flex-row justify-between items-center pt-77 pb-6">
        <h4 className="font-bold text-sm">Made With Love By Finland All Right Reserved</h4>
        <div className="flex flex-row gap-5">
          <img src="public/images/fb.png" alt="" />
          <img src="public/images/ig.png" alt="" />
          <img src="public/images/twt.png" alt="" />
        </div>
      </section>
    </main>
  );
};
