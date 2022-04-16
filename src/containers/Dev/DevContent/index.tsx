import { PostType } from 'CreatePostPagesQuery';
import PhotoCard from 'components/PhotoCard';
import * as React from 'react';
import { useMemo } from 'react';

import './devContent.scss';

interface DevContentProps {
  posts: PostType[];
  selectedCategory: string;
}

function DevContent(props: DevContentProps) {
  const { posts, selectedCategory } = props;

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostType) =>
          selectedCategory !== 'All'
            ? categories?.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );

  return (
    <section className="content">
      {filteredPosts.map(({ node: { id, frontmatter } }: PostType) => (
        <PhotoCard key={id} {...frontmatter} />
      ))}
    </section>
  );
}

export default DevContent;
