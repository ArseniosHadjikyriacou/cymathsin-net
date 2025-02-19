import {
  type RouteConfig, 
  index,
  route,
  layout,
 } from "@react-router/dev/routes";

export default [
  layout("components/StaticUI.tsx", [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    route("news","routes/news.tsx"),
    route("news/:slug", "routes/newsPost.tsx"),
    route("events","routes/events.tsx"),
    route("events/:slug", "routes/eventsPost.tsx"),
    route("contact","routes/contact.tsx"),
  ]),
] satisfies RouteConfig;