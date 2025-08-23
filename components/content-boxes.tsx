export function ContentBoxes() {
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

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="bg-white text-[#0D3E50] border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
            >
              <div
                className="h-48 bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url('${box.image}')` }}
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#D4A33A]">
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
