import React from "react";
import useSound from "use-sound";

export default function ContactsCardContent() {
  const [play] = useSound("/sounds/pop.mp3");

  return (
    <div className="px-16 py-12">
      <div className="text-left" style={{ color: "var(--text-secondary)" }}>
        Send me an email if you have any questions!
      </div>

      <div className="mt-8 flex gap-8 flex-wrap justify-center p-4">
        <button
          className="flex items-center gap-2 px-6 py-3 text-white rounded-lg text-lg hover:opacity-90 transition"
          style={{ backgroundColor: "var(--text-quaternary)" }}
          onClick={() => {
            play();
            window.open("mailto:@gmail.com");
          }}
          type="button"
        >
          Email Me
        </button>
      </div>
    </div>
  );
}
