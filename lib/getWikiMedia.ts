export async function getWikiMedia(search: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: search,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?${searchParams}`
    );
    if (res?.ok) {
      return res?.json();
    }
  } catch (error) {
    console.log(error);
  }
}
