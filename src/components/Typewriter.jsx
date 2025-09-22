import React, { useEffect, useState } from 'react'

export default function Typewriter({ words = [], speed = 120, pause = 1000 }){
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (index === words.length) return
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pause)
      return () => clearTimeout(timeout)
    }
    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false)
        setIndex(prev => (prev + 1) % words.length)
      }, 200)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1))
    }, reverse ? speed/2 : speed)
    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, speed, pause])

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink(v => !v), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <span className="font-medium">
      {index < words.length ? words[index].substring(0, subIndex) : ''}
      <span className="inline-block w-1">{blink ? '|' : ' '}</span>
    </span>
  )
}
