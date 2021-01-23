import React, { Component, lazy, Suspense } from "react";
import Route from "../../components/utility/customRoute";
import customRoutes from "../../customApp/router";
import Loader from "../../components/utility/Loader/";
const routes = [
  {
    path: "",
    component: lazy(() => import("../Widgets")),
  },
  {
    path: "redux-forms",
    component: lazy(() => import("../Forms/ReduxForm")),
  },
  {
    path: "formik",
    component: lazy(() => import("../Forms/Formik")),
  },
  {
    path: "button",
    component: lazy(() => import("../UiElements/Button/")),
  },
  {
    path: "savedCards",
    component: lazy(() => import("../Ecommerce/Cards/")),
  },
  {
    path: "cart",
    component: lazy(() => import("../Ecommerce/Cart/")),
  },
  {
    path: "checkout",
    component: lazy(() => import("../Ecommerce/Checkout/")),
  },
  {
    path: "contact",
    component: lazy(() => import("../Contact")),
  },
  {
    path: "input",
    component: lazy(() => import("../UiElements/Input")),
  },
  {
    path: "chat",
    component: lazy(() => import("../Chat")),
  },
  {
    path: "calendar",
    component: lazy(() => import("../Calendar")),
  },
  {
    path: "shuffle",
    component: lazy(() => import("../Shuffle")),
  },
  {
    path: "popover",
    component: lazy(() => import("../UiElements/Popover")),
  },
  {
    path: "badges",
    component: lazy(() => import("../UiElements/Badges")),
  },
  {
    path: "lists",
    component: lazy(() => import("../UiElements/Lists")),
  },
  {
    path: "menus",
    component: lazy(() => import("../UiElements/Menus")),
  },
  {
    path: "cards",
    component: lazy(() => import("../UiElements/Cards/index")),
  },
  {
    path: "chips",
    component: lazy(() => import("../UiElements/Chips")),
  },
  {
    path: "avatars",
    component: lazy(() => import("../UiElements/Avatars/index")),
  },
  {
    path: "autocomplete",
    component: lazy(() => import("../UiElements/Autocomplete/")),
  },
  {
    path: "picker",
    component: lazy(() => import("../UiElements/Picker")),
  },
  {
    path: "selection-control",
    component: lazy(() => import("../UiElements/SelectionControl")),
  },
  {
    path: "dividers",
    component: lazy(() => import("../UiElements/Dividers/index")),
  },
  {
    path: "select",
    component: lazy(() => import("../UiElements/Select")),
  },
  {
    path: "stepper",
    component: lazy(() => import("../UiElements/Stepper")),
  },
  {
    path: "textFields",
    component: lazy(() => import("../UiElements/TextFields")),
  },
  {
    path: "dropzone",
    component: lazy(() => import("../AdvancedModules/Dropzone")),
  },
  {
    path: "code-mirror",
    component: lazy(() => import("../AdvancedModules/CodeMirror")),
  },
  {
    path: "github-search",
    component: lazy(() => import("../GithubSearch")),
  },
  {
    path: "youtube-search",
    component: lazy(() => import("../YoutubeSearch")),
  },
  {
    path: "shop",
    component: lazy(() => import("../Ecommerce/Algolia")),
  },
  {
    path: "material-ui-tables",
    component: lazy(() => import("../Tables/MaterialUiTables")),
  },
  {
    path: "googlemap",
    component: lazy(() => import("../Map/Google")),
  },
  {
    path: "leafletmap",
    component: lazy(() => import("../Map/Leaflet")),
  },
  {
    path: "google-chart",
    component: lazy(() => import("../Charts/googleChart")),
  },
  {
    path: "rechart",
    component: lazy(() => import("../Charts/recharts/")),
  },
  {
    path: "notes",
    component: lazy(() => import("../Notes/index")),
  },
  {
    path: "react-trend",
    component: lazy(() => import("../Charts/reactTrend")),
  },
  // {
  //   path: `${url}/todos`,
  //   component: lazy(() => import("../Todos/Todo")),
  // },
  // {
  //   path: "reactVis",
  //   component: lazy(() => import("../Charts/reactVis")),
  // },
  {
    path: "react-chartkick",
    component: lazy(() => import("../Charts/reactChartKick")),
  },
  {
    path: "react-chart-2",
    component: lazy(() => import("../Charts/reactChart2")),
  },
  {
    path: "dialogs",
    component: lazy(() => import("../AdvanceUI/Dialogs")),
  },
  {
    path: "gridlist",
    component: lazy(() => import("../AdvanceUI/GridList")),
  },
  {
    path: "popovers",
    component: lazy(() => import("../AdvanceUI/Popovers")),
  },
  {
    path: "progress",
    component: lazy(() => import("../AdvanceUI/Progress")),
  },
  {
    path: "snackbar",
    component: lazy(() => import("../AdvanceUI/Snackbar")),
  },
  {
    path: "tabs",
    component: lazy(() => import("../AdvanceUI/Tabs")),
  },
  {
    path: "tooltips",
    component: lazy(() => import("../AdvanceUI/Tooltips")),
  },
  {
    path: "email",
    component: lazy(() => import("../Mail")),
  },
  {
    path: "widgets",
    component: lazy(() => import("../Widgets")),
  },
  {
    path: "material-ui-picker",
    component: lazy(() => import("../AdvancedModules/MaterialUIPicker")),
  },
  {
    path: "invoice/:invoiceId",
    component: lazy(() => import("../Invoice/singleInvoice")),
  },
  {
    path: "invoice",
    component: lazy(() => import("../Invoice")),
  },
  {
    path: "react-color",
    component: lazy(() => import("../AdvancedModules/ReactColor")),
  },
  {
    path: "expansion-panel",
    component: lazy(() => import("../UiElements/ExpansionPanel")),
  },
  {
    path: "bottom-navigation",
    component: lazy(() => import("../UiElements/BottomNavigation")),
  },
  {
    path: "modals",
    component: lazy(() => import("../UiElements/Modals")),
  },
  {
    path: "box",
    component: lazy(() => import("../Box")),
  },
  {
    path: "scrum-board",
    component: lazy(() => import("../ScrumBoard")),
    exact: false,
  },
  ...customRoutes,
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <Suspense fallback={<Loader />}>
        <div style={style}>
          {routes.map((singleRoute) => {
            const { path, exact, ...otherProps } = singleRoute;
            return (
              <Route
                exact={exact === false ? false : true}
                key={singleRoute.path}
                path={`${url}/${singleRoute.path}`}
                {...otherProps}
              />
            );
          })}
        </div>
      </Suspense>
    );
  }
}

export default AppRouter;
