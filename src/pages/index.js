import * as React from "react"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Experience from "../components/Experience"
import Featured from "../components/Featured"
import { Seo } from "../components/Seo"


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Experience />
      <Featured />
    </main>
  )
}

export const Head = () => {
  return <Seo title="Homepage" />
}