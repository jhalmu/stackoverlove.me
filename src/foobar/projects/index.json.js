import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export async function GET() {
	try {
		const query = gql`
			query Projects {
				projects {
					name
					description
					tags
					sourceCode
					image {
						url
					}
				}
			}
		`;
		const { projects } = await client.request(query);

		return {
			status: 200,
			body: { projects }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: 'Tehere was sevrverrrr errorrr.' }
		};
	}
}
