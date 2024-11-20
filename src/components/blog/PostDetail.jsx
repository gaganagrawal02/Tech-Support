import React from 'react';
import moment from 'moment';

import Navbar from '../Navbar/Navbar';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj?.title || 'Image'}
            height={obj?.height || 'auto'}
            width={obj?.width || '100%'}
            src={obj?.src || ''}
            className="my-4"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
    <Navbar />
      <div className="post-detail-container">
      <div >
        <img
          src={post?.featuredImage?.url || ''}
          alt={post?.title || 'Post Image'}
          className="post-img"
        />
      </div>
      <div>
        <div>
          <div>
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {post?.author?.name || 'Unknown Author'}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <span className="align-middle">{moment(post?.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post?.title || 'Untitled Post'}</h1>
        {post?.content?.raw?.children?.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
    </>
  );
};

export default PostDetail;
