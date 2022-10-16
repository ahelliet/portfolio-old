import { GetStaticProps } from "next"
import Layout from "../components/common/layout/Layout"
import Projects from "../components/projects/Projects"
import { useGetProjects, useGetProjectBySlug, Project } from '../graphql';
import graphqlRequestClient from "../libs/graphqlRequestClient"
import { NextPageWithLayout } from "../types/page"
import { QueryClient } from '@tanstack/react-query';

interface IProjectsPage {
  projects: Partial<Project>[]
}

const ProjectsPage: NextPageWithLayout<IProjectsPage> = ({ projects }) => {
    return (
        <Projects projects={projects} />
    )
  }
  
export default ProjectsPage

ProjectsPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  const { projects } = await queryClient.fetchQuery(
      useGetProjects.getKey(),
      useGetProjects.fetcher(graphqlRequestClient)
  );
  
  return {
      props: {
          projects
      },
  }
};