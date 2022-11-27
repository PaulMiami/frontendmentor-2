"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import clsx from "clsx";

import { PostType } from "src/data/posts";
import Tags from "./Tags";
import { UseFilters } from "src/contexts/FilterContext";

interface Props {
  post: PostType;
}

export default function Post({ post }: Props) {
  const context = UseFilters();
  const tags = [post.role, post.level, ...post.languages, ...post.tools];
  const filter = tags.some((t) => context.filters.includes(t));

  return (
    <>
      <AnimatePresence>
        {!filter && (
          <motion.div
            layoutId={post.company}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-1 bg-white rounded-md mt-10 first:mt-0 shadow-xl shadow-darkGrayishCyan"
          >
            <div className={clsx("flex", !post.featured && "hidden")}>
              <div className="w-1 rounded-l-xl bg-desaturatedDarkCyan"></div>
            </div>
            <div className="flex flex-1 flex-col xl:flex-row">
              <div className="flex flex-col xl:flex-row xl:my-6">
                <img
                  src={post.logo}
                  alt={post.company}
                  className="xl:h-20 xl:w-20 h-12 w-12 ml-5 xl:my-0 xl:block xl:translate-y-0 -translate-y-1/2"
                />
                <div className="flex flex-col ml-4 mt-1">
                  <div className="flex items-center">
                    <h2 className=" text-desaturatedDarkCyan font-bold">
                      {post.company}
                    </h2>
                    {post.new && (
                      <div className="flex text-white bg-desaturatedDarkCyan rounded-2xl px-2 py-0 pt-1 ml-6">
                        NEW!
                      </div>
                    )}
                    {post.featured && (
                      <div className="flex text-white bg-black rounded-2xl px-2 py-0 pt-1 ml-3">
                        FEATURED
                      </div>
                    )}
                  </div>
                  <div className="font-bold mt-2 xl:text-xl hover:text-desaturatedDarkCyan cursor-pointer">
                    {post.position}
                  </div>
                  <div className="flex flex-row items-center space-x-3 text-darkGrayishCyan mt-2">
                    <div>{post.postedAt}</div>
                    <div className="bg-darkGrayishCyan rounded-full h-1 w-1"></div>
                    <div>{post.contract}</div>
                    <div className="bg-darkGrayishCyan rounded-full h-1 w-1"></div>
                    <div>{post.location}</div>
                  </div>
                </div>
              </div>
              <hr className="flex-grow border-t-2 bg-darkGrayishCyan  m-4 xl:hidden" />
              <Tags tags={tags} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
