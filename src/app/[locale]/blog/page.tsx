import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { allPosts } from 'contentlayer/generated';

import { sortPostsByDate } from '@/lib/utils';
import Heading from '@/components/heading';
import PageWrapper from '@/components/page-wrapper';
import PostList from '@/components/post-list';

export const metadata: Metadata = {
	title: '部落格',
	description: '歡迎來到我的部落格！這裡記錄著我在軟體開發和技術相關領域的學習心得、知識分享以及解決方案',
};

const BlogPage = () => {
	const locale = useLocale();
	const posts = sortPostsByDate(allPosts)
		.filter(post => post.language === locale);

	return (
		<PageWrapper>
			<Heading as='h1'>部落格</Heading>
			<p className='my-4'>
				我會在這裡分享各種關於軟體開發和技術相關的內容，目前總共有 <span className='mr-1 font-bold text-primary-500'>{posts.length}</span>篇文章。
			</p>
			<PostList posts={posts} />
		</PageWrapper>
	);
};

export default BlogPage;