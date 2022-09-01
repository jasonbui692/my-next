import Header from '@/components/common/header';
import { MainLayout } from '@/components/layout';
// import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();
  const [postList, setPostList] = useState([]);

  console.log('About query lala:  11asdasdadasas11', router.query);
  console.log('About query lala111:  11asdasdadasas11', router.query);
  console.log('About query lala111:  11asdasdadasas11', router.query);

  console.log('About query lala111:  11asdasdadasas11', router.query);
  console.log('About query lala111:  11asdasdadasas11', router.query);
  console.log('About query lala111:  11asdasdadasas11', router.query);

  const page = router.query?.page;
  console.log('first');

  useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
      const data = await response.json();

      setPostList(data.data);
    })();
  }, [page]);

  const handleNextClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <MainLayout>
      <Header />
      <h1>About page</h1>
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Next page</button>
    </MainLayout>
  );
}

export async function getStaticProps() {
  console.log('get static props');
  return {
    props: {},
  };
}

// if this function exist, it will be SSR
// export async function getServerSideProps() {
//   return {
//     props: {},
//   }
// }
