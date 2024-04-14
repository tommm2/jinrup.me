'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import Loading from '@/components/loading';
import Metric from '@/components/metric';
import { usePostViews } from '@/hooks';

type ViewCounterProps = {
	slug: string;
	shouldIncrement?: boolean;
};

const ViewCounter = ({ slug, shouldIncrement = false }: ViewCounterProps) => {
	const t = useTranslations('common');

	const {
		views,
		isLoading: viewsIsLoading,
		isError: viewsIsError,
		increment,
	} = usePostViews(slug);

	useEffect(() => {
		if (shouldIncrement) {
			increment();
		}
	}, []);

	return (
		<span>
			{t.rich('postViews', {
				count: () =>
					viewsIsError || viewsIsLoading ? (
						<Loading />
					) : (
						<Metric stat={views} />
					),
			})}
		</span>
	);
};

export default ViewCounter;
