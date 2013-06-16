interface OAuth {
	setClientOptions(options: Object): void;
	getOAuthAccessToken(
		oauth_token: string,
		oauth_token_secret: string,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: { id: string; screen_name: string; }) => void
	): void;
	getOAuthAccessToken(
		oauth_token: string,
		oauth_token_secret: string,
		oauth_verifier: string,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: { id: string; screen_name: string; }) => void
	): void;
	getProtectedResource(
		url,
		method,
		oauth_token,
		oauth_token_secret,
		callback:(req: any, res: any) => void
	): void;
	getProtectedResource(
		url: string,
		method: string,
		oauth_token: string,
		oauth_token_secret: string,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: string) => void
	): void;
	delete(
		url: string,
		oauth_token: string,
		oauth_token_secret: string,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: string) => void
	): any;
	get(
		url: string,
		oauth_token: string,
		oauth_token_secret: string,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: string) => void
	): any;
	put(
		url: string,
		oauth_token: string,
		oauth_token_secret: string,
		post_body: string,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: string) => void
	): any;
	put(
		url: string,
		oauth_token: string,
		oauth_token_secret: string,
		post_body: string,
		post_content_type: string,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: string) => void
	): any;
	post(
		url: string,
		oauth_token: string,
		oauth_token_secret: string,
		post_body: string,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: string) => void
	): any;
	post(
		url: string,
		oauth_token: string,
		oauth_token_secret: string,
		post_body: string,
		post_content_type: string,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: string) => void
	): any;
	getOAuthRequestToken(
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: string) => void
	): void;
	getOAuthRequestToken(
		extraParams: any,
		callback: (error: string, oauthToken: string, oauthTokenSecret: string, results: string) => void
	): void;
	signUrl(
		url: string,
		oauth_token: string,
		oauth_token_secret: string,
		method?: string
	): string;
	authHeader(
		url: string,
		oauth_token: string,
		oauth_token_secret: string,
		method?: string
	): string;
}

declare module "oauth" {
	declare var OAuth: {
		new(requestUrl: string,
			accessUrl: string,
			consumerKey: string,
			consumerSecret: string,
			version: string,
			authorize_callback: string,
			signatureMethod: string,
			nonceSize?: string,
			customHeaders?: Object
			): OAuth;
	}
}
