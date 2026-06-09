"use client";

const WA = `https://wa.me/51954655122?text=${encodeURIComponent("Hola Camila 👋 me interesa saber más sobre sus clases online")}`;

export default function FloatingWA() {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        .wa-float {
          animation: wa-pulse 2.5s infinite;
          transition: transform 0.2s;
        }
        .wa-float:hover {
          transform: scale(1.1) !important;
        }
      `}</style>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Escríbenos por WhatsApp"
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 999,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
          textDecoration: "none",
        }}
      >
        {/* WhatsApp SVG oficial */}
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M16 2C8.268 2 2 8.268 2 16c0 2.47.664 4.786 1.822 6.772L2 30l7.42-1.944A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm-4.16 8.29c.2-.44.41-.452.6-.46.155-.006.33-.005.507-.005.177 0 .464.066.707.33.243.263.928 1.006.928 2.452 0 1.445-1.052 2.843-1.2 3.04-.148.197-2.07 3.324-5.097 4.527-.755.293-1.344.468-1.803.6-.757.217-1.447.187-1.992.113-.608-.082-1.875-.712-2.136-1.4-.26-.687-.26-1.275-.182-1.4.078-.124.298-.198.62-.35z"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
}
