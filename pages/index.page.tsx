import type { GetStaticProps } from 'next'
import Hero from '../components/hero/Hero'
import Layout from '../components/common/layout/Layout';
import { NextPageWithLayout } from '../types/page';
import { QueryClient } from '@tanstack/react-query';
import { Author, Project, useGetMe } from '../graphql';
import graphqlRequestClient from '../libs/graphqlRequestClient';

interface IIndexPage {
  me: Author
  project: Partial<Project>
}

const Home: NextPageWithLayout<IIndexPage> = ({ me }) => {
  return (
    <>
      <Hero me={me} />
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  const { author: me } = await queryClient.fetchQuery(
      useGetMe.getKey(),
      useGetMe.fetcher(graphqlRequestClient)
  );   

  return {
      props: {
          me
      },
  }
};