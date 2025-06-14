export default function Card() {
  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-3xl min-h-[500px] text-center">
      <div className="h-12 bg-[#333333] rounded-t-lg"></div>
      <div className="p-32">
        <h1 className="font-roboto-mono text-5xl text-black">
          Hi, I'm <span className="font-bold">Connie!</span>
        </h1>
        <p className="text-gray-600 text-base mt-4">This is a responsive Tailwind card.</p>
      </div>
    </div>
  );
}
