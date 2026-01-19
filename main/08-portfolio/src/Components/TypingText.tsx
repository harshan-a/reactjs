import { useEffect, useState } from "react"

type TypingTextProps = {
  texts: string[]
}

export default function TypingText({ texts }: TypingTextProps) {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[index]

    const typingSpeed = isDeleting ? 60 : 120

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setText(currentText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index, texts])

  return (
    <>
      {text}
      <span className="animate-pulse text-inherit">|</span>
    </>
  )
}
