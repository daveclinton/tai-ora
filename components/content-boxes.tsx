interface ContentBoxesProps {
  variant:
    | "current"
    | "gold"
    | "split"
    | "minimal"
    | "luxury"
    | "gradient"
    | "image"
    | "cards"
    | "geometric"
    | "magazine";
}

export function ContentBoxes({ variant }: ContentBoxesProps) {
  const getBoxStyles = (index: number) => {
    switch (variant) {
      case "current":
        return "bg-white text-[#0D3E50] border border-gray-200";
      case "gold":
        return "bg-white text-[#0D3E50] border border-gray-200";
      case "split":
        return index % 2 === 0
          ? "bg-[#0D3E50] text-white"
          : "bg-white text-[#0D3E50]";
      case "minimal":
        return "bg-white text-[#0D3E50] border border-gray-200";
      case "luxury":
        return "bg-[#0A2F3D] text-white border border-[#D4A33A]";
      case "gradient":
        return "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300";
      case "image":
        return "bg-white text-[#0D3E50] border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden";
      case "cards":
        return "bg-white text-[#0D3E50] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden";
      case "geometric":
        return "bg-white text-[#0D3E50] border border-gray-200 relative overflow-hidden hover:shadow-lg transition-shadow duration-300";
      case "magazine":
        return "bg-white text-[#0D3E50] border-l-4 border-l-[#D4A33A] shadow-sm hover:shadow-md transition-shadow duration-300";
      default:
        return "bg-white text-[#0D3E50] border border-gray-200";
    }
  };

  const getHeadingColor = (index: number) => {
    switch (variant) {
      case "current":
        return "text-[#D4A33A]";
      case "gold":
        return "text-[#0D3E50]";
      case "split":
        return index % 2 === 0 ? "text-[#D4A33A]" : "text-[#0D3E50]";
      case "minimal":
        return "text-[#0D3E50]";
      case "luxury":
        return "text-[#D4A33A]";
      case "gradient":
        return "text-white";
      case "image":
        return "text-[#D4A33A]";
      case "cards":
        return "text-[#0D3E50]";
      case "geometric":
        return "text-[#D4A33A]";
      case "magazine":
        return "text-[#0D3E50]";
      default:
        return "text-[#D4A33A]";
    }
  };

  const getSectionBg = () => {
    switch (variant) {
      case "current":
        return "bg-gray-50";
      case "gold":
        return "bg-[#F5E6B8]";
      case "split":
        return "bg-gray-50";
      case "minimal":
        return "bg-white";
      case "luxury":
        return "bg-[#0D3E50]";
      case "gradient":
        return "bg-gradient-to-b from-[#0D3E50] to-[#1A5A6B]";
      case "image":
        return "bg-gray-50";
      case "cards":
        return "bg-gradient-to-br from-[#D4A33A]/10 to-[#0D3E50]/10";
      case "geometric":
        return "bg-white relative";
      case "magazine":
        return "bg-gray-50";
      default:
        return "bg-gray-50";
    }
  };

  const boxes = [
    {
      title: "VeeVu™",
      content:
        "VeeVu™ instantly transforms long product videos into short, powerful previews that highlight what truly matters. No gimmicks — just clear, authentic insights designed to save time and boost discovery.",
      image: "/hero.png?height=200&width=300",
    },
    {
      title: "iGlo™",
      content:
        "iGlo™ lets you document your full product journey with photos, notes, and reflections. Over time, it creates an AI-verified record of real results — building trust, empowering your voice, and offering brands authentic proof.",
      image: "/hero.png?height=200&width=300",
    },
    {
      title: "Coming Soon",
      content:
        "LydiaGlo™ — Empowering recovery through healing, culture and innovation. SoulGlo™ — Nourish your spirit with guided journeys for inner peace.",
      image: "/hero.png?height=200&width=300",
    },
  ];

  if (variant === "image") {
    return (
      <section className={`py-20 px-6 ${getSectionBg()}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boxes.map((box, index) => (
              <div key={index} className={`${getBoxStyles(index)} relative`}>
                <div
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url('${box.image}')` }}
                />
                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-4 ${getHeadingColor(
                      index
                    )}`}
                  >
                    {box.title}
                  </h3>
                  <p className="text-lg leading-relaxed">{box.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "cards") {
    return (
      <section className={`py-20 px-6 ${getSectionBg()}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boxes.map((box, index) => (
              <div key={index} className={`${getBoxStyles(index)} relative`}>
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-xl opacity-10"
                  style={{ backgroundImage: `url('${box.image}')` }}
                />
                <div className="relative z-10 p-8">
                  <h3
                    className={`text-2xl font-bold mb-4 ${getHeadingColor(
                      index
                    )}`}
                  >
                    {box.title}
                  </h3>
                  <p className="text-lg leading-relaxed">{box.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "geometric") {
    return (
      <section className={`py-20 px-6 ${getSectionBg()}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-[#D4A33A]/5 rounded-full" />
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-[#0D3E50]/5 rotate-45" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boxes.map((box, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg ${getBoxStyles(index)}`}
              >
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#D4A33A]/20 rounded-full" />
                <h3
                  className={`text-2xl font-bold mb-4 ${getHeadingColor(
                    index
                  )}`}
                >
                  {box.title}
                </h3>
                <p className="text-lg leading-relaxed">{box.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "magazine") {
    return (
      <section className={`py-20 px-6 ${getSectionBg()}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boxes.map((box, index) => (
              <div
                key={index}
                className={`${getBoxStyles(index)} flex flex-col`}
              >
                <div
                  className="h-32 bg-cover bg-center mb-6"
                  style={{ backgroundImage: `url('${box.image}')` }}
                />
                <div className="p-6 flex-1">
                  <h3
                    className={`text-2xl font-bold mb-4 ${getHeadingColor(
                      index
                    )}`}
                  >
                    {box.title}
                  </h3>
                  <p className="text-lg leading-relaxed">{box.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 px-6 ${getSectionBg()}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg ${getBoxStyles(index)}`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${getHeadingColor(index)}`}
              >
                {box.title}
              </h3>
              <p className="text-lg leading-relaxed">{box.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
