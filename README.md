# GraphDashboard

Descriptions and URLs are presented inside a PrimeNG accordion. The date field is excluded, as it didn’t provide significant value to the graph without further context.

I chose Vega-Lite because it’s a tool I’m familiar with, and it enables me to define graphs in a JSON-like format. This approach simplifies making changes to the graph structure.

Regarding architecture, the project uses separate services for fetching raw graph data and transforming it into a usable format for the app. This separation allows for easy unit testing and isolates data preparation from the component logic.

Potential Improvements:
- Switch from Observables to Signals in the component for better performance (though not fully supported in Angular yet).
- Enhancements in styling and theming.
- Improvements to graph visuals and interactivity.
- Add filtering options or grouping of graphs based on specific criteria.

<img width="1411" alt="image" src="https://github.com/user-attachments/assets/e3f31e8d-0414-42ce-a751-3cdee063eea3" />


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
