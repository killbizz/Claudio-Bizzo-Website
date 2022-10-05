import Fetcher from "./fetcher";

export default async function getBackendResponse(
  funName: string,
  method: string,
  params: string | null,
  token: string | undefined
) {
  const fetcher = new Fetcher(funName);
  return {
      response: await fetcher.getJSONResponse(method, params, token),
  };
}
