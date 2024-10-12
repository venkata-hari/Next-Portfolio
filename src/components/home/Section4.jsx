"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import useIsInViewport from "@/hooks/useIsInViewport";
import skills from "@/data/skills";

const HomeSection4 = ({ current, setCurrent }) => {
  const skillsRef = useRef(null);

  const isInView = useIsInViewport(skillsRef);

  useEffect(() => {
    if (isInView && current !== "skills") setCurrent("skills");

    return () => {
      if (isInView && current === "skills") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[20vh] items-center justify-center"
      id="skills"
      elementRef={skillsRef}
    >
      <ConstraintedBox classNames="p-4 py-1">
        <h2 className="text-center mx-auto">
          Technologies <span className="text-[var(--primaryColor)]">I Use</span>
        </h2>

        <WrappedBox classes="justify-items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-6 mt-9">
          {skills.map((service, index) => {
            return (
              <Column
                key={`skill-${index}`}
                classes="bg-[var(--textColor10)] p-4 px-8 rounded-[var(--borderRadius)] items-center text-center min-w-[8rem] lg:min-w-[10rem]"
              >
                <Image
                  src={service.icon}
                  alt={`service-${index}`}
                  width={100}
                  height={100}
                  sizes="100%"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={service.icon}
                  style={{
                    objectFit: "cover",
                    width: "4rem",
                    height: "auto",
                    aspectRatio: "1.5 / 1.5",
                  }}
                />

                <h5 className="font-bold mt-4">{service.title}</h5>
              </Column>
            );
          })}
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;
