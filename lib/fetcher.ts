export default class Fetcher {
  url: URL;

  constructor(funName: string) {
    this.url = new URL(
      // `http://localhost:8080/${funName}`
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/${funName}`
    );
  }

  async getJSONResponse(method: string, params: string | null = null, token: string | undefined = undefined): Promise<any> {

    let jwtToken: string = "Bearer " + (token !== undefined ? token : "");

    let header: HeadersInit = {
      "Content-Type": "application/json"
    };
    let req = null;

    // add JWT if present in a cookie
    Object.assign(header, token !== undefined ? { "Authorization": jwtToken } : null);

    if (method === "GET") {
      req = await fetch(this.url.href, {
        headers: header
      });
    } else {
      req = await fetch(this.url.href, {
        body: params,
        headers: header,
        method,
      });
    }

    if(method === "DELETE" && req.status === 204){
      return {
        status: 204
      }
    }
    if(!req.ok){
      return {
        error: req.statusText
      }
    }

    const data = req.json();
    return data;
  }
}
