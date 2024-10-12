"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import useIsInViewport from "@/hooks/useIsInViewport";
import Link from "next/link";
import projects from "@/data/projects";
import Row from "@/components/common/Row";
const HomeSection5 = ({ current, setCurrent }) => {
  const projectsRef = useRef(null);

  const isInView = useIsInViewport(projectsRef);

  useEffect(() => {
    if (isInView && current !== "projects") setCurrent("projects");

    return () => {
      if (isInView && current === "projects") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[20vh] items-center justify-center"
      id="projects"
      elementRef={projectsRef}
    >
      <ConstraintedBox classNames="p-4 py-1">
        <h2 className="text-center mx-auto">
        Recent <span className="text-[var(--primaryColor)]">Projects</span>
        </h2>

        <WrappedBox classes="justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9">
          {projects.map((project, index) => {
            return (
              <Column key={`service-${index}`} classes="w-full bg-[var(--textColor10)] p-4 rounded-[var(--borderRadius)] items-center justify-between text-center">
                <div className="bg-black p-[5px] rounded-[10px] lg:h-[35vh]  flex justify-center items-center">
               <Link href={project.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={project.image}
               width={700}
               height={400}
              className="rounded-lg"
            />
          </Link>
           </div>
           <Column classes="w-full mt-1 items-center">
           <h4 className="font-bold mt-2 mb-1 text-[var(--primaryColor)]">{project.title}</h4>
           <p className="text-center mb-2">{project.description}</p>
           <Row classes="w-full items-center justify-center flex-wrap mt-3">
          {project.tags.map((tag, i) => (
            <small
              key={`tag-${i}`}
              className="bg-[var(--primaryColor)] rounded-lg py-[0.45rem] px-[0.75rem] mr-2 mb-2 font-medium"
            >
              {tag}
            </small>
          ))}
        </Row>
</Column>

                {/* <h5 className="font-bold mt-4">{service.title}</h5> */}
              </Column>
            );
          })}
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;
