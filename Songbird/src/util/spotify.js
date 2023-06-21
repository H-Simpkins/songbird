const clientId = '';
const code = undefined;

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accesssToken = await getAccessToken(clientId, code);
}