export default function useApi() {
  const request = async (url: string, method: string, body?: any) => {
    const options: RequestInit = {
      method,
      headers: { "Content-Type": "application/json" },
      ...(body && { body: JSON.stringify(body) }),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`API ${method} 실패: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      return await response.json();
    }

    return null;
  };

  return {
    get: (url: string) => request(url, "GET"),
    post: (url: string, body?: any) => request(url, "POST", body),
    del: (url: string) => request(url, "DELETE"),
    put: (url: string, body?: any) => request(url, "PUT", body),
  };
}
