import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Conan" src="conan.jpg"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Conan Edogawa</h1>
      <p class="mb-8 leading-relaxed">Conan Edogawa (江戸川 コナン Edogawa Konan?) is the alias used by Shinichi Kudo in his shrunken form. Shinichi took the appearance of his six or seven-year-old self after being exposed to a prototype poison called APTX 4869, which he had been forced to swallow by two men in black later revealed to be members of the Black Organization.[5] The poison de-aged Shinichi's entire body except for his nervous system and therefore he still has the personality, memories, and incredible deductive ability of his teenage self. Conan's goal is to hunt down the Black Organization and have them arrested for their crimes, as well as find an antidote to the APTX 4869. To do so he plans to make the washout detective Kogoro Mouri famous in hopes of attracting cases related to the Black Organization. </p>
     <Link href={"About"}>
      <div class="flex justify-center">        
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">About</button>
      </div>
      </Link>
    </div>
  </div>
</section>
  )
}
