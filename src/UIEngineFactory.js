async function getEngine(type) {
  try {
    const { createView } = await import(
      /* webpackChunkName: "[request]" */
      `./frameworks/${type}/bootstrap`
    );
    return createView;
  } catch {
    throw new Error(`invalid type: ${type}`);
  }
}

export { getEngine };
