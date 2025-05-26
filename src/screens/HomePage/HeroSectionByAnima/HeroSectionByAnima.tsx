
export const HeroSectionByAnima = (): JSX.Element => {
  const navItems = [
    { name: "Home", icon: "/group-8.png", active: true },
    { name: "About Us", active: false },
    { name: "Products", active: false },
    { name: "Contact Us", active: false },
  ];

  const indicators = [{ active: true }, { active: false }, { active: false }];

  return (
    <div className="flex flex-col w-full items-center relative">
      <div 
        className="flex flex-col h-[550px] items-center gap-[79px] relative self-stretch w-full"
        style={{
          background: "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) 100%),linear-gradient(180deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 100%)",
          backgroundImage: "url(/frame-17532.png)",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover"
        }}
      >
        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
};