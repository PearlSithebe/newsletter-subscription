/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubcribers = /* GraphQL */ `
  query GetSubcribers($id: ID!) {
    getSubcribers(id: $id) {
      email
      id
      createdAt
      updatedAt
    }
  }
`;
export const listSubcribers = /* GraphQL */ `
  query ListSubcribers(
    $filter: ModelSubcribersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubcribers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        email
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
