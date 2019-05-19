// App.js
import { add } from "./math";
console.log(add(4,6)); // 10;

// math.js
export function add(a,b){
  return a + b;
}

// bundle.js
function add(a,b) {
  return a = b;
}
console.log(ad(4,6));

// Dynamic import syntax
import("./math")
  .then(math => {
    console.log(math.add(4,6));
  });

// React.lazy()
import React, { Suspense } from "react";

import MyErrorBoundary from "./MyErrorBoundary";
const OtherComponent = React.lazy(() => import("./OtherComponent"));
const AnotherComponent = React.lazy(() => import("./AnotherComponent"));
function MyComponent() {
  return (
    <div>
      <MyErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <OtherComponent />
            <AnotherCompoent />
          </section>
        </Suspense>
      </MyErrorBoundary>
    </div>
  )
}
// Route Based Code Splitting
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Suspense, lazy} from "react";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));

const App = () => {
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
};

// Named exports
// ManyComponents.js
export const MyComponent = /* ... */
export const MyUnusedComponent = /* ... */

// MyComponent.js
export { MyComponent as default} from "./ManyComponents";

// MyApp.js
import React, { lazy } from "react";
const MyComponent = lazy(() => import("./MyComponent"));

