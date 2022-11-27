"use client";

import type React from "react";
import { AnimateSharedLayout } from "framer-motion";

import Post from "@ui/Post";

import posts from "../data/posts.json";
import Filter from "@ui/Filter";
import FilterContextProvider from "src/contexts/FilterContext";

export default function Home() {
  return (
    <>
      <main className="mx-auto">
        <section id="header"></section>
        <section id="posts" className="bg-lightGrayishCyan pb-8">
          <AnimateSharedLayout>
            <FilterContextProvider>
              <Filter />
              <div className="flex flex-col justify-center mx-5 pt-8">
                {posts.map((p) => (
                  <Post key={p.id} post={p} />
                ))}
              </div>
            </FilterContextProvider>
          </AnimateSharedLayout>
        </section>
      </main>
    </>
  );
}
