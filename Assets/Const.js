import { gql } from '@apollo/client'
export const navigationList=[
    {
        name:"خانه",href:"/home",id:1
    },
    {
        name:"محصولات",href:"/products",id:2
    },
    {
        name:"خدمات",href:"/services",id:3
    },
    {
        name:"وبلاگ",href:"/",id:4
    }
]

export const AllPost = gql`
  query ALL_POSTS {
    getPosts {
      _id
      title
      body
      commentCount
      author
      introImageUrl {
        host
        path
      }
      category{
        _id
      }
      createdAt
    }
  }
`
export const allCategories = gql`
query ALL_Categories {
 getPostCategories{
    _id
    name   
  }
  }
`
export const loginQuery = gql`
mutation Login($userName:String!, $password:String!) {
  userLogin(inputs: { userName: $userName, password: $password }) {
    _id
    fullName
     
  }
}
`;