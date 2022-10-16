import React from "react";
import { Event } from "../../graphql";

export const ExperienceCard = ({ title, description, year, company }: Partial<Event>) => {
    return (
      <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
        <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-orange-300 font-bold dark:text-gray-800">
          {year}
        </h1>
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="text-gray-500">
          {company}
        </p>
        <p className="text-gray-600 dark:text-gray-400 my-2">{description}</p>
      </div>
    );
  };