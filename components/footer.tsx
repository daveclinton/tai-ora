export function Footer() {
  return (
    <footer
      className={`py-8 px-6 bg-gradient-to-r from-[#0A2F3D] via-[#0D3E50] to-[#0A2F3D] text-white relative overflow-hidden border-t border-[#D4A33A]/30`}
    >
      <>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/hero.png?height=200&width=1200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F3D]/90 to-[#0D3E50]/70" />
      </>
      <div className="container mx-auto text-center relative z-10">
        <p className="text-lg">
          © 2025 Tai Ora • Māori-led, ethics-first wellness with purpose —
          created to welcome all
        </p>
      </div>
    </footer>
  );
}
