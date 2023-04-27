export default defineNuxtPlugin(() => {
  addRouteMiddleware("auth", () => {
    const { $auth } = useNuxtApp();
    // @ts-ignore
    if (!$auth?.currentUser?.uid) {
      return abortNavigation();
    }
  });
});
