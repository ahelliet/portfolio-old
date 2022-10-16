import { QueryClient } from "@tanstack/react-query"
import { GetStaticProps } from "next"
import Layout from "../components/common/layout/Layout"
import Contact from "../components/contact/Contact"
import { useGetMe, Author } from '../graphql';
import graphqlRequestClient from "../libs/graphqlRequestClient"
import { NextPageWithLayout } from "../types/page"

interface IContactPage {
    me: Author
}

const ContactPage: NextPageWithLayout<IContactPage> = ({ me }) => {
    return (
            <Contact me={me} />
    )
}

ContactPage.getLayout = (page) => {
    return <Layout>{page}</Layout>;
};

export default ContactPage

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