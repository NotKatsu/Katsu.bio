import requests


SPOTIFY_TOKEN = "https://accounts.spotify.com/api/token"
request_body = {
    "grant_type": "authorization_code",
    "code": "AQCl1zhrF6sz3Vp_jWwVSCs7SPK_b0CpwJE6By-Cpk2HSR-_KMog0rrZ96797IasTD5ibzaBNSI_aHRM1X6J6I61e2bvRWqAIua3RM4LT7mPKNyoxY-9slB6XpJh61atqhLemxkF57H7EUu2di1tQFc-BVQjY3VEY85nVtbbDZwpTLKiDLYIevzPbwP__wTpCM-IN-F_",
    "redirect_uri": "http://localhost:3000",
    "client_id": "3f225f200ff5417980559dfe7fbddda4",
    "client_secret": "a90e5b5c3783498da91817c986e33fbb",
}
r = requests.post(url=SPOTIFY_TOKEN, data=request_body)
resp = r.json()
print(resp)
print(r.status_code)