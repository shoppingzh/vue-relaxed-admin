import { App } from 'vue';

const modules: Record<string, any> = import.meta.glob('./*/index.vue', { eager: true });

function getComponentName(path: string) {
  const re = new RegExp(/[/\\](\w+)[/\\]index.vue$/g);
  const result = re.exec(path);
  return result ? result[1] : null;
}

export default function(app: App) {
  Object.keys(modules).forEach((path) => {
    const component = modules[path].default;
    if (!component) return;
    const componentName = getComponentName(component.__file);
    if (!componentName) return;
    app.component(componentName, component);
  });
}
