interface FooterProps {
  variant: "current" | "gold" | "split" | "minimal" | "luxury" | "gradient";
}

export function Footer({ variant }: FooterProps) {
  const getFooterStyles = () => {
    switch (variant) {
      case "current":
        return "bg-[#0D3E50] text-white";
      case "gold":
        return "bg-[#0D3E50] text-white";
      case "split":
        return "bg-[#0D3E50] text-white";
      case "minimal":
        return "bg-[#0D3E50] text-white";
      case "luxury":
        return "bg-[#0A2F3D] text-white border-t border-[#D4A33A]";
      case "gradient":
        return "bg-gradient-to-r from-[#0A2F3D] via-[#0D3E50] to-[#0A2F3D] text-white relative overflow-hidden border-t border-[#D4A33A]/30";
      default:
        return "bg-[#0D3E50] text-white";
    }
  };

  return (
    <footer className={`py-8 px-6 ${getFooterStyles()}`}>
      {variant === "gradient" && (
        <>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('/placeholder.svg?height=200&width=1200')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F3D]/90 to-[#0D3E50]/70" />
        </>
      )}

      <div className="container mx-auto text-center relative z-10">
        <p className="text-lg">
          © 2025 Tai Ora • Māori-led, ethics-first wellness with purpose —
          created to welcome all
        </p>
      </div>
    </footer>
  );
}
