import Card from "../components/Card";
import ImageButton from "../components/ImageButton";

export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <Card className="w-[700px] h-[450px] max-w-full" headerText="home">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-roboto-mono text-5xl text-black -translate-y-4">
            Hi, I'm <span className="font-bold">Connie!</span>
          </h1>
          <div className="mt-12 flex gap-8">
            <ImageButton src="/About.svg" alt="About" label="about" />
            <ImageButton src="/Link.svg" alt="Links" label="links" />
            <ImageButton src="/Program.svg" alt="Program" label="works" />
            <ImageButton src="/Email.svg" alt="Email" label="contacts" />
          </div>
        </div>
      </Card>
    </div>
  );
}
