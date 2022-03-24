import {
	Button,
	Container,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import DefaultLayout from '~/layouts/DefaultLayout';

import { FiArrowLeftCircle } from 'react-icons/fi';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import { dateFormatted } from '~/utils/dateParser';

import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { defaultSEO } from '~/config/seo';

export default function PostPage({ frontmatter, content }) {
	const router = useRouter();

	return (
		<>
			<NextSeo
				title={`${frontmatter.title} | Adrian (Sin Acento)`}
				description={frontmatter.description}
				openGraph={defaultSEO.openGraph}
			/>
			<Container maxW={'container.sm'} my={20}>
				<Button
					mb={12}
					size={'lg'}
					variant={'link'}
					leftIcon={<FiArrowLeftCircle />}
					onClick={() => router.back()}
					_focus={{ ring: 0 }}
					_hover={{
						textDecoration: 'none',
						color: useColorModeValue('gray.800', 'whiteAlpha.900'),
					}}
				>
					Volver
				</Button>
				<Heading fontFamily={'Work Sans'}>{frontmatter.title}</Heading>
				<Stack my={3}>
					<Text fontSize={'lg'} color={'gray.500'}>
						{dateFormatted(frontmatter.date)}
					</Text>
				</Stack>
				<div
					className="post"
					dangerouslySetInnerHTML={{ __html: marked(content) }}
				/>
			</Container>
		</>
	);
}

PostPage.Layout = DefaultLayout;

export async function getStaticProps({ params }) {
	const markdownWithMeta = fs.readFileSync(
		path.join('./src/content/posts', params.slug + '.md'),
		'utf-8'
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	if (!frontmatter) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			frontmatter,
			content,
		},
	};
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('./src/content/posts'));

	const posts = files.map((filename) => {
		const slug = filename.replace('.md', '');
		return { slug };
	});

	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}));

	return { paths, fallback: false };
}
