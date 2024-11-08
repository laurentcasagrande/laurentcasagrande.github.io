import adapter from '@sveltejs/adapter-static';

export default {
	kit: {

		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
        paths: {
            // change below to your repo name
            base: process.argv.includes('dev') ? '' : '/laurentcasagrande.github.io'
		},
	}
};