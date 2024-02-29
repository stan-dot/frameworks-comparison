import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ab884244"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { ChakraProvider, extendTheme } from "/node_modules/.vite/deps/@chakra-ui_react.js?v=87602aeb";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=88abebb6"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react;
import __vite__cjsImport3_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=40b0fe5a"; const ReactDOM = __vite__cjsImport3_reactDom_client.__esModule ? __vite__cjsImport3_reactDom_client.default : __vite__cjsImport3_reactDom_client;
import { RouterProvider, createBrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=98a63c8c";
import ErrorPage from "/src/error-page.tsx";
import "/src/index.css";
import BeamlinesListRoute, { loader as AllBeamlinesLoader } from "/src/routes/beamlines/BeamlineListRoute.tsx";
import BeamlinePanel, { loader as BeamlineLoader } from "/src/routes/beamlines/BeamlinePanel.tsx";
import BeamlineWrapper from "/src/routes/beamlines/BeamlineWrapper.tsx";
import Devices, { loader as DevicesLoader } from "/src/routes/beamlines/devices/Devices.tsx";
import ExperimentPanel from "/src/routes/beamlines/experiments/ExperimentPanel.tsx?t=1709202497736";
import Plans, { loader as PlansLoader } from "/src/routes/beamlines/plans/Plans.tsx";
import SpecificPlan, { loader as SpecificPlanLoader } from "/src/routes/beamlines/plans/SpecificPlan.tsx";
import Synoptics from "/src/routes/beamlines/synoptic/Synoptics.tsx";
import TechnicalUi from "/src/routes/beamlines/technical-ui/TechnicalUi.tsx";
import Root, { loader as rootLoader } from "/src/routes/root.tsx";
const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac"
    }
};
const router = createBrowserRouter([
    {
        path: "/",
        element: /*#__PURE__*/ _jsxDEV(Root, {}, void 0, false, {
            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
            lineNumber: 39,
            columnNumber: 14
        }, this),
        errorElement: /*#__PURE__*/ _jsxDEV(ErrorPage, {}, void 0, false, {
            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
            lineNumber: 40,
            columnNumber: 19
        }, this),
        children: [
            {
                path: "beamlines/",
                element: /*#__PURE__*/ _jsxDEV(BeamlineWrapper, {}, void 0, false, {
                    fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                    lineNumber: 44,
                    columnNumber: 18
                }, this),
                children: [
                    {
                        path: "list",
                        element: /*#__PURE__*/ _jsxDEV(BeamlinesListRoute, {}, void 0, false, {
                            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                            lineNumber: 48,
                            columnNumber: 22
                        }, this),
                        loader: AllBeamlinesLoader
                    },
                    {
                        path: ":beamlineName",
                        element: /*#__PURE__*/ _jsxDEV(BeamlinePanel, {}, void 0, false, {
                            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                            lineNumber: 53,
                            columnNumber: 22
                        }, this),
                        loader: BeamlineLoader
                    },
                    {
                        path: ":beamlineName/synoptic",
                        element: /*#__PURE__*/ _jsxDEV(Synoptics, {}, void 0, false, {
                            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                            lineNumber: 56,
                            columnNumber: 54
                        }, this)
                    },
                    {
                        path: ":beamlineName/technical-ui",
                        element: /*#__PURE__*/ _jsxDEV(TechnicalUi, {}, void 0, false, {
                            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                            lineNumber: 57,
                            columnNumber: 58
                        }, this)
                    },
                    {
                        path: ":beamlineName/experiments",
                        element: /*#__PURE__*/ _jsxDEV(ExperimentPanel, {}, void 0, false, {
                            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                            lineNumber: 58,
                            columnNumber: 57
                        }, this)
                    },
                    {
                        path: ":beamlineName/experiments/:experimentId",
                        element: /*#__PURE__*/ _jsxDEV(BeamlinePanel, {}, void 0, false, {
                            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                            lineNumber: 61,
                            columnNumber: 22
                        }, this)
                    },
                    {
                        path: ":beamlineName/devices",
                        element: /*#__PURE__*/ _jsxDEV(Devices, {}, void 0, false, {
                            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                            lineNumber: 65,
                            columnNumber: 22
                        }, this),
                        loader: DevicesLoader
                    },
                    {
                        path: ":beamlineName/plans",
                        element: /*#__PURE__*/ _jsxDEV(Plans, {}, void 0, false, {
                            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                            lineNumber: 70,
                            columnNumber: 22
                        }, this),
                        loader: PlansLoader
                    },
                    {
                        path: ":beamlineName/plans/:planName",
                        element: /*#__PURE__*/ _jsxDEV(SpecificPlan, {}, void 0, false, {
                            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                            lineNumber: 75,
                            columnNumber: 22
                        }, this),
                        loader: SpecificPlanLoader
                    }
                ]
            },
            {
                errorElement: /*#__PURE__*/ _jsxDEV(ErrorPage, {}, void 0, false, {
                    fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                    lineNumber: 81,
                    columnNumber: 23
                }, this),
                children: []
            }
        ],
        loader: rootLoader
    },
    {
        path: "app",
        element: /*#__PURE__*/ _jsxDEV("div", {
            children: /*#__PURE__*/ _jsxDEV("h1", {
                children: "Hello world"
            }, void 0, false, {
                fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }
]);
const theme = extendTheme({
    colors
});
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(React.StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ _jsxDEV(RouterProvider, {
            router: router
        }, void 0, false, {
            fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "/scratch/xma12127/projects/migrate/frameworks-comparison/my-turborepo/apps/bootstrap-popout-windows/src/main.tsx",
    lineNumber: 101,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IFJvdXRlclByb3ZpZGVyLCBjcmVhdGVCcm93c2VyUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIi4vZXJyb3ItcGFnZS50c3hcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQmVhbWxpbmVzTGlzdFJvdXRlLCB7XG4gIGxvYWRlciBhcyBBbGxCZWFtbGluZXNMb2FkZXIsXG59IGZyb20gXCIuL3JvdXRlcy9iZWFtbGluZXMvQmVhbWxpbmVMaXN0Um91dGUudHN4XCI7XG5pbXBvcnQgQmVhbWxpbmVQYW5lbCwge1xuICBsb2FkZXIgYXMgQmVhbWxpbmVMb2FkZXIsXG59IGZyb20gXCIuL3JvdXRlcy9iZWFtbGluZXMvQmVhbWxpbmVQYW5lbC50c3hcIjtcbmltcG9ydCBCZWFtbGluZVdyYXBwZXIgZnJvbSBcIi4vcm91dGVzL2JlYW1saW5lcy9CZWFtbGluZVdyYXBwZXIudHN4XCI7XG5pbXBvcnQgRGV2aWNlcywge1xuICBsb2FkZXIgYXMgRGV2aWNlc0xvYWRlcixcbn0gZnJvbSBcIi4vcm91dGVzL2JlYW1saW5lcy9kZXZpY2VzL0RldmljZXMudHN4XCI7XG5pbXBvcnQgRXhwZXJpbWVudFBhbmVsIGZyb20gXCIuL3JvdXRlcy9iZWFtbGluZXMvZXhwZXJpbWVudHMvRXhwZXJpbWVudFBhbmVsLnRzeFwiO1xuaW1wb3J0IFBsYW5zLCB7XG4gIGxvYWRlciBhcyBQbGFuc0xvYWRlcixcbn0gZnJvbSBcIi4vcm91dGVzL2JlYW1saW5lcy9wbGFucy9QbGFucy50c3hcIjtcbmltcG9ydCBTcGVjaWZpY1BsYW4sIHtcbiAgbG9hZGVyIGFzIFNwZWNpZmljUGxhbkxvYWRlcixcbn0gZnJvbSBcIi4vcm91dGVzL2JlYW1saW5lcy9wbGFucy9TcGVjaWZpY1BsYW4udHN4XCI7XG5pbXBvcnQgU3lub3B0aWNzIGZyb20gXCIuL3JvdXRlcy9iZWFtbGluZXMvc3lub3B0aWMvU3lub3B0aWNzLnRzeFwiO1xuaW1wb3J0IFRlY2huaWNhbFVpIGZyb20gXCIuL3JvdXRlcy9iZWFtbGluZXMvdGVjaG5pY2FsLXVpL1RlY2huaWNhbFVpLnRzeFwiO1xuaW1wb3J0IFJvb3QsIHsgbG9hZGVyIGFzIHJvb3RMb2FkZXIgfSBmcm9tIFwiLi9yb3V0ZXMvcm9vdC50c3hcIjtcblxuY29uc3QgY29sb3JzID0ge1xuICBicmFuZDoge1xuICAgIDkwMDogXCIjMWEzNjVkXCIsXG4gICAgODAwOiBcIiMxNTNlNzVcIixcbiAgICA3MDA6IFwiIzJhNjlhY1wiLFxuICB9LFxufTtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBlbGVtZW50OiA8Um9vdCAvPixcbiAgICBlcnJvckVsZW1lbnQ6IDxFcnJvclBhZ2UgLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJiZWFtbGluZXMvXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxCZWFtbGluZVdyYXBwZXIgLz4sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCJsaXN0XCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8QmVhbWxpbmVzTGlzdFJvdXRlIC8+LFxuICAgICAgICAgICAgbG9hZGVyOiBBbGxCZWFtbGluZXNMb2FkZXIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIjpiZWFtbGluZU5hbWVcIixcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxCZWFtbGluZVBhbmVsIC8+LFxuICAgICAgICAgICAgbG9hZGVyOiBCZWFtbGluZUxvYWRlcixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgcGF0aDogXCI6YmVhbWxpbmVOYW1lL3N5bm9wdGljXCIsIGVsZW1lbnQ6IDxTeW5vcHRpY3MgLz4gfSxcbiAgICAgICAgICB7IHBhdGg6IFwiOmJlYW1saW5lTmFtZS90ZWNobmljYWwtdWlcIiwgZWxlbWVudDogPFRlY2huaWNhbFVpIC8+IH0sXG4gICAgICAgICAgeyBwYXRoOiBcIjpiZWFtbGluZU5hbWUvZXhwZXJpbWVudHNcIiwgZWxlbWVudDogPEV4cGVyaW1lbnRQYW5lbCAvPiB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiOmJlYW1saW5lTmFtZS9leHBlcmltZW50cy86ZXhwZXJpbWVudElkXCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8QmVhbWxpbmVQYW5lbCAvPixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiOmJlYW1saW5lTmFtZS9kZXZpY2VzXCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8RGV2aWNlcyAvPixcbiAgICAgICAgICAgIGxvYWRlcjogRGV2aWNlc0xvYWRlcixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiOmJlYW1saW5lTmFtZS9wbGFuc1wiLFxuICAgICAgICAgICAgZWxlbWVudDogPFBsYW5zIC8+LFxuICAgICAgICAgICAgbG9hZGVyOiBQbGFuc0xvYWRlcixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiOmJlYW1saW5lTmFtZS9wbGFucy86cGxhbk5hbWVcIixcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxTcGVjaWZpY1BsYW4gLz4sXG4gICAgICAgICAgICBsb2FkZXI6IFNwZWNpZmljUGxhbkxvYWRlcixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZXJyb3JFbGVtZW50OiA8RXJyb3JQYWdlIC8+LFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9LFxuICAgIF0sXG4gICAgbG9hZGVyOiByb290TG9hZGVyLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCJhcHBcIixcbiAgICBlbGVtZW50OiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SGVsbG8gd29ybGQ8L2gxPlxuICAgICAgICB7LyogPEFwcCAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG5dKTtcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbG9ycyB9KTtcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikhKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJleHRlbmRUaGVtZSIsIlJlYWN0IiwiUmVhY3RET00iLCJSb3V0ZXJQcm92aWRlciIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJFcnJvclBhZ2UiLCJCZWFtbGluZXNMaXN0Um91dGUiLCJsb2FkZXIiLCJBbGxCZWFtbGluZXNMb2FkZXIiLCJCZWFtbGluZVBhbmVsIiwiQmVhbWxpbmVMb2FkZXIiLCJCZWFtbGluZVdyYXBwZXIiLCJEZXZpY2VzIiwiRGV2aWNlc0xvYWRlciIsIkV4cGVyaW1lbnRQYW5lbCIsIlBsYW5zIiwiUGxhbnNMb2FkZXIiLCJTcGVjaWZpY1BsYW4iLCJTcGVjaWZpY1BsYW5Mb2FkZXIiLCJTeW5vcHRpY3MiLCJUZWNobmljYWxVaSIsIlJvb3QiLCJyb290TG9hZGVyIiwiY29sb3JzIiwiYnJhbmQiLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsImVycm9yRWxlbWVudCIsImNoaWxkcmVuIiwiZGl2IiwiaDEiLCJ0aGVtZSIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiU3RyaWN0TW9kZSJdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLGNBQWMsRUFBRUMsV0FBVyxRQUFRLG1CQUFtQjtBQUMvRCxPQUFPQyxXQUFXLFFBQVE7QUFDMUIsT0FBT0MsY0FBYyxtQkFBbUI7QUFDeEMsU0FBU0MsY0FBYyxFQUFFQyxtQkFBbUIsUUFBUSxtQkFBbUI7QUFDdkUsT0FBT0MsZUFBZSxtQkFBbUI7QUFDekMsT0FBTyxjQUFjO0FBQ3JCLE9BQU9DLHNCQUNMQyxVQUFVQyxrQkFBa0IsUUFDdkIsMkNBQTJDO0FBQ2xELE9BQU9DLGlCQUNMRixVQUFVRyxjQUFjLFFBQ25CLHVDQUF1QztBQUM5QyxPQUFPQyxxQkFBcUIseUNBQXlDO0FBQ3JFLE9BQU9DLFdBQ0xMLFVBQVVNLGFBQWEsUUFDbEIseUNBQXlDO0FBQ2hELE9BQU9DLHFCQUFxQixxREFBcUQ7QUFDakYsT0FBT0MsU0FDTFIsVUFBVVMsV0FBVyxRQUNoQixxQ0FBcUM7QUFDNUMsT0FBT0MsZ0JBQ0xWLFVBQVVXLGtCQUFrQixRQUN2Qiw0Q0FBNEM7QUFDbkQsT0FBT0MsZUFBZSw0Q0FBNEM7QUFDbEUsT0FBT0MsaUJBQWlCLGtEQUFrRDtBQUMxRSxPQUFPQyxRQUFRZCxVQUFVZSxVQUFVLFFBQVEsb0JBQW9CO0FBRS9ELE1BQU1DLFNBQVM7SUFDYkMsT0FBTztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztJQUNQO0FBQ0Y7QUFFQSxNQUFNQyxTQUFTckIsb0JBQW9CO0lBQ2pDO1FBQ0VzQixNQUFNO1FBQ05DLHVCQUFTLFFBQUNOOzs7OztRQUNWTyw0QkFBYyxRQUFDdkI7Ozs7O1FBQ2Z3QixVQUFVO1lBQ1I7Z0JBQ0VILE1BQU07Z0JBQ05DLHVCQUFTLFFBQUNoQjs7Ozs7Z0JBQ1ZrQixVQUFVO29CQUNSO3dCQUNFSCxNQUFNO3dCQUNOQyx1QkFBU