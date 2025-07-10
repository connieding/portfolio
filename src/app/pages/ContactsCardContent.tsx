export default function ContactsCardContent() {
  return (
      <div className="px-16 py-12">
        <div className="text-left" style={{ color: 'var(--text-secondary)' }}>Send me an email if you have any questions!</div>
  
        <div className="mt-8 flex gap-8 flex-wrap justify-center p-4">
            <button
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg text-lg hover:opacity-90 transition"
            style={{ backgroundColor: 'var(--text-quaternary)' }}
            onClick={() => window.open("mailto:conniedingnz@gmail.com")}
            type="button"
            >
            Email Me
            </button>
        </div>
      </div>
    );
}
