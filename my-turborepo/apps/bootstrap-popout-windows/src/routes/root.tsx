import { useEffect } from "react";
import {
  Form,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit
} from "react-router-dom";
import AppDrawer from "../components/AppDrawer";
import { ALL_BEAMLINES } from "./beamlines/data";
import { BeamlineInfo } from "./beamlines/types";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  let beamlines: BeamlineInfo[] = ALL_BEAMLINES;
  if (q !== null)  {
    const regex = new RegExp(q, "i");
    beamlines = ALL_BEAMLINES.filter((b) => regex.test(b.name));
  }
  console.log(beamlines)
  return { beamlines, q };
}

export default function Root() {
  const { beamlines, q } = useLoaderData() as {
    beamlines: BeamlineInfo[];
    q: string | null;
  };
  const navigation = useNavigation();

  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");
  useEffect(() => {
    document.getElementById("q")!.value = q;
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>Bootstrap test</h1>
        <AppDrawer />

        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(e) => {
                const isFirstSearch = q == null;
                submit(e?.currentTarget.form, { replace: !isFirstSearch });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <div>
            <NavLink to={`multiple-component-screen`}>
              go to test srcreen
            </NavLink>
          </div>
        </div>
        <nav>
          {beamlines.length ? (
            <ul>
              {beamlines.map((b, i) => (
                <li key={`beamline-${b.name}`}>
                  <NavLink
                    to={`beamlines/${b.name}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    <h5>{b.name}</h5>
                    {/* {b.favorite && <span>★</span>} */}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No beamlines</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
