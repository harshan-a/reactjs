export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-4xl *:text-cyan-400">
      {title.split("").map((char, index) => (
        <span key={index} className="hover:font-extrabold">
          {char}
        </span>
      ))}
    </h1>
  )
}
