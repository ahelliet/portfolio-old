import { GetStaticProps } from "next"
import Experiences from "../components/experiences/Experiences"
import Layout from '../components/common/layout/Layout';
import { NextPageWithLayout } from "../types/page";
import { QueryClient } from '@tanstack/react-query';
import { Event, useGetEvents } from '../graphql';
import graphqlRequestClient from "../libs/graphqlRequestClient";

interface IExperiencesPage {
  events: Partial<Event>[]
}

const ExperiencesPage: NextPageWithLayout<IExperiencesPage> = ({ events : experiences }) => {
  return (
    <Experiences experiences={experiences} />
  )
}

export default ExperiencesPage

ExperiencesPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  const { events } = await queryClient.fetchQuery(
    useGetEvents.getKey(),
    useGetEvents.fetcher(graphqlRequestClient)
  );

  return {
    props: {
      events
    },
  }
};