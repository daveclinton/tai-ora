import { Navbar } from "./navbar";
import { Button } from "@/components/ui/button";

export function NewHero() {
  return (
    <main className="relative w-full flex items-center justify-center min-h-screen overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/hero_new.jpg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/30" />

      <Navbar />

      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center pt-32">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Truth in Beauty,{" "}
          <span className="relative whitespace-nowrap text-accent">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">Wellness</span>
          </span>{" "}
          with Purpose
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 leading-relaxed">
          A Māori-led platform uniting authenticity, wellbeing and ethical
          beauty — welcoming all cultures with open hearts.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold shadow-lg bg-orange-300 hover:bg-orange-300/80 rounded-full hover:shadow-xl"
            asChild
          >
            <a href="#creator" aria-label="Join as a creator">
              I'm a Creator
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="px-8 py-6 text-lg font-semibold shadow-lg rounded-full hover:shadow-xl"
            asChild
          >
            <a href="#brand" aria-label="Join as a brand">
              I'm a Brand
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 motion-safe:animate-bounce">
        <a
          href="#about"
          className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Scroll to about section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </main>
  );
}
