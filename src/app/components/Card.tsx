export default function Card({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-3xl min-h-[500px] text-center">
      <div className="h-12 bg-[#333333] rounded-t-lg"/>
      {children}
    </div>
  );
}
