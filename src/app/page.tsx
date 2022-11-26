import type React from "react";
import Image from "next/image";

import clsx from "clsx";

import backgoundImageDesktop from "@images/bg-header-desktop.svg";
import backgoundImageMobile from "@images/bg-header-mobile.svg";
import Tag from "@ui/Tag";

import posts from "../data/posts.json";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <section id="header" className="bg-desaturatedDarkCyan">
          <div className="flex justify-center mx-auto">
            {/* header */}
            <div className="xl:hidden">
              <Image src={backgoundImageMobile} alt="header"></Image>
            </div>
            <div className="hidden xl:block">
              <Image src={backgoundImageDesktop} alt="header"></Image>
            </div>
          </div>
        </section>
        <section id="posts" className="bg-lightGrayishCyan">
          <div className="flex flex-col justify-center mx-5 xl:py-14 py-14">
            {posts.map((p) => (
              <div
                key={p.id}
                className="flex flex-1 bg-white rounded-md mt-10 first:mt-0 shadow-xl shadow-darkGrayishCyan"
              >
                <div className={clsx("flex", !p.featured && "hidden")}>
                  <div className="w-1 rounded-l-xl bg-desaturatedDarkCyan"></div>
                </div>
                <div className="flex flex-1 flex-col xl:flex-row">
                  <div className="flex flex-col xl:flex-row xl:my-6">
                    <Image
                      src={p.logo}
                      alt={p.company}
                      height={80}
                      width={80}
                      className="h-20 w-20 -mt-6 ml-5 xl:my-0 hidden xl:block"
                    />
                    <Image
                      src={p.logo}
                      alt={p.company}
                      height={48}
                      width={48}
                      className="h-12 w-12 -mt-6 ml-5 xl:hidden"
                    />
                    <div className="flex flex-col ml-4 mt-1">
                      <div className="flex items-center">
                        <div className=" text-desaturatedDarkCyan font-bold">
                          {p.company}
                        </div>
                        {p.new && (
                          <div className="flex text-white bg-desaturatedDarkCyan rounded-2xl px-2 py-0 pt-1 ml-6">
                            NEW!
                          </div>
                        )}
                        {p.featured && (
                          <div className="flex text-white bg-black rounded-2xl px-2 py-0 pt-1 ml-3">
                            FEATURED
                          </div>
                        )}
                      </div>
                      <div className="font-bold mt-2 xl:text-xl hover:text-desaturatedDarkCyan cursor-pointer">
                        {p.position}
                      </div>
                      <div className="flex flex-row items-center space-x-3 text-darkGrayishCyan mt-2">
                        <div>{p.postedAt}</div>
                        <div className="bg-darkGrayishCyan rounded-full h-1 w-1"></div>
                        <div>{p.contract}</div>
                        <div className="bg-darkGrayishCyan rounded-full h-1 w-1"></div>
                        <div>{p.location}</div>
                      </div>
                    </div>
                  </div>
                  <hr className="flex-grow border-t-2 bg-darkGrayishCyan  m-4 xl:hidden" />
                  <div className="flex flex-1 flex-wrap xl:items-center xl:justify-end  ml-2 mb-4">
                    <Tag name={p.role} />
                    <Tag name={p.level} />
                    {p.languages.map((l) => (
                      <Tag key={l} name={l} />
                    ))}
                    {p.tools.map((t) => (
                      <Tag key={t} name={t} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
