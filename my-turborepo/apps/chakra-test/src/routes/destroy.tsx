import { Form, redirect, useLoaderData } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ request, params }) {
  await deleteContact(params.contactId);
  return redirect(`/`);
}

export default function DeleteContact() {
  const { contact } = useLoaderData();

  return (
    <Form method="post" id="delete-contact-form">
      <p>
        <span> are you sure to delete this contact?</span>
        <button type="submit">Delete</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}
