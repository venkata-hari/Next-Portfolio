"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import FilledButton from "@/components/common/FilledButton";
import Column from "@/components/common/Column";
import Row from "@/components/common/Row";
import socialLinks from "@/data/socialLinks";
import Typewriter from 'typewriter-effect'
import About from "@/data/about";
import useIsInViewport from "@/hooks/useIsInViewport";

const HomeSection1 = ({ current, setCurrent }) => {
  const homeRef = useRef(null);

  const isInView = useIsInViewport(homeRef);

  const onHandleClickUrl = (url) => {
    if (typeof window === "undefined" || !url) return;

    window.open(url, "_blank");
  };

  useEffect(() => {
    if (isInView && current !== "about") setCurrent("about");

    return () => {
      if (isInView && current === "about") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[90vh] items-center justify-center"
      id="about"
      elementRef={homeRef}
    >
      <ConstraintedBox classNames="p-4 pb-16 pt-8 sm:pt-16">
        <WrappedBox classes="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center md:justify-items-stretch">
          <Row classes="ml-[15px] lg:ml-[0px] w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] pointer-events-none justify-self-center md:justify-self-end items-center justify-center rounded-full bg-transparent border-2 border-[var(--primaryColor60)] aspect-square overflow-hidden order-1 md:order-2 my-auto mr-20">
            <Row classes="w-full h-auto items-center justify-center rounded-full bg-transparent border-[0.8rem] border-[var(--primaryColor30)] aspect-square overflow-hidden pointer-events-none">
              <Image
                src={About.avatarUrl}
                alt="profile"
                width={400}
                height={400}
                sizes="100%"
                priority
                fetchPriority="high"
                placeholder="blur"
                blurDataURL={About.avatarUrl}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  aspectRatio: "1 / 1",
                }}
              />
            </Row>
          </Row>
          <Column classes="justify-center order-2">
            <p className="max-w-sm">{About.welcomeText}</p>
            <h1 className="text-[var(--primaryColor)]">{About.fullName}</h1>
            <div className="font-semibold max-w-sm text-sm">
              <Typewriter
                options={{
                  strings: ['FrontEnd Developer','BackEnd Developer','FullStack Developer','Mobile Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="mt-8 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg text-lg md:text-xl lg:text-2xl leading-relaxed">
              {About.description}
            </p>

            {/* Button Row */}
            <Row classes="mt-10 gap-4">
              <Column >
                <p className="text-md font-semibold">{About.followText}</p>
                <Row classes="mt-2 gap-2">
                  {socialLinks.map((link, index) => {
                    return (
                      <Link
                        key={`social-link-${index}`}
                        href={link.url}
                        target="_blank"
                        className="app__icon_btn p-3 lg:p-4"
                        aria-label={`${link.name}`}
                      >
                        <span className="text-xl"> {link.icon}</span>
                      </Link>
                    );
                  })}
                </Row>
              </Column>

              <Link href={About.resumeUrl} target="_blank" className="mt-8">
                <FilledButton
                  label="Resume"
                  className="button button--solid min-w-[128px] md:button--big"
                />
              </Link>
            </Row>
          </Column>
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
