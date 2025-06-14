import Card from "../components/Card";

export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <Card>
        <div className="p-32">
          <h1 className="font-roboto-mono text-5xl text-black">
            Hi, I'm <span className="font-bold">Connie!</span>
          </h1>
          <p className="text-gray-600 text-base mt-4">This is a responsive Tailwind card.</p>
        </div>
      </Card>
    </div>
  );
}