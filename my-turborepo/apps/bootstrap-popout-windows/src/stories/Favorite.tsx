import { Form, useFetcher } from "react-router-dom";

export function Favorite({ contact }) {
  // yes, this is a `let` for later
  const fetcher = useFetcher();
  let favorite = contact.favorite;

  if (fetcher.formData) {
    // an optimistic update
    favorite = fetcher.formData.get("favorite") === "true";
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
