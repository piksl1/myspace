import { NextResponse } from "next/server";

// Dummy data
const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Dolor Sit Amet",
    slug: "dolor-sit-amet",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Consectetur Adipiscing",
    slug: "consectetur-adipiscing",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
