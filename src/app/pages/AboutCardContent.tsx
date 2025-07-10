export default function AboutCardContent() {
  return (
    <div className="px-16 py-12">
      <div className="flex items-center space-x-4">
        {/* Circular Image */}
        <img
          src="/images/profile.webp"
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover"
        />

        {/* Text on the right */}
        <div className="text-left text-wrap pl-8">
          <p className="tracking-wide text-2xl font-semibold" style={{  color: 'var(--text-quaternary)' }}>Connie Ding</p>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Software Engineering <br/> Student @ uoa</p>
        </div>
      </div>

      {/* Section below */}
      <div className="text-wrap text-left text-sm mt-8" style={{ color: 'var(--text-secondary)' }}>
        <>
          <span>
            Hi! I’m Connie, currently in my penultimate year of study at the University of Auckland. I like to..
          </span>
          <br />
          <ul className="list-disc list-inside ml-4 mt-4">
            <li>Build new projects</li>
            <li>Design wireframes</li>
            <li>Do front-end development!</li>
          </ul>
          <br />
          <span>
            Interested to connect? Go to my socials &lt;3
          </span>
          <br />
          <p className="text-lg font-semibold mt-8" style={{ color: 'var(--text-quaternary)' }}>Education</p>
          <ul className="list-disc list-inside ml-4 mt-4">
            <li>
              <span className="text-base font-semibold">University of Auckland</span>
              <br />
              <span className="block text-sm pl-5">
                Bachelor of Engineering (Honours) in Software Engineering
              </span>
            </li>
          </ul>
          <p className="text-lg font-semibold mt-8" style={{ color: 'var(--text-quaternary)' }}>Languages</p>
          <ul className="list-disc list-inside ml-4 mt-4">
            <li>
              <span className="text-sm">English</span>
            </li>
            <li>
              <span className="text-sm">Mandarin</span>
            </li>
          </ul>
        </>
      </div>
    </div>
  );
}
