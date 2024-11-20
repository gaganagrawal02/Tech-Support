import { request, gql } from 'graphql-request';

const graphqlAPI = 'https://ap-south-1.cdn.hygraph.com/content/cm09vndeh063a08uvlayx2o7u/master';

// Fetch all posts
export const fetchPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection {
        edges {
          node {
            admin {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges; // Return posts data
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return empty array in case of error
  }
};

// Fetch recent posts
export const getRecentPosts = async () => {
  const query = gql`
    query GetRecentPosts {
      posts(orderBy: createdAt_DESC, first: 3) {
        title
        featuredImage {
          url
        }
        createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            category {
              name
              slug
            }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.posts; // Return recent posts data
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return []; // Return empty array in case of error
  }
};

// Fetch similar posts based on categories and slug
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { category: { slug_in: $categories } }
        }
        first: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, { slug, categories });
    return result.posts; // Return similar posts data
  } catch (error) {
    console.error("Error fetching similar posts:", error);
    return []; // Return empty array in case of error
  }
};

// Fetch a single post by slug
// Ensure the function returns the correct shape of data
export const fetchPostBySlug = async (slug) => {
  const query = gql`
     query Assets {
      postsConnection {
        edges {
          node {
            admin {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.post; // Ensure this matches the structure expected
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null; // Handle the error case appropriately
  }
};


// Fetch all categories
export const fetchCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return result.categories; // Return categories data
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return empty array in case of error
  }
};

// Fetch posts by category slug
export const fetchPostsByCategory = async (categorySlug) => {
  const query = gql`
    query GetPostsByCategory($slug: String!) {
      posts(where: { category: { slug: $slug } }) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, { slug: categorySlug });
    return result.posts; // Return posts by category data
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return []; // Return empty array in case of error
  }
};
