import React, { useEffect, useState } from 'react'

export default function Typewriter({ words = [], speed = 110, pause = 1200 }) {
  const [index,    setIndex]    = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink,    setBlink]    = useState(true)
  const [reverse,  setReverse]  = useState(false)

  useEffect(() => {
    if (index === words.length) return
    if (subIndex === words[index].length + 1 && !reverse) {
      const t = setTimeout(() => setReverse(true), pause)
      return () => clearTimeout(t)
    }
    if (subIndex === 0 && reverse) {
      const t = setTimeout(() => {
        setReverse(false)
        setIndex(prev => (prev + 1) % words.length)
      }, 200)
      return () => clearTimeout(t)
    }
    const t = setTimeout(
      () => setSubIndex(p => p + (reverse ? -1 : 1)),
      reverse ? speed / 2 : speed
    )
    return () => clearTimeout(t)
  }, [subIndex, index, reverse, words, speed, pause])

  useEffect(() => {
    const id = setInterval(() => setBlink(v => !v), 500)
    return () => clearInterval(id)
  }, [])

  return (
    <span>
      {index < words.length ? words[index].substring(0, subIndex) : ''}
      <span style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s' }}>|</span>
    </span>
  )
}