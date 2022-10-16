import { GetStaticProps } from "next"
import AboutMe from "../components/about-me/AboutMe"
import Layout from "../components/common/layout/Layout"
import { NextPageWithLayout } from "../types/page"
import graphqlRequestClient from "../libs/graphqlRequestClient";
import { useGetMe, useGetSkills, Author, Skill, useGetSocials, Social } from '../graphql';
import { QueryClient } from "@tanstack/react-query";


interface IAboutPage {
    me: Author,
    skills: Skill[]
    socials: Partial<Social>
}

const AboutPage: NextPageWithLayout<IAboutPage> = ({ me, skills, socials }) => {
    return (
        <AboutMe me={me} skills={skills} socials={socials} />
    )
}

export default AboutPage

AboutPage.getLayout = (page) => {
    return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient()

    const { skills } = await queryClient.fetchQuery(
        useGetSkills.getKey(),
        useGetSkills.fetcher(graphqlRequestClient)
    );

    const { author: me } = await queryClient.fetchQuery(
        useGetMe.getKey(),
        useGetMe.fetcher(graphqlRequestClient)
    );

    const { socials } = await queryClient.fetchQuery(
        useGetSocials.getKey(),
        useGetSocials.fetcher(graphqlRequestClient)
    )

    return {
        props: {
            skills,
            me,
            socials
        },
    }
};