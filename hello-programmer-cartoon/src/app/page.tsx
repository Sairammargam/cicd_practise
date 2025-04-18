"use client";

export default function Home() {
  return (
    <div>
      <h1 style={{
        fontSize: '4rem',
        color: '#ff3399',
        textShadow: '2px 2px #00000022',
        animation: 'bounce 2s infinite'
      }}>
        Hello, Programmer! 👩‍💻👨‍💻
      </h1>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
