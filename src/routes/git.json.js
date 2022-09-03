import 'dotenv/config';
//console.log(process.env)
import { gql, GraphQLClient } from 'graphql-request';

export async function GET() {
	const endpoint = 'https://api.github.com/graphql';

	try {
		const graphQLClient = new GraphQLClient(endpoint, {
			method: 'POST',
			headers: {
				authorization: 'Bearer ' + process.env.GIT_BEARER_TOKEN
			}
		});

		const query = gql`
			query {
				user(login: "jhalmu") {
					avatarUrl
					pinnedItems(first: 20, types: REPOSITORY) {
						totalCount
						nodes {
							... on Repository {
								id
								name
								createdAt
								url
								description
								homepageUrl
								isFork
								languages(first: 10) {
									nodes {
										name
									}
								}
							}
						}
					}
				}
			}
		`;

		const projects_git = await graphQLClient.request(query);
		//console.log(JSON.stringify(projects_git, undefined, 2))
		return {
			status: 200,
			body: { projects_git }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: 'There was server error.' }
		};
	}
}
//GET().catch((error) => console.error(error))
