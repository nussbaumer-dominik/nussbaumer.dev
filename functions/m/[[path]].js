// First-party proxy for the Glance tracker, so the browser never talks to a
// domain that filter lists match on.
const ORIGIN = "https://analytics.home.nussbaumer.dev";

// ponytail: allowlist, not a pass-through proxy. A generic proxy would expose
// every path on the analytics host (dashboard, login) under nussbaumer.dev.
// The /api/v1/collect path is fixed by the tracker: it builds the endpoint as
// `data-api` + "/api/v1/collect".
const ROUTES = {
  "s.js": "/glance.js",
  "api/v1/collect": "/api/v1/collect",
};

export async function onRequest({request, params}) {
  const target = ROUTES[[].concat(params.path ?? []).join("/")];
  if (!target) return new Response("Not found", {status: 404});

  const isPost = request.method === "POST";
  const upstream = await fetch(ORIGIN + target, {
    method: isPost ? "POST" : "GET",
    // Beacon payload is a few hundred bytes; buffering avoids the streaming
    // request-body caveats in Workers.
    body: isPost ? await request.text() : undefined,
    headers: {
      "content-type": request.headers.get("content-type") ?? "text/plain",
      "user-agent": request.headers.get("user-agent") ?? "",
      "accept-language": request.headers.get("accept-language") ?? "",
      // Without this every hit is attributed to Cloudflare's egress IP.
      // Requires the openresty in front of Glance to trust XFF from Cloudflare.
      "x-forwarded-for": request.headers.get("cf-connecting-ip") ?? "",
    },
  });

  const res = new Response(upstream.body, upstream);
  res.headers.delete("access-control-allow-origin"); // same-origin now
  return res;
}
