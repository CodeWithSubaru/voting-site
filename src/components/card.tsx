interface Props {
  title: string;
  description: string;
  src: string;
}

const heroCardsData: Props[] = [
  {
    title: "Simple & fast",
    description:
      " Ain't nobody got time for long-ass descriptions. Solve your design dilemmas instantly by asking short questions.",
    src: "/img/mailbox.png",
  },
  {
    title: "Bias-free",
    description:
      " Don't let other senior's opinions trick ya! Team's picks are until you vote yourself.",
    src: "/img/scope-with-eye.png",
  },
];

const HeroCard = () => {
  return heroCardsData.map((hero) => (
    <div className="flex justify-between items-center pb-20">
      <div>
        <h4 className="mb-4 font-bold tracking-wide">{hero.title}</h4>
        <p className="max-w-sm text-gray-600 font-medium">{hero.description}</p>
      </div>
      <img src={hero.src} height="150px" width="150px" />
    </div>
  ));
};
export default HeroCard;
