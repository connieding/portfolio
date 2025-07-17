import Main from "./pages/main";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-clouds ">
      <Main />

      <footer
        className="absolute bottom-0 left-0 w-full text-center py-4 text-sm"
        style={{ color: "var(--text-primary)" }}
      >
        <p>
          <span className="text-lg">©</span> 2025 Connie Ding
        </p>
      </footer>
    </div>
  );
}
