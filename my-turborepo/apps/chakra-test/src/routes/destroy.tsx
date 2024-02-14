import { Form, redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect(`/`);
}

export default function DeleteContact() {

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
