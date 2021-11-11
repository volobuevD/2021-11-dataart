/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type OrganizationsQueryVariables = {
    count?: number | null;
};
export type OrganizationsQueryResponse = {
    readonly user: {
        readonly name: string | null;
        readonly organizations: {
            readonly totalCount: number;
            readonly nodes: ReadonlyArray<{
                readonly description: string | null;
                readonly avatarUrl: unknown;
                readonly name: string | null;
                readonly id: string;
                readonly membersWithRole: {
                    readonly totalCount: number;
                };
                readonly itemShowcase: {
                    readonly items: {
                        readonly totalCount: number;
                    };
                };
            } | null> | null;
        };
    } | null;
};
export type OrganizationsQuery = {
    readonly response: OrganizationsQueryResponse;
    readonly variables: OrganizationsQueryVariables;
};



/*
query OrganizationsQuery(
  $count: Int
) {
  user(login: "M0nica") {
    name
    organizations(first: $count) {
      totalCount
      nodes {
        description
        avatarUrl
        name
        id
        membersWithRole {
          totalCount
        }
        itemShowcase {
          items {
            totalCount
          }
        }
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "M0nica"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v3/*: any*/)
],
v6 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "first",
      "variableName": "count"
    }
  ],
  "concreteType": "OrganizationConnection",
  "kind": "LinkedField",
  "name": "organizations",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Organization",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": null
        },
        (v2/*: any*/),
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "OrganizationMemberConnection",
          "kind": "LinkedField",
          "name": "membersWithRole",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ProfileItemShowcase",
          "kind": "LinkedField",
          "name": "itemShowcase",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PinnableItemConnection",
              "kind": "LinkedField",
              "name": "items",
              "plural": false,
              "selections": (v5/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrganizationsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": "user(login:\"M0nica\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrganizationsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v6/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": "user(login:\"M0nica\")"
      }
    ]
  },
  "params": {
    "cacheID": "0b703d9b7b88a2599de12d0d02adf7a5",
    "id": null,
    "metadata": {},
    "name": "OrganizationsQuery",
    "operationKind": "query",
    "text": "query OrganizationsQuery(\n  $count: Int\n) {\n  user(login: \"M0nica\") {\n    name\n    organizations(first: $count) {\n      totalCount\n      nodes {\n        description\n        avatarUrl\n        name\n        id\n        membersWithRole {\n          totalCount\n        }\n        itemShowcase {\n          items {\n            totalCount\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a183b2dd83165021808e6aba60fedd2f';
export default node;
